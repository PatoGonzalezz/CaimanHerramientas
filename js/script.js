function validar(){
    var usu, pass, text, num;
    usu = document.getElementById("correo").value;
    pass = document.getElementById("password").value;

    if (usu.length == 0){
        text = "El area del correo no puede estar vacia";
    }else{
        text = "";
    }
    document.getElementById("validaEmail").innerHTML = text;
    if (pass.lenght != 8){
        text = "La contraseña debe de tener un largo de 8 caracteres";
    }else{
        text = "";
    }
    document.getElementById("validapass").innerHTML = text;
}   