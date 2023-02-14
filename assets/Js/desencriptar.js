var botton = document.querySelector("#btnDesencriptar")
botton.addEventListener("click", function() {
    //Capturando el mensaje encriptar
    var mensaje = document.getElementById("inputMensajeUser").value;
    mensajeDesencriptado = desencriptacion(mensaje)
    mostrarMensajeEncriptado(mensajeDesencriptado)
})

//Funcion que desencripta el mensaje
function desencriptacion(msj) {
    // ai lo busca en el texto y la g significa de global
    msj = msj.replace(/ai/g, "a")
    msj = msj.replace(/enter/g, "e")
    msj = msj.replace(/imes/g, "i")
    msj = msj.replace(/ober/g, "o")
    msj = msj.replace(/ufat/g, "u")

    return msj

}
//Funcion para mostrar el texto!
function mostrarMensajeEncriptado(msj) {
    var mostrar = document.querySelector("#printMensaje")
    mostrar.textContent = msj
}