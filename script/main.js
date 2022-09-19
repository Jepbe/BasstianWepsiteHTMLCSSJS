

var btn = document.querySelector("#button");
document.querySelector("#button").addEventListener("click", unfoldMusic);

function unfoldMusic() {
    var bBtn = document.querySelector("#bottomBtn");
    bBtn.style.backgroundColor = "transparent";
    console.log("works")
}