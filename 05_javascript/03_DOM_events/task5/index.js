var img = document.querySelectorAll("img");
var container = document.querySelector(".galery-container");
var width = 300;
var flag = false;

var add = function (e) {
    if (e.target.offsetWidth >= width) {
        e.target.style.border = "1px solid red";
    } else {
        console.log(e.target);
    }
}

img.forEach(function (img) {
    img.addEventListener("click", add);
})

function removeBorder (img) {
        if (flag) {
            if (img.target.offsetWidth >= width) {
                img.target.removeEventListener("click", add);
                img.target.style.border = "none";
                console.log(img.target);
                flag = false;
            }
        } else {
            if (img.target.offsetWidth >= width) {
                img.target.addEventListener("click", add);
                img.target.style.border = "1px solid red";
                console.log(img.target);
                flag = true;
            }
        }
}

img.forEach(function (img) {
    img.addEventListener("click", removeBorder);
})





