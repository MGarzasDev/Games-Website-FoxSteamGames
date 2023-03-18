function envio () {
     var nombre = document.getElementById("nombre").value;
     var email = document.getElementById("email").value;
     var mensaje = document.getElementById("mensaje").value;
     if(nombre==null || nombre.length==0 || /^\s+$/.test(nombre)){
        alert('El campo nombre no se puede dejar vacío');
        return false;
     }else if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)))  {
        alert ("La direccion de correo no es correcta");
     return false;
     } else if (mensaje==null || mensaje.length==0 || /^\s+$/.test(mensaje)) {
        alert("¡Dejanos saber tu mensaje!")
     }else{
        alert(nombre + ", has enviado los datos perfectamente")
     }
     
    }

    
