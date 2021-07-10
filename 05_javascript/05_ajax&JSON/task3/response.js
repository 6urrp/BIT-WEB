var $storage = localStorage.getItem("id");
var $user = $("<h1>").text($storage);
var $main = $("<div>").addClass("main-container");
$("body").prepend($main);
$("body").prepend($user);



var xhr = new XMLHttpRequest();

xhr.open("GET", `https://api.github.com/users/${$storage}/repos`, true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var response = JSON.parse(xhr.responseText);
        response.forEach(function(el) {
            el.description = el.description || "No description";
            $($main).appendChild(
            `<div class="repo-container">
            <img src="repo.png" class="repo">
            <ul class="items">
            <li>Repository name: ${el.name}</li>
            <li>Repo description: ${el.description}</li>
            <li>Repo stars: ${el.stargazers_count}</li>
            </ul>
            </div>`
            );
        })
    }

};

xhr.send();
