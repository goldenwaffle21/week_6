const userInput = document.querySelector('input');
const formButton = document.querySelector('button');
const post = document.querySelectorAll('p');

function getSalutation(input) {
    let currentTime = new Date();

    console.log(getTime.toLocaleString());    //prints to the browser's console

    if (currentTime.getHours() < 12) {
        post.innerText = "Good morning, " + input;
    } else if (currentTime.getHours() < 17) {
        post.innerText = "Good afternoon, " + input;
    } else {
        post.innerText = "Good evening, " + input;
    }
}

formButton.addEventListener('click',getSalutation(userInput.value));
