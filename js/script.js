function validar(){
    var usu, pass, text;
    usu = document.getElementById("correo").value;
    pass = document.getElementById("contraseña").value;

    if (usu.length == 0){
        text = "La contraseña debe de tener un nimino de 8 caracteres"
    }else{
        text = ""
    }
    document.getElementById("validaEmail").innerHTML = text;
}   