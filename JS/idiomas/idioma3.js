//Formacion ingles

var formacion=document.querySelector(".formacion");
formacion.addEventListener('click',idioma);

function idioma(){
    let id=formacion.checked;
    if(id==true){
        location.href="EN/formacion.html"
    }else{
        location.href="../formacion.html";
    }
}