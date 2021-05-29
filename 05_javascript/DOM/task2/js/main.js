
var myList = document.querySelector("div").nextElementSibling.firstElementChild.firstElementChild;

function bgColor () {
    myList.className = "active";
}
bgColor();

function changeClass(){
    myList.classList.remove("active");
    
    var firstLi = document.querySelector("div").firstElementChild.firstElementChild;
    firstLi.className = "active";
}
changeClass();