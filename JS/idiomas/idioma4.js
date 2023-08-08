//Nosotros ingles

var nosotros=document.querySelector(".nosotros");
nosotros.addEventListener('click',idioma);

function idioma(){
    let id=nosotros.checked;
    if(id==true){
        location.href="EN/nosotros.html"
    }else{
        location.href="../nosotros.html";
    }
}