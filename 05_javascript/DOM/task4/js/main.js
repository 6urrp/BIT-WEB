var array = ["Homepage", "About Us", "Contact"];
var array1 = ["Email", "Mobile", "Fax"];

function dropdownList (array, div) {
    var node = document.createElement(div);
    var body = document.querySelector("body");
    var script = document.querySelector("script");
    body.insertBefore(node, script);

    var form = document.createElement("label");
    node.appendChild(form);
    var select = document.createElement("select");
    node.appendChild(select);

    for (var i = 0; i < array.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = array[i];
        select.appendChild(opt);
    }
}
dropdownList(array, "div");
dropdownList(array1, "div");