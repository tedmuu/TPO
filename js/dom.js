function validarCampos() {
    /*Funcion para validar un formulario de suscripcion*/
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let mail=document.getElementById("email").value;
    if (nombre==="" || apellido==="" || mail===""){
        alert("Debe completar todos los campos");
        if (nombre===""){document.getElementById("nombre").style.borderColor= "red";}
        if (apellido===""){document.getElementById("apellido").style.borderColor= "red";}
        if (mail===""){document.getElementById("email").style.borderColor= "red";}
    }
}
