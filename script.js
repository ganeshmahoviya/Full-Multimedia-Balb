let btn = document.querySelector('.btn');

let body = document.querySelector('body');

let audio = document.querySelector('#audio');



let btnred = document.querySelector('.red-btn');
btnred.onclick  = function(){
    body.classList.toggle('lal');
    audio.play();
}


let btngreen = document.querySelector('.green-btn');
btngreen.onclick = function(){
    body.classList.toggle('hara');
    audio.play();
}


let btnorange = document.querySelector('.orange-btn');
btnorange.onclick = function(){
    body.classList.toggle('santara');
    audio.play();
}

let btnblue = document.querySelector('.blue-btn');
btnblue.onclick = function(){
    body.classList.toggle('nila');
    audio.play();
}



btn.onclick = function(){
    body.classList.toggle('on');
    audio.play();
}