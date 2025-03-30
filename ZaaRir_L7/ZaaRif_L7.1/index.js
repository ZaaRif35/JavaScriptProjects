document.getElementById("saveButton").addEventListener("click", function(){
    var name = document.getElementById("nameInput").value;
    localStorage.setItem("username", name);
});

document
    .getElementById("retrieveButton")
    .addEventListener("click", function (){
        var saveName = localStorage.getItem("userName");
        var greetingDiv = document.getElementById("greeting");
        if (saveName){
            greetingDiv.textContext = "Hello "+ saveName + "!"
        } else {
            greetingDiv.textContext = "No name saved"
        }
    })