// Código para la animación de escritura en la consola
const titleElement = document.getElementById('typing-animation');
const titleText = "Inanimadox";
let index = 0;

function typeTitle() {
    if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeTitle, 100); // Ajusta la velocidad de escritura
    }
}

typeTitle();
