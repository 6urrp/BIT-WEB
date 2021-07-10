const endpointMain = "http://api.tvmaze.com/shows";
let allTvShows = [];



const xhr1 = new XMLHttpRequest();
xhr1.open("GET", endpointMain, true);


xhr1.onload = function () {
    const resp = JSON.parse(xhr.responseText);
    resp.forEach(function(el) {
        allTvShows.push(el.name);
    })
    console.log(allTvShows)

}

xhr1.send();