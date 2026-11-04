#!/usr/bin/env bash
set -euo pipefail

# Ejecutar desde la raíz de este proyecto para una primera publicación.
project_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
current_dir="$(pwd)"

if [[ "$current_dir" != "$project_root" ]]; then
  printf 'Error: ejecuta este script desde la carpeta del proyecto: %s\n' "$project_root" >&2
  exit 1
fi

if git_root="$(git rev-parse --show-toplevel 2>/dev/null)" && [[ "$git_root" != "$project_root" ]]; then
  printf 'Error: esta carpeta pertenece al repositorio Git superior: %s\n' "$git_root" >&2
  printf 'Copia el portal a una carpeta independiente antes de publicarlo.\n' >&2
  exit 1
fi

mkdir -p css js data

git init
git add index.html css/styles.css data/modulos.js js/app.js README.md comandos.sh
git commit -m "feat: crea portal Cimientos del HUB v0.2"
git branch -M main
git remote add origin https://github.com/Renecitoiii/Ultimo-de-javier.git
git push -u origin main
git tag -a v0.2 -m "Versión 0.2 - Cimientos del HUB"
git push origin v0.2
