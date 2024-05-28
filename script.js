
function carregar(){
const message = document.getElementById("message");
const photo = window.document.getElementById("photo");
const saudation = document.getElementById("saudation");
const section = document.getElementById("secao");
const data = new Date();
const hora = data.getHours();
const minutes = data.getMinutes();

message.innerHTML = `Hora atual - ${hora}h${minutes}`;

if(hora >= 0 && hora <=12){
    photo.src = "img/dia.png";
    saudation.innerHTML = `Bom dia! ⛅`;
    window.document.body.style.background = "rgb(0, 58, 112)";
    section.style.background = "rgb(27, 0, 77)";
}else if(hora <= 18){
    photo.src = "img/tarde.png";
    saudation.innerHTML = `Boa tarde! ☀️`;
    window.document.body.style.background = "rgb(248, 170, 0)";
    section.style.background = "rgb(97, 66, 1)";
}else{
    photo.src = "img/noite.png";
    saudation.innerHTML = `Boa noite! 🌙`;
    window.document.body.style.background = "black";
    section.style.background = "gray";
}
}