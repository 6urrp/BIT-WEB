var bodyContainer = document.querySelector("body")
var mario = document.querySelector(".mario");
var container = document.querySelector(".main-container");
var xPosition = 0;
var intervalId;

var moveRight = function (e) {
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

var groundMoving = function (e) {
        if (e.keyCode === 39) {
                intervalId = setInterval(function() {
                        xPosition -= 1;
                        container.style.backgroundPosition = xPosition + 'px bottom';  
                },1);
                bodyContainer.removeEventListener("keydown", groundMoving);
        }
}

var groundStop = function (e) {
        if (e.keyCode === 39) {
                clearInterval(intervalId);
        }
        bodyContainer.addEventListener("keydown", groundMoving);
}

bodyContainer.addEventListener("keydown", moveRight);
bodyContainer.addEventListener("keydown", groundMoving);
bodyContainer.addEventListener("keyup", stopMoving);
bodyContainer.addEventListener("keyup", groundStop);