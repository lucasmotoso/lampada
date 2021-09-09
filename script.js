alert('Olá, tome cuidado com a lampada, não clique duas vezes.')

const turnOnOff = document.getElementById('turnOnOff');
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
    alert ('Pressione F5 para restaurar a lampada!')

}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}


turnOnOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);