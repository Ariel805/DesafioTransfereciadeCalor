// =========================================
// SCRIPT - SIMULADOR DE TRANSFERENCIA DE CALOR
// Ejercicio 1 - Desafío Técnico Web
// Fórmula: T = Ts + (T0 - Ts) * e^(-k * t)
// =========================================

/**
 * Función principal que calcula la temperatura final
 * usando la Ley de Enfriamiento de Newton.
 */
function calcularTemperatura() {

  // --- 1. Captura de valores desde el formulario ---
  // Usamos document.getElementById() para obtener cada campo
  var inputT0 = document.getElementById("temperatura-inicial").value;
  var inputTs = document.getElementById("temperatura-entorno").value;
  var inputK  = document.getElementById("constante-k").value;
  var inputT  = document.getElementById("tiempo").value;

  // Obtenemos las cajas de resultado y error
  var resultadoBox = document.getElementById("resultado-box");
  var errorBox     = document.getElementById("error-box");
  var errorMsg     = document.getElementById("error-mensaje");

  // Ocultamos ambas cajas antes de validar
  resultadoBox.classList.add("oculto");
  errorBox.classList.add("oculto");

  // --- 2. Validación: verificar que todos los campos estén llenos ---
  if (inputT0 === "" || inputTs === "" || inputK === "" || inputT === "") {
    errorMsg.textContent = "⚠️ Por favor completa todos los campos antes de calcular.";
    errorBox.classList.remove("oculto");
    return; // Detenemos la ejecución
  }

  // --- 3. Convertir los textos a números ---
  var T0 = parseFloat(inputT0); // Temperatura inicial
  var Ts = parseFloat(inputTs); // Temperatura del entorno
  var k  = parseFloat(inputK);  // Constante de enfriamiento
  var t  = parseFloat(inputT);  // Tiempo en horas

  // --- 4. Validación numérica extra ---
  // La constante k debe ser positiva (si es 0 o negativa no tiene sentido físico)
  if (k <= 0) {
    errorMsg.textContent = "⚠️ La constante k debe ser un número mayor a 0.";
    errorBox.classList.remove("oculto");
    return;
  }

  // El tiempo no puede ser negativo
  if (t < 0) {
    errorMsg.textContent = "⚠️ El tiempo no puede ser un valor negativo.";
    errorBox.classList.remove("oculto");
    return;
  }

  // --- 5. Aplicar la fórmula de enfriamiento de Newton ---
  // T = Ts + (T0 - Ts) * e^(-k * t)
  var exponente    = -k * t;                    // Calculamos el exponente primero
  var factorDecay  = Math.exp(exponente);       // e elevado al exponente
  var temperaturaFinal = Ts + (T0 - Ts) * factorDecay;

  // Redondeamos al entero más cercano según el enunciado
  var resultado = Math.round(temperaturaFinal);

  // --- 6. Mostrar el resultado en pantalla ---
  document.getElementById("resultado-valor").textContent = resultado + " °C";
  resultadoBox.classList.remove("oculto");
}

/**
 * Función para limpiar el resultado cuando se presiona "Limpiar".
 * El botón reset del formulario ya vacía los inputs automáticamente.
 */
function limpiarResultado() {
  // Ocultamos ambas cajas de feedback
  document.getElementById("resultado-box").classList.add("oculto");
  document.getElementById("error-box").classList.add("oculto");

  // Reseteamos el texto del resultado por si acaso
  document.getElementById("resultado-valor").textContent = "-- °C";
}