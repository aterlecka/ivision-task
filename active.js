
function showHideHeaderLinks() {
    if ($(document).width() > 900)
        return;
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
