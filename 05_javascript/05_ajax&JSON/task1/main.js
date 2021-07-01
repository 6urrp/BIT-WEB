var $button = document.querySelector("#submit");
var $text = document.querySelector("#ip-text");
var $input = document.querySelector("#ip-input");
var endpoint = "http://www.geoplugin.net/xml.gp?ip=";

function response (res) {
    var response = res.querySelector("geoplugin_countryName").textContent; 
    $text.textContent = response;
}

var xmlRequest = new XMLHttpRequest();

xmlRequest.onload = function () { 
    if (xmlRequest.status >= 200 && xmlRequest.status < 300) {
        response(xmlRequest.responseXML);
    }
};



function countryName () {
    var $inputValue = $input.value;
    var $completeURL = endpoint + $inputValue;

    xmlRequest.open("GET", $completeURL);

    xmlRequest.send();
}

$button.addEventListener("click", countryName);
