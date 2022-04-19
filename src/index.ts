import { handleRoute } from "./handle-route";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

function findAndProcessLinks() {
  const els = document.querySelectorAll(".link-interno");
  for (const link of els) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = (e.target as any).getAttribute("href");
      goTo(route);
    });
  }
  //busca los links internos, les agrega un eventListener que hace que
  // evite primero la redireccion, y luego obtiene el "route" con esa cosa rara
  // y por último usa la función goTo que ya está declarada antes para setear la URL simbólica
}

function main() {
  findAndProcessLinks();
  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
}

main();

/*
Vamos a usar regex, para evaluar si por ejemplo la ruta es /search/cualquier-cosa
Entonces la expresión va a ser /\/search\/./ 
Donde la \ significa que no tome las / como elementos de la regex, y el .
que haya algo, cualquier letra o letras pero que haya algo, si es "/search/" va
a dar False.
Puedo usar las Regex con el método .test por ejemplo
const regex = /\/profile\/./
regex.test("/profile/ramiro");
(va a dar True)
*/
