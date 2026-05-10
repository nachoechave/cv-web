document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btnInicio");

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});