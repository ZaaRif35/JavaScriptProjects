document
    .getElementById("locationButton")
    .addEventListener("click", getLocation);

function getLocation(){
    const locacionOutput = document.getElementById("locationOutput");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationOutput.innerHTML = "Geolocation is not supported by this browser"
    }
}

function showPosition(position){
    const locacionOutput=document.getElementById("locationOutput")
    locacionOutput.innerHTML =
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}