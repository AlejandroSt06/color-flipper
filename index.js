var data = new Date();
var actualYear = data.getFullYear()

var colorCode = "#FFF6E0"
document.getElementById("actual-year").innerHTML = actualYear

const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'];


document.querySelector(".container button").addEventListener("click", ranomColor)
function ranomColor() {
    

    var hex = "#";
    for (let i = 0; i < 6; i++) {

        hex += hexCharacters[randomNumber()];

    }

    hexConv = hex.replace(/^#/, '');

    var r = parseInt(hexConv.substring(0, 2), 16);
    var g = parseInt(hexConv.substring(2, 4), 16);
    var b = parseInt(hexConv.substring(4, 6), 16);

    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';

    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Grigio
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    // Converte i valori HSL in HSLA



    var hsl = 'hsl(' + Math.floor((h * 360)) + ', ' + Math.floor((s * 100)) + '%, ' + Math.floor((l * 100)) + ')';
    var hsla = 'hsla(' + Math.floor((h * 360)) + ', ' + Math.floor((s * 100)) + '%, ' + Math.floor((l * 100)) + '%, 1)';



    var codeSelect = document.querySelector(".select-code").value;

    switch (codeSelect) {
        case "hex":
            codeShow = hex;
            break
        case "rgb":
            codeShow = rgb;
            break
        case "rgba":
            codeShow = rgba;
            break
        case "hsl":
            codeShow = hsl;
            break
        case "hsla":
            codeShow = hsla;
            break


    }
    document.getElementById("bg-color").innerHTML = codeShow;
    document.querySelector("main").style.backgroundColor = hex;
}




function randomNumber() {

    return Math.floor(Math.random() * hexCharacters.length)
}


function copyCode() {

    
    // Crea un elemento di input temporaneo
    var inputTemporaneo = document.createElement("input");

    // Imposta il valore dell'input temporaneo con il testo da copiare
    inputTemporaneo.setAttribute("value", codeShow);

    // Aggiungi l'input temporaneo al documento
    document.body.appendChild(inputTemporaneo);

    // Seleziona il testo nell'input temporaneo
    inputTemporaneo.select();

    // Copia il testo negli appunti dell'utente
    document.execCommand('copy');

    // Rimuovi l'input temporaneo
    document.body.removeChild(inputTemporaneo);
    
}

