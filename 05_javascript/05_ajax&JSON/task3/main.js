var $searchField = $("#search");
var $main = $(".main-container");
var $git = $(".git-container");
var endpoint = "https://api.github.com/search/users?q="

var request = new XMLHttpRequest();

request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
        var response = JSON.parse(request.responseText);
        $(response.items).each(function(index, element) {
            var $userContainer = $("<div>").addClass("user-cont");
            var picture = $("<img>");
            var userName = $("<h4>");

            $(picture).attr("src", element.avatar_url);
            $(picture).addClass("avatar");
            $(userName).text(element.login);
            
            $git.prepend($userContainer);
            $userContainer.prepend(userName);
            $userContainer.prepend(picture);       
        })      
    }
};
        
 
$searchField.keypress(function (event) {
    $git.empty();
    if (event.keyCode == 13) {
        event.preventDefault();
        var input = $searchField.val();
        var gitApi = endpoint + input + "&per_page=10";
        console.log(gitApi);
        request.open("GET", gitApi);

        request.send();
        $searchField.val("");
        $searchField.attr('placeholder', 'Search for user');
    }
});

