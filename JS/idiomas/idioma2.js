//Servicios ingles

var servicios=document.querySelector(".servicios");
servicios.addEventListener('click',idioma);

function idioma(){
    let id=servicios.checked;
    if(id==true){
        location.href="EN/servicios.html"
    }else{
        location.href="../servicios.html";
    }
}