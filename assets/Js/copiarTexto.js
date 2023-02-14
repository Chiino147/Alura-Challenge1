var btnCopy = document.querySelector("#copyText")

btnCopy.addEventListener("click", function() {
    var mensaje = document.getElementById("printMensaje");
    console.log(mensaje)
    mensaje.select();
    mensaje.setSelectionRange(0, 99999)
    document.execCommand("copy")




})