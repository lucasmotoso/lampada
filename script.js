alert('Olá, tome cuidado com a lampada, não clique duas vezes.')

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('lampada_quebrada') > -1
}


function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/lampada_acesa.png'

    }
}


function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/lampada_desligada.png'

    }
}

function lampBroken() {
    lamp.src = './img/lampada_quebrada.png'
    alert (' **CRASH!!!')
    alert ('Você quebrou a lampada!')

}




turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);