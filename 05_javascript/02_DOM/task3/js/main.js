function alertMe () {
    var alertText = document.querySelector("li:nth-child(2)").textContent;
    console.log(alertText)
    alert(alertText);
    
}

alertMe();

function replaceText (text) {
    var newText = document.querySelector("ul").lastElementChild;
    newText.textContent = text;
}

replaceText("Prolazim kroz igru ko da nasao sam cit kod");

