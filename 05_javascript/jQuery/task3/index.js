/*var $container = $("<div>");
$container.prependTo("body") */
$("body").prepend("<div>")

var $images = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg", 

    "https://www.almanac.com/sites/default/files/image_nodes/celery-close-up-shutterstock_110543273.jpg", 

    "https://www.aces.edu/wp-content/uploads/2018/08/shutterstock_637387888-blueberries.jpg", 

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYzmVzWz5Ro1PeSZMZSR1C6q3Mk4zxA0zbA&usqp=CAU",

    "https://qph.fs.quoracdn.net/main-qimg-51781603839fd13333ef543f387ece22",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOIKvZtg-ZFa2HI9p2mZCDmliX3utnN-scw&usqp=CAU"
]

var $border = true;
$.each($images, function(index) {
    var $size = Math.round(400 * Math.random() + 100);
    var img = $("<img>").attr("src", $images[index]).css({
        "width": $size,
        "height": $size
    })
    $("div").append(img);

    if($size < 200 && $border) {
        img.css({
            "border": "5px solid green"
        })
        $border = false;
    }
    
    
})

$("div").prepend("<h1>Amazing Galery</h1>").css({
    "text-align": "center",
    "color": "red"
})



