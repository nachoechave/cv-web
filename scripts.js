document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnInicio");

  boton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});