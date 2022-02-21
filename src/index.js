import cipher from './cipher.js';

//función de pantalla de bienvenida que captura nombre de usuario
document.getElementById("miBoton").addEventListener("click",capturaInfo)
function capturaInfo() {
/// agregar condicionales para deshabilitar input cuando no haya nombre o agregar un alert antes de pasar a la siguiente pantalla
//  let nameUser = document.getElementById("nombreUsuario").value
  document.getElementById("preguntaUno").innerHTML = "Hola " + document.getElementById("nombreUsuario").value
  

///función de cambio de clase de las instrucciones
  let instrucciones = document.getElementById("instrucciones")
  instrucciones.classList.remove("oculto")
  instrucciones.classList.add("instruction")
}

//función para cambiar a la segunda pantalla ocultando elementos
document.getElementById("comenzar").addEventListener("click", inicio)
function inicio() {

  //let textosPaginaCentral = document.getElementById("nombreAgente").style.visibility= "hidden"
  document.getElementById("nombreAgente").style.visibility= "hidden"
  document.getElementById("resumenAgente").style.visibility= "hidden"
  document.getElementById("instrucciones").style.visibility= "hidden"

  let imagen = document.getElementById("bodies")
  imagen.classList.remove("imagenFondo")
  imagen.classList.add("imagenPantalla2")

  let sacarPreguntaNombre = document.getElementById("preguntaUno")
  sacarPreguntaNombre.classList.remove("preguntaNom")
  sacarPreguntaNombre.classList.add("oculto")

  let mostrarCifrado = document.getElementById("cifradoCesar")
  mostrarCifrado.classList.remove("oculto")
  mostrarCifrado.classList.add("mostrarse")
}

//convirtiendo minúsculas a mayúsculas en los dos campos de texto a cifrar/descifrar
  document.getElementById("mensajeClaro").addEventListener("keyup", function(){
      this.value = this.value.toUpperCase();
    })

  /*document.getElementById("mensajeDescifrado").addEventListener("keyup", function(){
      this.value = this.value.toUpperCase();
    })*/

//función de cifrado césar
let cifrar = document.getElementById("cifrar")
  cifrar.addEventListener("click", () => {
     let string = document.getElementById("mensajeClaro").value;
     let offset = document.getElementById("numeroLlave").value;
     document.getElementById("mensajeDescifrado").value = cipher.encode(offset,string);
   });

let descifrar = document.getElementById("descifrado")
  descifrar.addEventListener("click", () => {
     let string = document.getElementById("mensajeClaro").value;
     let offset = document.getElementById("numeroLlave").value;
     document.getElementById("mensajeDescifrado").value = cipher.decode(offset,string);
   });

//función de restablecer pantalla
document.getElementById("borrado").addEventListener("click", restablecer)
function restablecer () {

  document.getElementById("mensajeClaro").value = "";
  document.getElementById("mensajeDescifrado").value = "";
  document.getElementById("numeroLlave").value = "";
}

//función para regresar a página principal
document.getElementById("regresarPaginaInicio").addEventListener('click', () => {
  history.go("nombreAgente");
})
