const searchEntry = document.querySelector('input');
const formButton = document.querySelector('button');
const searchResult = document.createElement('p');
const apiUrl = 'https://swapi.dev/api/people/';

formButton.addEventListener('click', function() {
    let query = searchEntry.value;

});

function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open('',apiUrl);
    xhr.onreadystatechange = function() {
        console.log(xhr,this.response);
    }
    xhr.send();
}

