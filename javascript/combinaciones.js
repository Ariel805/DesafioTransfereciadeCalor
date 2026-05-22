function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  var resultado = 1;

  for (var i = 2; i <= num; i++) {
    resultado = resultado * i;
  }

  return resultado;
}

function combinacion(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function formatearNumero(num) {
  return num.toLocaleString("es-BO");
}

function calcularCombinaciones() {
  var inputN1 = document.getElementById("n1").value;
  var inputR1 = document.getElementById("r1").value;
  var inputN2 = document.getElementById("n2").value;
  var inputR2 = document.getElementById("r2").value;

  var resBox = document.getElementById("resultado-comb");
  var errBox = document.getElementById("error-comb");
  var errMsg = document.getElementById("msg-comb");

  resBox.classList.add("oculto");
  errBox.classList.add("oculto");

  if (inputN1 === "" || inputR1 === "" || inputN2 === "" || inputR2 === "") {
    errMsg.textContent = "⚠️ Completa todos los campos antes de calcular.";
    errBox.classList.remove("oculto");
    return;
  }

  var n1 = parseInt(inputN1);
  var r1 = parseInt(inputR1);
  var n2 = parseInt(inputN2);
  var r2 = parseInt(inputR2);

  if (r1 > n1) {
    errMsg.textContent = "⚠️ En el Grupo 1, r1 no puede ser mayor que n1.";
    errBox.classList.remove("oculto");
    return;
  }
  if (r2 > n2) {
    errMsg.textContent = "⚠️ En el Grupo 2, r2 no puede ser mayor que n2.";
    errBox.classList.remove("oculto");
    return;
  }
  if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
    errMsg.textContent = "⚠️ Todos los valores deben ser números no negativos.";
    errBox.classList.remove("oculto");
    return;
  }

  var combG1 = combinacion(n1, r1);
  var combG2 = combinacion(n2, r2);

  var total = combG1 * combG2;

  document.getElementById("val-g1").textContent    = formatearNumero(combG1);
  document.getElementById("val-g2").textContent    = formatearNumero(combG2);
  document.getElementById("val-total").textContent = formatearNumero(total);

  resBox.classList.remove("oculto");
}

function limpiarComb() {
  document.getElementById("resultado-comb").classList.add("oculto");
  document.getElementById("error-comb").classList.add("oculto");
}
