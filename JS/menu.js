document.getElementById("servicios-link").addEventListener("click", function() {
    var dropdown = document.getElementById("servicios-dropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});
