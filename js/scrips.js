$(document).ready(function () {
    //Validaciones con el plugin jquery validate
    $("#formulario").validate({
        rules: {
            nombre: {
                required: true
            },
            apellido: {
                required: true
            },
            cedula: {
                minlength: 13
            },
            email: {
                required: true,
                validarEmail: true
            }
        },
        messages: {
            nombre: {
                required: "El nombre es obligatorio"
            },
            apellido: {
                required: "El apellido es obligatorio"
            },
            cedula: {
                required: "La cédula es obligatoria",
                minlength: "La cédula debe tener una longitud de 11 caracteres"
            },
            email: {
                required: "El email es obligatorio",
                email: "El email debe tener la estructura: ejemplo@dominio.tld"
            }
        }
    });

    //Validando con regex alterno pues la validación del plugin no responde al interés
    jQuery.validator.addMethod("validarEmail", function(value) {

        if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
            return true;
        } else {
            return false;
        }
    }, "El email debe tener la estructura: ejemplo@dominio.tld");

    //Máscara para la cédula
    $("#cedula").mask('000-0000000-0');

    //Cuando el usuario focusea el input y no lo completa, aparece mensaje de error
    $("#nombre, #apellido, #cedula, #email").focusout(function (event) {
        if ($("#" + event.target.id).valid() == true) {
            $("#" + event.target.id).css("border-color", "var(--green)");
        } else {
            $("#" + event.target.id).css("border-color", "var(--red)");
        }
    });

    $("#btn").click(function () {
        if ($("#formulario").valid() == true) {
            $("#msg").text("Formulario válido");
        } else {
            $("#msg").text("Formulario no válido");
        }
    });
});