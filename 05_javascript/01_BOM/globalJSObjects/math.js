/*● Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it. */

function randomArray () {
    var arr = [];
    for (var i = 0; i <= 10; i++) {
        arr.push((50 - 10) * Math.random() + 10);
    }
    console.log(arr);
    return arr;
}

randomArray();


/*● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array. */


function roundArray () {
    var array = randomArray();
    var mainArr = [];
    array.forEach (function (el) {
        mainArr.push(Math.round(el));
    })
    console.log(mainArr);
    return mainArr;
}

roundArray();


/*● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.*/

function floorArray () {
    var array = randomArray();
    var floorArr = [];
    array.forEach (function (el) {
        floorArr.push(Math.floor(el));
    })
    console.log(floorArr);
    return floorArr;
}

/*● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.*/


function maxElement () {
    var array = floorArray();
    var maxEl = ((Math.max(...array)));
    console.log(maxEl);
    return maxEl;

}

maxElement();




