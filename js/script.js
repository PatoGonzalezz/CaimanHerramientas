function validar(){
    var nombre, contrasenna, correo, apellido, text;

    nombre = document.getElementById("nombre").value;
    contrasenna = document.getElementById("contraseña").value;
    correo = document.getElementById("correo").value;
    apellido = document.getElementById("apellidos").value;


    if(nombre.lenght == 0){
        text = "El nombre no debe estar vacío";
    }else{
        text = "";
    }
    document.getElementById("validaNombre").innerHTML = text;

    if(apellido.lenght == 0){
        text = "El nombre no debe estar vacío";
    }else{
        text = "";
    }
    document.getElementById("validaEmail").innerHTML = text; 
    if (contrasenna.lenght !=8){
        text = "La contraseña debe tener 8 o más dígitos!";
    }else{
        text="";
    }
    document.getElementById("validaPassword").innerHTML = text
}

