document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("contenedor-modulos");

  if (!container) {
    console.error('No se encontró el contenedor "#contenedor-modulos".');
    return;
  }

  if (typeof MODULOS_INICIALES === "undefined" || !Array.isArray(MODULOS_INICIALES)) {
    console.error("No se pudo cargar el listado inicial de módulos.");
    container.replaceChildren(createMessage("No se pudo cargar el mapa de módulos. Intenta actualizar la página."));
    return;
  }

  if (MODULOS_INICIALES.length === 0) {
    container.replaceChildren(createMessage("Todavía no hay módulos publicados."));
    return;
  }

  const cards = MODULOS_INICIALES.map(createModuleCard);
  container.replaceChildren(...cards);
});

function createModuleCard(module) {
  const card = document.createElement("article");
  card.className = "module-card";

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

  card.append(header, title, teacher, period, description, badges);
  return card;
}

function createMessage(text) {
  const message = document.createElement("p");
  message.className = "empty-message";
  message.textContent = text;
  return message;
}
