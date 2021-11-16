const outputInBinary = document.getElementById('output-binary');
const binaryConversionBtn = document.getElementById('binary');

const outputInOctal = document.getElementById('output-octal');
const octalConversionBtn = document.getElementById('octal');

const outputInHexa = document.getElementById('output-hexa');
const hexaConversionBtn = document.getElementById('hexa');




const binaryConverter = (e) => {
    e.preventDefault();
    const input = document.getElementById('input').value;
    if (input === '') {
        alert("Please enter a number")
    } else if (input < 0) {
        alert("Please enter a number greater than 0");
    };
    binaryNumber = Number(input).toString(2);
    outputInBinary.value = binaryNumber;
}



const octalConverter = (e) => {
    e.preventDefault();
    const input = document.getElementById('input').value;
    if (input === '') {
        alert("Please enter a number")
    } else if (input < 0) {
        alert("Please enter a number greater than 0");
    } else {
        octalNumber = Number(input).toString(8);
    }

    outputInOctal.value = octalNumber;
}
const hexaConverter = (e) => {
    e.preventDefault();
    const input = document.getElementById('input').value;
    if (input === '') {
        alert("Please enter a number")
    } else if (input < 0) {
        alert("Please enter a number greater than 0");
    } else {
        hexaNumber = Number(input).toString(16);
    }

    outputInHexa.value = hexaNumber;
}

binaryConversionBtn.addEventListener('click', binaryConverter);
octalConversionBtn.addEventListener('click', octalConverter);
hexaConversionBtn.addEventListener('click', hexaConverter);