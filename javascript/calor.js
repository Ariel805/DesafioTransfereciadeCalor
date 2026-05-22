function calcularCalor() {
  var inputT0 = document.getElementById("t0").value;
  var inputTs = document.getElementById("ts").value;
  var inputK  = document.getElementById("k").value;
  var inputT  = document.getElementById("t").value;

  var resBox  = document.getElementById("resultado-calor");
  var errBox  = document.getElementById("error-calor");
  var errMsg  = document.getElementById("msg-calor");

  resBox.classList.add("oculto");
  errBox.classList.add("oculto");

  if (inputT0 === "" || inputTs === "" || inputK === "" || inputT === "") {
    errMsg.textContent = "⚠️ Completa todos los campos antes de calcular.";
    errBox.classList.remove("oculto");
    return;
  }

  var T0 = parseFloat(inputT0);
  var Ts = parseFloat(inputTs);
  var k  = parseFloat(inputK);
  var t  = parseFloat(inputT);

  if (k <= 0) {
    errMsg.textContent = "⚠️ La constante k debe ser mayor a 0.";
    errBox.classList.remove("oculto");
    return;
  }
  if (t < 0) {
    errMsg.textContent = "⚠️ El tiempo no puede ser negativo.";
    errBox.classList.remove("oculto");
    return;
  }

  var exponente       = -k * t;
  var factorDecay     = Math.exp(exponente);
  var tempFinal       = Ts + (T0 - Ts) * factorDecay;
  var resultado       = Math.round(tempFinal);

  document.getElementById("valor-calor").textContent = resultado + " °C";
  resBox.classList.remove("oculto");
}

function limpiar(resId, errId) {
  document.getElementById(resId).classList.add("oculto");
  document.getElementById(errId).classList.add("oculto");
}
