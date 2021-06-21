var $border = $("img.selected");
var $img = $border.parent().next().children()[1];


$($img).on("click", function () {
        $border.css({
            "border" : "none"
        })
        $($img).addClass("selected") 
})

$($border).on("click", function() {
    $($img).removeClass("selected");
    $border.css("border", "10px solid red")
})