//Contacto ingles

var contacto2=document.querySelector(".contacto2");
contacto2.addEventListener('click',idioma);

function idioma(){
    let id=contacto2.checked;
    if(id==true){
        location.href="EN/contacto.html"
    }else{
        location.href="../contacto.html";
    }
}