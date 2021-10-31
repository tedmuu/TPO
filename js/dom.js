function validarCampos() {
    /*Funcion para validar un formulario de suscripcion*/
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let mail=document.getElementById("email").value;
    if (nombre==="" || mail===""){
        alert("Debe completar todos los campos");
        if (nombre===""){document.getElementById("nombre").style.borderColor= "red";}
        if (apellido===""){document.getElementById("apellido").style.borderColor= "red";}
        if (mail===""){document.getElementById("email").style.borderColor= "red";}
    }else{
        document.getElementById("nombre").style.borderColor= "";
        document.getElementById("apellido").style.borderColor= "";
        alert("Gracias por suscribirte♥");
    }
}

function ver(){
    let email=document.getElementById("mail").value;
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let valido=regex.test(email);
    document.getElementById("mail").style.borderColor= "";
    if (valido==false){
        alert("El correo ingresado no es valido");
        document.getElementById("mail").value="";
        document.getElementById("mail").style.borderColor= "red";
}
}