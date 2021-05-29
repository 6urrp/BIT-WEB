var firstName = "Sandra";
function alsoThis (string) {
    return string + " Woohoo";
}

var result = alsoThis(firstName);
console.log(result);

//navigator

function windowFunction() {
    var result = "";
    var platform = window.navigator.platform;
    var version = window.navigator.appVersion;
    var company = window.navigator.vendor;
    return result += "You are using " + platform + " platform ,\nversion - " + version + "\ncreated by " + company;
}
var output = windowFunction();
console.log(output);


function isOnline () {
    if (window.navigator.onLine === true) {
        return "online";
    } else {
        return "false";
    }
}
var result1 = isOnline();
console.log(result1);


//screen

function printInfo () {
    var browserWidth = window.screen.availWidth;
    var browserHeight = window.screen.availHeight;
    var maxHeight = window.screen.height;
    return "Your browser width and height are " + browserWidth + " & " + browserHeight + " and the max possible browser height is " + maxHeight;
}
var printWidthHeight = printInfo();
console.log(printWidthHeight);


//location

function webInformation () {
    var fullUrl = window.location.href;
    var domainName = window.location.hostname;
    var protocol = window.location.protocol;//Location.protocol;
    var port = window.location.port;
    var pathname = window.location.pathname;
    var search = window.location.search;
    var hash = window.location.hash;
    return "Your full url address is " + fullUrl + " with domain name " + domainName + " and it's using " + protocol + " protocol." + "Parts of your URL are: \n" + port + "\n" + pathname + "\n" + search + "\n" + hash; 
} //nemam search i hash?!

var webInfo = webInformation();
console.log(webInfo);



function reloadPage () { 
    setTimeout(location.reload(), 500);
};
//reloadPage();

//window.location = "http://www.facebook.com";
//window.location.href = "http://stackoverflow.com";




//window.localStorage

function setStorage (key, value) {
    localStorage.setItem(key, value);
}

setStorage("name", "Sandra");
setStorage("age", "26");
setStorage("city", "Novi Sad");

function readData () {
    if (!localStorage.getItem("name")) {
        console.log("There is no data");
    } else {
        console.log("name");
    }
}
readData();


function removeData (key) {
    localStorage.removeItem(key);
}
removeData("age");



//window.history/////

//window.history.back();
///window.history.forward();

function twiceBack () {
    window.history.back().back();
}
//twiceBack();



//////////WINDOW METHODS///////

function greetingMsg () {
    alert("DJES BA");
}
greetingMsg();


function msg () {
    var user = window.prompt("What is your name?");
    if (window.confirm("We will submit this answer now! " + user)) {
        window.alert("Success");
    }
}
msg();
