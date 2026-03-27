console.log("CV cargado correctamente");

function saludar() {
  alert("Gracias por visitar mi CV. Podés contactarme por email.");
}

function mostrarTab(tabId, boton = null) {

  let contenidos = document.querySelectorAll(".tab-content");
  let botones = document.querySelectorAll(".tab-btn");

  contenidos.forEach(tab => tab.classList.remove("active"));
  botones.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");

  // Solo marca activo si viene de tabs
  if (boton && boton.classList.contains("tab-btn")) {
    boton.classList.add("active");
  }
}

// Mostrar uno por defecto
mostrarTab("sobre");