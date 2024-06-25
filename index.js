const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXZ";
const lowerCase = "abcdefghijkmnñopqrstuvwxz";
const number = "1234567890";
const symbol = "Ω@!$%&*()-_+ ?¿¡";

const allChars = upperCase + lowerCase + number + symbol;

function crearPass() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

document.getElementById('copiar').addEventListener('click', function() {
    passwordBox.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles');
});

