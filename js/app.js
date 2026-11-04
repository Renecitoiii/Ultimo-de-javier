const QUIZ_PROGRESS_KEY = "hub3dsb-quiz-progress-v05";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("contenedor-modulos");
  const structuresContainer = document.getElementById("contenedor-estructuras");
  const dialog = document.getElementById("modal-ficha");
  const dialogTitle = document.getElementById("modal-titulo");
  const dialogContent = document.getElementById("contenido-ficha");
  const closeButton = document.getElementById("modal-cerrar");
  const summaryStats = document.getElementById("resumen-estadisticas");
  const summaryModules = document.getElementById("resumen-modulos");
  const saveStatus = document.getElementById("progress-save-status");

  if (!container) {
    console.error('No se encontró el contenedor "#contenedor-modulos".');
    return;
  }

  if (!structuresContainer) {
    console.error('No se encontró el contenedor "#contenedor-estructuras".');
  }

  if (typeof MODULOS_INICIALES === "undefined" || !Array.isArray(MODULOS_INICIALES)) {
    console.error("No se pudo cargar el listado inicial de módulos.");
    container.replaceChildren(createMessage("No se pudo cargar el mapa de módulos. Intenta actualizar la página."));
    return;
  }

  if (!dialog || !dialogTitle || !dialogContent || !closeButton || !summaryStats || !summaryModules) {
    console.error("Faltan elementos necesarios para mostrar las fichas y el resumen.");
    container.replaceChildren(createMessage("No se pudo iniciar el portal de estudio."));
    return;
  }

  const progress = loadProgress();
  const moduleCount = document.getElementById("modules-count");
  if (moduleCount) {
    moduleCount.textContent = `${String(MODULOS_INICIALES.length).padStart(2, "0")} MÓDULOS`;
  }

  renderCards();
  renderStructures();
  renderSummary();

  closeButton.addEventListener("click", () => dialog.close());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) {
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  function loadProgress() {
    try {
      const saved = localStorage.getItem(QUIZ_PROGRESS_KEY);
      if (!saved) {
        return { responses: {} };
      }

      const parsed = JSON.parse(saved);
      if (!parsed || typeof parsed.responses !== "object" || Array.isArray(parsed.responses)) {
        throw new Error("El formato del progreso guardado no es válido.");
      }
      return { responses: parsed.responses };
    } catch (error) {
      console.error("No se pudo leer el progreso guardado del quiz.", error);
      if (saveStatus) {
        saveStatus.textContent = "No se pudo leer el progreso guardado. Puedes continuar, pero el avance podría no conservarse.";
      }
      return { responses: {} };
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(progress));
      if (saveStatus) {
        saveStatus.textContent = "Progreso guardado en este dispositivo.";
      }
    } catch (error) {
      console.error("No se pudo guardar el progreso del quiz.", error);
      if (saveStatus) {
        saveStatus.textContent = "No se pudo guardar el progreso. Revisa el almacenamiento disponible en el navegador.";
      }
    }
  }

  function responseFor(moduleId, questionIndex) {
    return progress.responses[moduleId]?.[questionIndex] ?? null;
  }

  function moduleProgress(module) {
    const answers = progress.responses[module.id] ?? {};
    const answered = Object.keys(answers).filter((index) => module.quiz[Number(index)]).length;
    const correct = Object.entries(answers).filter(([index, answer]) => (
      module.quiz[Number(index)] && answer?.correct === true
    )).length;
    return { answered, correct, total: module.quiz.length };
  }

  function renderCards() {
    container.replaceChildren(...MODULOS_INICIALES.map(createModuleCard));
  }

  function renderStructures() {
    if (!structuresContainer) {
      return;
    }

    if (typeof ESTRUCTURAS_DATOS === "undefined" || !Array.isArray(ESTRUCTURAS_DATOS)) {
      console.error("No se pudo cargar el catálogo de estructuras de datos.");
      structuresContainer.replaceChildren(createMessage("No se pudo cargar esta sección. Intenta actualizar la página."));
      return;
    }

    if (ESTRUCTURAS_DATOS.length === 0) {
      structuresContainer.replaceChildren(createMessage("Pronto se agregarán estructuras de datos."));
      return;
    }

    structuresContainer.replaceChildren(...ESTRUCTURAS_DATOS.map(createStructureCard));
  }

  function createStructureCard(structure) {
    const card = document.createElement("article");
    card.className = "structure-card";
    card.dataset.category = structure.categoria;

    const category = document.createElement("p");
    category.className = "structure-category";
    category.textContent = structure.categoria;

    const title = document.createElement("h3");
    title.textContent = structure.nombre;

    const summary = document.createElement("p");
    summary.className = "structure-summary";
    summary.textContent = structure.resumen;

    const details = document.createElement("details");
    details.className = "structure-details";
    const summaryLabel = document.createElement("summary");
    summaryLabel.textContent = "Funcionamiento y ejemplo";

    const explanation = document.createElement("p");
    explanation.textContent = structure.funcionamiento;

    const exampleLabel = document.createElement("h4");
    exampleLabel.textContent = `Ejemplo en ${structure.ejemplo.lenguaje}`;
    const code = document.createElement("pre");
    const codeElement = document.createElement("code");
    codeElement.textContent = structure.ejemplo.codigo;
    code.append(codeElement);

    const advantages = createStructureList("Ventajas", structure.ventajas);
    const considerations = createStructureList("Consideraciones", structure.consideraciones);
    details.append(summaryLabel, explanation, exampleLabel, code, advantages, considerations);
    card.append(category, title, summary, details);
    return card;
  }

  function createStructureList(title, values) {
    const wrapper = document.createElement("div");
    wrapper.className = "structure-points";
    const heading = document.createElement("h4");
    heading.textContent = title;
    const list = document.createElement("ul");
    values.forEach((value) => {
      const item = document.createElement("li");
      item.textContent = value;
      list.append(item);
    });
    wrapper.append(heading, list);
    return wrapper;
  }

  function createModuleCard(module) {
    const card = document.createElement("article");
    card.className = "module-card";
    card.id = `modulo-${module.id}`;

    const header = document.createElement("div");
    header.className = "module-card-head";

    const id = document.createElement("span");
    id.className = "module-id";
    id.textContent = module.id;

    const status = document.createElement("span");
    status.className = "module-status";
    status.textContent = module.estado;
    header.append(id, status);

    const title = document.createElement("h3");
    title.textContent = module.nombre;

    const teacher = document.createElement("p");
    teacher.className = "module-teacher";
    teacher.textContent = module.docente;

    const period = document.createElement("p");
    period.className = "module-period";
    period.textContent = module.periodo;

    const description = document.createElement("p");
    description.className = "module-description";
    description.textContent = module.descripcionCorta;

    const badges = document.createElement("ul");
    badges.className = "module-badges";
    badges.setAttribute("aria-label", "Tecnologías y temas");
    module.badges.forEach((badgeText) => {
      const badge = document.createElement("li");
      badge.textContent = badgeText;
      badges.append(badge);
    });

    const score = moduleProgress(module);
    const quizSummary = document.createElement("div");
    quizSummary.className = "module-quiz-summary";
    const quizDescription = document.createElement("span");
    quizDescription.textContent = `Cuestionario · ${score.total} preguntas`;
    const quizScore = document.createElement("strong");
    quizScore.textContent = `🏆 ${score.correct} copas · ${score.answered}/${score.total}`;
    quizSummary.append(quizDescription, quizScore);

    const openButton = document.createElement("button");
    openButton.className = "module-open";
    openButton.type = "button";
    openButton.textContent = "Abrir ficha y cuestionario";
    openButton.setAttribute("aria-label", `Abrir ficha y cuestionario: ${module.nombre}`);
    openButton.addEventListener("click", () => {
      renderModuleDetails(module);
      dialog.showModal();
      closeButton.focus();
    });

    card.append(header, title, teacher, period, description, badges, quizSummary, openButton);
    return card;
  }

  function renderModuleDetails(module) {
    dialogTitle.textContent = module.nombre;
    dialogContent.replaceChildren();

    const meta = document.createElement("p");
    meta.className = "detail-meta";
    meta.textContent = `${module.id} · ${module.docente} · ${module.periodo}`;
    dialogContent.append(meta);

    appendTextSection(dialogContent, "Resumen del módulo", module.resumen);
    appendListSection(dialogContent, "Aprendizajes", module.aprendizajes);
    appendObjectSection(dialogContent, "Instrumentos de evaluación", module.instrumentos, "descripcion");
    appendObjectSection(dialogContent, "Programas", module.programas, "uso");
    appendObjectSection(dialogContent, "Herramientas y tecnologías", module.herramientas, "uso");
    appendLinkSection(dialogContent, "Recursos de estudio", module.recursos, "titulo");
    appendLinkSection(dialogContent, "Evidencias", module.evidencias, "titulo");
    appendQuizSection(dialogContent, module);
  }

  function appendTextSection(parent, title, text) {
    const section = createDetailSection(title);
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    section.append(paragraph);
    parent.append(section);
  }

  function appendListSection(parent, title, items) {
    const section = createDetailSection(title);
    const list = document.createElement("ul");
    list.className = "detail-list";
    items.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.append(item);
    });
    section.append(list);
    parent.append(section);
  }

  function appendObjectSection(parent, title, items, descriptionKey) {
    const section = createDetailSection(title);
    const list = document.createElement("ul");
    list.className = "detail-list detail-cards";

    items.forEach((entry) => {
      const item = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = entry.nombre;
      const description = document.createElement("p");
      description.textContent = entry[descriptionKey];
      item.append(name, description);
      if (entry.tipo) {
        const type = document.createElement("span");
        type.className = "detail-tag";
        type.textContent = entry.tipo;
        item.prepend(type);
      }
      list.append(item);
    });

    section.append(list);
    parent.append(section);
  }

  function appendLinkSection(parent, title, items, labelKey) {
    const section = createDetailSection(title);
    const list = document.createElement("ul");
    list.className = "detail-list detail-links";

    items.forEach((entry) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = entry.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = entry[labelKey];
      item.append(link);

      if (entry.tipo) {
        const type = document.createElement("span");
        type.className = "detail-tag";
        type.textContent = entry.tipo;
        item.append(type);
      }

      if (entry.descripcion) {
        const description = document.createElement("p");
        description.textContent = entry.descripcion;
        item.append(description);
      }

      list.append(item);
    });

    section.append(list);
    parent.append(section);
  }

  function appendQuizSection(parent, module) {
    const section = createDetailSection("Cuestionario", "quiz-section");
    const heading = section.querySelector("h3");
    const score = moduleProgress(module);
    const trophyCount = document.createElement("span");
    trophyCount.className = "quiz-trophy-count";
    trophyCount.textContent = `🏆 ${score.correct} de ${score.total} copas`;
    heading.after(trophyCount);

    const intro = document.createElement("p");
    intro.className = "quiz-intro";
    intro.textContent = "Responde una vez cada pregunta. Al acertar ganas una copa; al finalizar verás tu resultado.";
    section.append(intro);

    module.quiz.forEach((question, questionIndex) => {
      const questionCard = document.createElement("fieldset");
      questionCard.className = "quiz-question";

      const legend = document.createElement("legend");
      legend.textContent = `${questionIndex + 1}. ${question.pregunta}`;
      questionCard.append(legend);

      const options = document.createElement("div");
      options.className = "quiz-options";
      const feedback = document.createElement("p");
      feedback.className = "quiz-feedback";
      feedback.setAttribute("aria-live", "polite");
      feedback.setAttribute("role", "status");

      const savedAnswer = responseFor(module.id, questionIndex);
      question.opciones.forEach((option, optionIndex) => {
        const button = document.createElement("button");
        button.className = "quiz-option";
        button.type = "button";
        button.textContent = option;
        button.disabled = Boolean(savedAnswer);

        if (savedAnswer?.correct && optionIndex === question.respuestaCorrecta) {
          button.classList.add("is-correct");
        } else if (savedAnswer && optionIndex === savedAnswer.selectedIndex && !savedAnswer.correct) {
          button.classList.add("is-incorrect");
        }

        button.addEventListener("click", () => {
          if (responseFor(module.id, questionIndex)) {
            return;
          }

          const isCorrect = optionIndex === question.respuestaCorrecta;
          progress.responses[module.id] ??= {};
          progress.responses[module.id][questionIndex] = { selectedIndex: optionIndex, correct: isCorrect };
          saveProgress();
          button.classList.add(isCorrect ? "is-correct" : "is-incorrect");
          options.querySelectorAll("button").forEach((answerButton, index) => {
            answerButton.disabled = true;
            if (isCorrect && index === question.respuestaCorrecta) {
              answerButton.classList.add("is-correct");
            }
          });
          feedback.classList.add(isCorrect ? "feedback-correct" : "feedback-incorrect");
          const correctAnswer = question.opciones[question.respuestaCorrecta].replace(/[.!?]$/, "");
          feedback.textContent = isCorrect
            ? `¡Correcto! 🏆 Ganaste una copa. ${question.explicacion}`
            : `Respuesta incorrecta. La opción correcta es: ${correctAnswer}. ${question.explicacion}`;

          renderCards();
          renderSummary();
          if (saveStatus) {
            saveStatus.textContent = "Progreso guardado en este dispositivo.";
          }
          updateQuizHeader(module, heading, trophyCount);
        });
        options.append(button);
      });

      if (savedAnswer) {
        feedback.classList.add(savedAnswer.correct ? "feedback-correct" : "feedback-incorrect");
        const correctAnswer = question.opciones[question.respuestaCorrecta].replace(/[.!?]$/, "");
        feedback.textContent = savedAnswer.correct
          ? `¡Correcto! 🏆 Ganaste una copa. ${question.explicacion}`
          : `Respuesta incorrecta. La opción correcta es: ${correctAnswer}. ${question.explicacion}`;
      }

      questionCard.append(options, feedback);
      section.append(questionCard);
    });

    const resetButton = document.createElement("button");
    resetButton.className = "quiz-reset";
    resetButton.type = "button";
    resetButton.textContent = "Reiniciar cuestionario";
    resetButton.addEventListener("click", () => {
      delete progress.responses[module.id];
      saveProgress();
      renderCards();
      renderSummary();
      renderModuleDetails(module);
    });
    section.append(resetButton);

    const finish = document.createElement("p");
    finish.className = "quiz-finish";
    finish.setAttribute("aria-live", "polite");
    section.append(finish);
    updateQuizHeader(module, heading, trophyCount, finish);
    parent.append(section);
  }

  function updateQuizHeader(module, heading, trophyCount, finish) {
    const score = moduleProgress(module);
    trophyCount.textContent = `🏆 ${score.correct} de ${score.total} copas`;
    if (finish) {
      finish.textContent = score.answered === score.total
        ? `Cuestionario completado: ${score.correct} de ${score.total} respuestas correctas.`
        : `${score.answered} de ${score.total} preguntas respondidas.`;
      finish.classList.toggle("quiz-finish-complete", score.answered === score.total);
    }
    heading.setAttribute("aria-label", `Cuestionario: ${score.correct} respuestas correctas de ${score.total}`);
  }

  function renderSummary() {
    const allScores = MODULOS_INICIALES.map((module) => moduleProgress(module));
    const answered = allScores.reduce((total, score) => total + score.answered, 0);
    const trophies = allScores.reduce((total, score) => total + score.correct, 0);
    const possible = allScores.reduce((total, score) => total + score.total, 0);
    const completedModules = allScores.filter((score) => score.answered === score.total).length;

    summaryStats.replaceChildren(
      createStat("Copas ganadas", `🏆 ${trophies}`, "trophy-stat"),
      createStat("Preguntas respondidas", `${answered} / ${possible}`),
      createStat("Módulos completados", `${completedModules} / ${MODULOS_INICIALES.length}`)
    );

    summaryModules.replaceChildren(...MODULOS_INICIALES.map((module) => {
      const score = moduleProgress(module);
      const row = document.createElement("div");
      row.className = "summary-module";

      const name = document.createElement("span");
      name.className = "summary-module-name";
      name.textContent = module.nombre;

      const result = document.createElement("span");
      result.className = "summary-module-score";
      result.textContent = `🏆 ${score.correct} · ${score.answered}/${score.total}`;

      const track = document.createElement("div");
      track.className = "progress-track";
      track.setAttribute("role", "progressbar");
      track.setAttribute("aria-label", `Progreso de ${module.nombre}`);
      track.setAttribute("aria-valuemin", "0");
      track.setAttribute("aria-valuemax", String(score.total));
      track.setAttribute("aria-valuenow", String(score.answered));

      const fill = document.createElement("div");
      fill.className = "progress-fill";
      fill.style.width = `${score.total ? (score.answered / score.total) * 100 : 0}%`;
      track.append(fill);
      row.append(name, result, track);
      return row;
    }));

    if (!document.getElementById("progress-reset")) {
      const resetButton = document.createElement("button");
      resetButton.className = "progress-reset";
      resetButton.id = "progress-reset";
      resetButton.type = "button";
      resetButton.textContent = "Borrar todo mi progreso";
      resetButton.addEventListener("click", () => {
        if (!window.confirm("¿Quieres borrar todas tus respuestas y copas guardadas en este dispositivo?")) {
          return;
        }
        progress.responses = {};
        saveProgress();
        renderCards();
        renderSummary();
        if (dialog.open) {
          dialog.close();
        }
      });
      summaryModules.after(resetButton);
    }
  }

  function createStat(label, value, className = "") {
    const stat = document.createElement("div");
    stat.className = `summary-stat ${className}`.trim();
    const title = document.createElement("span");
    title.textContent = label;
    const number = document.createElement("strong");
    number.textContent = value;
    stat.append(title, number);
    return stat;
  }

  function createDetailSection(title, className = "") {
    const section = document.createElement("section");
    section.className = `detail-section ${className}`.trim();
    const heading = document.createElement("h3");
    heading.textContent = title;
    section.append(heading);
    return section;
  }
});

function createMessage(text) {
  const message = document.createElement("p");
  message.className = "empty-message";
  message.textContent = text;
  return message;
}
