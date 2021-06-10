var bodyContainer = document.querySelector("body")
var mario = document.querySelector(".mario");
var container = document.querySelector(".main-container");
var xPosition = 0;
var yPosition = "0px";

var moveRight = function (e) {
        console.log(e);
        if (e.keyCode === 39) {
                mario.setAttribute("src", "./img/mario_running.gif");
        }  
        bodyContainer.removeEventListener("keydown", moveRight);
}

var stopMoving = function (e) {
        if (e.keyCode === 39) {
                mario.setAttribute("src", "./img/mario.png");
        }
        bodyContainer.addEventListener("keydown", moveRight);
}

bodyContainer.addEventListener("keydown", moveRight);
bodyContainer.addEventListener("keyup", stopMoving);