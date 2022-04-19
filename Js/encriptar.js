var botton = document.querySelector("#btnEncriptar")
botton.addEventListener("click", function() {
    //Capturando el mensaje encriptar
    var mensaje = document.getElementById("inputMensajeUser").value;
    mensajeEncriptado = encriptacion(mensaje)
    mostrarMensajeEncriptado(mensajeEncriptado)
})

//Funcion para la encriptacion del mensaje
function encriptacion(msj) {
    var txtEncriptar = [];
    for (i = 0; i <= msj.length; i++) {

        txtEncriptar.push(msj[i])

    }
    console.log(txtEncriptar)
    for (i = 0; i < txtEncriptar.length; i++) {
        if (txtEncriptar[i] == "a") {
            txtEncriptar[i] = "ai"
        }
        if (txtEncriptar[i] == "e") {
            txtEncriptar[i] = "enter"
        }
        if (txtEncriptar[i] == "i") {
            txtEncriptar[i] = "imes"
        }
        if (txtEncriptar[i] == "o") {
            txtEncriptar[i] = "ober"
        }
        if (txtEncriptar[i] == "u") {
            txtEncriptar[i] = "ufat"
        }
        if (txtEncriptar[i] == undefined) {
            txtEncriptar.pop(txtEncriptar[i])
        }
    }
    console.log(txtEncriptar)
    var txtEncriptado = ""
        //El array de letras se convierte en texto
    for (i = 0; i < txtEncriptar.length; i++)
        txtEncriptado = (txtEncriptado + txtEncriptar[i])
    console.log(txtEncriptado)
    return txtEncriptado
}
//funcion para mostrar el mensaje
function mostrarMensajeEncriptado(msj) {
    var mostrar = document.querySelector("#printMensaje")
    mostrar.textContent = msj
}