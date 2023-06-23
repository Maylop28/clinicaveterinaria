function GuardarDatos(){


    let nombre=$("#nombre").val();
    let telefono=$("#mensaje").val();
    $.ajax({
        url: "https://reqres.in/api/users"
        type: "POST",
        data:{
            name: nombre,
            mensaje: mensaje 
        },
        succes: function(response){
            console.log(response);
        }
    });

}