//SELECTORES

const cantidad = document.querySelector("#cantidad"),
  color = document.querySelector("#color"),
  precio = document.querySelector("#precio"),
  preciofinal = document.querySelector("#preciofinal"),
  cantidadfinal = document.querySelector("#cantidadfinal"),
  colorfinal = document.querySelector("#circlecolor");

const obtener_total = function () {
  precioformateado = precio.innerHTML.replace(".", "");
  resultado = Number(cantidad.value) * Number(precioformateado);
  preciofinal.innerHTML = resultado;
  cantidadfinal.innerHTML = Number(cantidad.value);
  colorfinal.style.backgroundColor = color.value;
  colorfinal.style.border = "2px solid black";
  cantidad.value = "";
  color.value = "";
};
