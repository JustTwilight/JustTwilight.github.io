bars_search = document.getElementById("ctn-bars-search");
inputsearch = document.getElementById("inputsearch");
box_search = document.getElementById("box-search");


document.getElementById("inputsearch").addEventListener("keyup", buscador_interno);


function buscador_interno() {
    filter = inputsearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //RECORRIENDO ELEMENTOS A FILTRAR mediante los "li"

    for (i = 0; i < li.length; i++) {


        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputsearch.value === "") {
                box_search.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }
    }
}

document.addEventListener("scroll", function () {
    box_search.style.display = "none";
});
