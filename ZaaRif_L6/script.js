var buton = document.getElementById("buton");
var hide = document.getElementById("hide")

function ChangeHW1B() {
    var hw1 = document.querySelectorAll("h1");
    for (var i = 0; i < hw1.length; i++){
        hw1[i].style.backgroundColor = "purple";
    }
}

function HideH1(){
    var h1 = document.querySelectorAll("h1")
    for (var i =0; i<h1.length; i++){
        h1[1].style.display = "none"
    }
}

hide.addEventListener("click", HideH)
buton.addEventListener("click", ChangeHW1B);