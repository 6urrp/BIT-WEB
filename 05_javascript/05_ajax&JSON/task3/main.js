var $searchField = document.querySelector("#search");
var $main = document.querySelector(".main-container");

var handler = function (e) {
    
        var request = new XMLHttpRequest();
        var input = $searchField.value;
        
        var gitApi = "https://api.github.com/search/users?q=" + input + "&per_page=20";
        request.open("GET", gitApi , true);

        //if (e.keyCode === 13) {
        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                var response = JSON.parse(request.responseText);
                $(response.items).each(function(index, element) {
                    var container = $("<div>");
                    $(container).addClass("git-container")

                    var picture = $("<img>");
                    var userName = $("<h4>");

                    $(picture).attr("src", element.avatar_url);
                    $(picture).addClass("avatar");
                    $(userName).text(element.login);
                    
                    $($main).append(container)
                    $(container).prepend(userName);
                    $(container).prepend(picture);
                    
                })
                
            }
        }
        //}
        request.send();
    //} 
}

window.addEventListener("keydown", handler);

//1.izvlacimo niz usera iz responsa
//2.nakon parsiranja prolazimo kroz niz usera i izvlacimo ono sto nam treba 