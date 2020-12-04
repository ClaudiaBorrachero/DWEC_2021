document.getElementById("ver_cookies").addEventListener("click", ver_cookies);
document
  .getElementById("crear_cookie")
  .addEventListener("click", crear_modif_cookie);
document
  .getElementById("modificar_cookie")
  .addEventListener("click", crear_modif_cookie);
document.getElementById("leer_cookie").addEventListener("click", leer_cookie);
document
  .getElementById("borrar_cookie")
  .addEventListener("click", borrar_cookie);

function ver_cookies() {
  alert("Cookies actuales:\n" + document.cookie);
}

function crear_modif_cookie() {
  let nombre = prompt("Introduzca el nombre de la cookie");
  let valor = prompt("Introduzca su valor");
  let expiracion = parseInt(
    prompt("Introduzca el número de días para que expire")
  );
  set_cookie(nombre, valor, expiracion);
  ver_cookies();
}

function iniciar() {
  document.getElementById("help").addEventListener("click", validar, false);
}

function leer_cookie() {
  let nombre = prompt("Introduzca el nombre de la cookie a consultar");
  let resultado = get_cookie(nombre);
  alert(resultado);
}

function borrar_cookie() {
  let nombre = prompt("Introduzca el nombre de la cookie a borrar");
  delete_cookie(nombre);
  ver_cookies();
}

function delete_cookie(nombre) {
  set_cookie(nombre, "", 0);
}

function set_cookie(nombre, valor, expiracion) {
  let d = new Date();
  d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
  expiracion = "expires=" + d.toUTCString();
  document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function get_cookie(nombre) {
  let nom = nombre + "=";
  let array = document.cookie.split(";");
  for (let i = 0; i < array.length; i++) {
    let c = array[i];
    console.log(c);
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nombre) == 0) {
      return c.substring(nom.length, c.length);
    }
  }
  return "";
}