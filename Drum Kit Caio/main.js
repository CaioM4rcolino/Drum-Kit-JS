'use strict';

const container = document.querySelector('#container');

const sounds = [
    { 'id': '0', 'key': 'a', 'sound': './sounds/clap.wav' },
    { 'id': '1', 'key': 'b', 'sound': './sounds/boom.wav' },
    { 'id': '2', 'key': 'c', 'sound': './sounds/tom.wav' },
    { 'id': '3', 'key': 'd', 'sound': './sounds/ride.wav' },
    { 'id': '4', 'key': 'e', 'sound': './sounds/snare.wav' },
    { 'id': '5', 'key': 'f', 'sound': './sounds/hihat.wav' },
    { 'id': '6', 'key': 'g', 'sound': './sounds/openhat.wav' }
];

const loadSounds = (sounds, container) => {
    sounds.forEach(sounds => {
        container.innerHTML += `
            <div class='containers' id='${sounds.id}'>
                ${sounds.key}
                <audio src='${sounds.sound}'></audio>
            </div>
        `
    })
}

loadSounds(sounds, container);
let boxes = document.querySelectorAll('.containers');


const clickSound = (x) => {
    if (x.target.id != 'container') {
        let selectedSound = event.target.id
        audio[selectedSound].play()
    }
}

const keySound = (y) => {
    let tecla = y.key;
    sounds.forEach(sounds => {
        if (tecla == sounds.key) {
            console.log(tecla);
            audio[sounds.id].play();
        }
    })

}


const audio = document.querySelectorAll('audio');
container.addEventListener('click', clickSound);
document.querySelector('body').addEventListener('keydown', keySound);

// caixa1.addEventListener('click', function() {
//     audio[0].play()
// })

// caixa2.addEventListener('click', function() {
//     audio[1].play()
// })

// caixa3.addEventListener('click', function() {
//     audio[2].play()
// })
// caixa4.addEventListener('click', function() {
//     audio[3].play()
// })