var $border = $("img.selected");
var $img = $border.parent().next().children()[1];


$($img).on("mouseover click", function () {
        $border.css({
            "border" : "none"
        })
        $($img).addClass("selected") 
})

$($border).on("mouseover click", function() {
    $($img).removeClass("selected");
    $border.css("border", "10px solid red")
})