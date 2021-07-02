var $button = document.querySelector("#submit");
var $img = document.querySelector(".img-paragraph")
var $dog = document.querySelector(".dog")
var quotes = ["Pet me, human!", "Did you say walk?!", "Feed me, human!", "Ciao, ciao!", "Wuff!", "Did you say bacon!?", "I'm a party animal!"];


var handler = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random", true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.response);
            $img.setAttribute("src", data.message);
        }
    };

    request.send();
    $dog.textContent = quotes[Math.floor(Math.random()*quotes.length)]
    $img.style.width = "720px";
    $img.style.height = "405px";


}

$button.addEventListener("click", handler)

