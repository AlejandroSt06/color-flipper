var data = new Date();
var actualYear = data.getFullYear()

document.getElementById("actual-year").innerHTML = actualYear
const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
'A', 'B', 'C', 'D', 'E', 'F'];


document.querySelector(".container button").addEventListener("click",ranomColor)
function ranomColor(){
    var hex = "#";
    for(let i = 0;i<6;i++){

hex += hexCharacters[randomNumber()];

    }
    document.getElementById("bg-color").innerHTML = hex;
    document.querySelector("main").style.backgroundColor = hex;
}

function randomNumber(){

    return Math.floor(Math.random() * hexCharacters.length)
}


