var soccer = document.querySelector("img");
var container = document.querySelector(".container");
var button = document.querySelector("button");
console.log(button);
var flag = true;


function handler (e) {
    var y = e.screenY;
    var x = e.screenX;
    //console.log(x);
    soccer.style.left = x - 100 + "px";
    soccer.style.top = y - 150 + "px";
}

container.addEventListener("click", handler);

function handler2 (e) {
    e.stopPropagation();
    if (flag) {
        container.removeEventListener("click", handler);
        button.textContent = "Start moving";
        flag = false;
    } else {
        container.addEventListener("click", handler);
        button.textContent = "Stop Moving";
        flag = true;
    };
}
button.addEventListener("click", handler2);