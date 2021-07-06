const endpoint = "http://api.tvmaze.com/shows";
let $main = $("main");
let $top50 ={};

const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint, true);
xhr.onload = function () {
    const request = JSON.parse(xhr.responseText);
    var $rating = request.sort(function(a, b) {
        return b.rating.average - a.rating.average;
    })
    $top50 = $rating.slice(0, 50);
    $top50.forEach(function(el){
        $main.append(
            `
            <div>
            <h5>${el.name}</h5>
            <img src="${el.image.medium}" class="">
            </div>
            `
        )
    })
    console.log(top50)

}
xhr.send()
