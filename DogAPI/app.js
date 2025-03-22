let dogPic = document.getElementById('dogPic');
let button = document.getElementById('button');

button.addEventListener('click', getDog);

function getDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        document.getElementById("dogPic").src = data.message;
    })
}