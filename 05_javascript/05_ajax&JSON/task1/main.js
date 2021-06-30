var $button = document.querySelector("#submit-button");
var $text = document.querySelector("#ip-text");
var $input = document.querySelector("#ip-input");
var endpoint = "http://www.geoplugin.net/xml.gp?ip=";

function response (res) {
    var response = res.querySelector("geoplugin_countryName").textContent; 
    $text.innerText = response;
}

var xmlRequest = new XMLHttpRequest();

function countryName () {
    var $inputValue = $input.value;
    var $completeURL = endpoint + $inputValue;

    xmlRequest.open("GET", $completeURL);

    xmlRequest.onload = function () { 
        if (xmlRequest.status >= 200 && xmlRequest.status < 300) {
            response(xmlRequest.responseXML);
        }
    }
    xmlRequest.send();
}

$button.addEventListener("click", countryName);
