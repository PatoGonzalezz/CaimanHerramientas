$("#formulario_contacto").validate({
    rules:{
        nombre:{
            required: true,
            minlenght: 3,
            maxlenght: 30
        },
        email:{
            required: true,
            email: true
        },
        comentarios:{
            required: true,
            minlenght: 10,
            maxlenght: 200
        }
    }
});


$("#btnSubIndex").click(function() {
    if ($("#formulario_contacto").valid() == false){
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let comentarios = $("#comentario").val()
});
