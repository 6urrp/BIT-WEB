var inputField = document.querySelector(".input-text");
var sendButton = document.querySelector("button");
var chatContainer = document.querySelector(".chat-container");
var resetButton = document.getElementById("reset-button");

function inputFieldIn () {
    inputField.style.backgroundColor = "rgb(230, 231, 233)";
};

function inputFieldOut () {
    inputField.style.backgroundColor = "#fff";
}
inputField.onfocus = inputFieldIn;
inputField.onblur = inputFieldOut;

function appendMessage (event) {
    var text = inputField.value;
    if (!text) {
        return;
    }
    var p = document.createElement("p");
    p.textContent = text;
    p.className = "paragraph-style";
    chatContainer.append(p);
    inputField.value = "";
    chatContainer.style.backgroundColor = "rgb(230, 231, 233)";
    
};

inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        appendMessage();
    } 
}

sendButton.onclick = appendMessage;

function clearAll () {
    chatContainer.remove(children);
    chatContainer.style.backgroundColor = "white";
}

resetButton.onclick = clearAll;
