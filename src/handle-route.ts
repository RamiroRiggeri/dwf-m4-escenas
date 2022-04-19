export function handleRoute(route) {
  console.log("handle route recibió: ", route);
  // (4) es el "Router", es lo que va a hacer algo en base a la URL
  // mostrarle algo u otro en base a la ruta.

  const contenedorEl = document.querySelector(".contenedor");

  // voy a crear acá una collection de rutas para definir que hago con
  // cada /ruta
  const routes = [
    {
      path: /\/sit1/,
      handler: () => (contenedorEl.textContent = "Situación 1"),
    },
    {
      path: /\/sit2/,
      handler: () => (contenedorEl.textContent = "Situación 2"),
    },
    {
      path: /\/search\/./,
      handler: () => (contenedorEl.textContent = "Buscador"),
    },
  ];
  for (const r of routes) {
    //evalúo si la propiedad path del objeto routes es igual
    //al parámetro que le paso a la función, y hago que se ejecute el handler
    if (r.path.test(route)) {
      r.handler();
      console.log("ruta ", r);
    }
  }
}
