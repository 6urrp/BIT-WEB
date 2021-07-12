const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
let linkTag = searchWrapper.querySelector("a");

let handler = function(e) {
    let userData = e.target.value; 
    let emptyArray = [];
    let array10 = [];
    if(userData){
        emptyArray = titles.filter(function(data){
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map(function(data){
            return data = `<li>${data}</li>`;
        });
        array10 = emptyArray.slice(0, 10)

        searchWrapper.classList.add("active");
        showList(array10);

        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); 
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;

    searchWrapper.classList.remove("active");
}

function showList(list){
    let listData;
    if (!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

inputBox.addEventListener("keyup", handler)
