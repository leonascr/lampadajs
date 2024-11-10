const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lamp0n() {
    lamp.src = './img/ligada.jpg';
}

function lamp0ff() {
    lamp.src = './img/desligada.jpg';
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}


turnOn.addEventListener('click', lamp0n);
turnOff.addEventListener('click', lamp0ff);
lamp.addEventListener('mouseover', lamp0n);
lamp.addEventListener('mouseleave', lamp0ff);
lamp.addEventListener('dblclick', lampBroken);

