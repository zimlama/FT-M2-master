var enlace = "http://localhost:5000/amigos"
//cuando ejecuto el boton
$("#boton").click(function() {
    // Limpiar la lista cuando da click para que no la replique
    $("#lista").empty();
    // oculta la imagen cuando da click
    let img=document.body.getElementsByTagName('img')
    //img[0].style.visibility ="hidden"; //oculta la imagen
    img[0].style.display ="none"; //oculta todo el display del img
    // 
    // let h2= document.body.getElementsByTagName('h2')
    // h2[1].innerHTML="";

    // Get
    $.get("http://localhost:5000/amigos",function (informacion) {
        console.log(informacion);
        informacion.forEach(element => {
            $("#lista").append(`<li id=${element.id} > ${element.name} X </li>` )  
        });
        });
    });
    

$("#search").click(function(){
    let id = $('#input').val();
    if( id>=1 && id<=6){
        $.get(`http://localhost:5000/amigos/${$("#input").val()}`,function(informacion){
            $("#amigo").text(`${informacion.name}`);
        })
    } else{
        alert("este ID no existe")
    }
})

$("#delete").click(function(){
    var borrar = $("#inputDelete").val()
    $.ajax({
        url:`http://localhost:5000/amigos/${borrar}`,
        type:'DELETE',
        success: ()=>{
            $("#success").text(`Tu amigo fue borrado con exito`);
        }
    })
})
