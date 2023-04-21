function validar(){
    var usu, pass, num, text;
    usu = document.getElementById("correo").value;
    pass = document.getElementById("password").value;
    num = pass.replace(/[^0-9]/g,"").length;

    if (usu.length == 0){
        text = "El area del correo no puede estar vacia";
    }else{
        text = "";
    }
    document.getElementById("validaEmail").innerHTML = text;
    if (pass.length >= 4 && pass.length <= 12){
        text = "";
        if (num >= 0){
            text = "La contraseña debe de tener al menos un numero";
        }else{
            text = "";
        }
    }else{
        text = "La contraseña debe de tener un minimo de 4 y maximo de 12 caracteres" + "<br>" + "La contraseña debe de tener al menos un numero";
    }
    document.getElementById("validapass").innerHTML = text;
}   