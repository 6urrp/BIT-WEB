function alertMe () {
    var alertText = document.querySelector("li:nth-child(2)").innerHTML;
    alert(alertText);
    
}

alertMe();

function replaceText (text) {
    var newText = document.querySelector("ul").lastElementChild.textContent;
    newText = text;
    console.log(newText);
}

replaceText("Prolazim kroz igru ko da nasao sam cit kod");

