var $soccer = $("img")
var $container = $(".container")
var $button = $("button")
var flag = true;

var handler = function(e) {
    var y = e.screenY;
    var x = e.screenX;

    $soccer.css({
        "left": x - 100 + "px",
        "top": y - 150 + "px",
    });
}
$container.on("click", handler)

var handler2 = function (e) {
    e.stopPropagation();
    if (flag) {
        $container.off("click", handler);
        $button.text("Start moving");
        flag = false;
    } else {
        $container.on("click", handler);
        $button.text("Stop moving");
        flag = true;
    }
}

$button.on("click", handler2)