var img = document.querySelectorAll("img");
var container = document.querySelector(".galery-container");
var width = 300;
var flag = false;

var add = function (e) {
    console.log(e.target)
    if (e.target.offsetWidth >= width) {
        e.target.style.border = "1px solid red";
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
                flag = false;
                console.log(img.target)
            }
        } else {
            if (img.target.offsetWidth >= width) {
                img.target.addEventListener("click", add);
                img.target.style.border = "1px solid red";
                flag = true;
                console.log(img.target)
            }
        }
}

img.forEach(function (img) {
    img.addEventListener("click", removeBorder);
})





