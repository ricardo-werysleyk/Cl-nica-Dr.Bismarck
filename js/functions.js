

//efeito de hover da apresentação

var slideApre = document.querySelectorAll('.slide');

var especialidadeApre = document.querySelectorAll('.slide > h1');
var buttonApre = document.querySelectorAll('.slide > h1 > button');
var overApre = document.querySelectorAll('.slide > .overflow');

var apresentacao = document.querySelector('.apresentacao');


document.querySelectorAll('.slide > h1')[0].addEventListener('mouseover', function(){

    for(var i = 0; i < 3; i++){
        if(i == 0){
            overApre[i].style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            especialidadeApre[i].style.opacity = "1";
            buttonApre[i].style.opacity = "1";
        }else{
            overApre[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            especialidadeApre[i].style.opacity = "0.2";
            buttonApre[i].style.opacity = "0";
        }
    }

    apresentacao.style.opacity = "0.5";
});

document.querySelectorAll('.slide > h1')[1].addEventListener('mouseover', function(){

    for(var i = 0; i < 3; i++){
        if(i == 1){
            overApre[i].style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            especialidadeApre[i].style.opacity = "1";
            buttonApre[i].style.opacity = "1";
        }else{
            overApre[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            especialidadeApre[i].style.opacity = "0.2";
            buttonApre[i].style.opacity = "0";
        }
    }

    apresentacao.style.opacity = "0.5";
});

document.querySelectorAll('.slide > h1')[2].addEventListener('mouseover', function(){

    for(var i = 0; i < 3; i++){
        if(i == 2){
            overApre[i].style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            especialidadeApre[i].style.opacity = "1";
            buttonApre[i].style.opacity = "1";
        }else{
            overApre[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            especialidadeApre[i].style.opacity = "0.2";
            buttonApre[i].style.opacity = "0";
        }
    }

    apresentacao.style.opacity = "0.5";
});

for(var i =0; i < especialidadeApre.length; i++){
    especialidadeApre[i].addEventListener('mouseout', out);
}

function out(){
    for(var i =0; i < especialidadeApre.length; i++){
        especialidadeApre[i].style.opacity = "1";
        overApre[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        buttonApre[i].style.opacity = "0";
    }
    apresentacao.style.opacity = "1";
}


//efeito da navbar selecionada

var marker = document.querySelector('#marker');
var itemMenu = document.querySelectorAll('#desktop a');

indicador(itemMenu[0]);

function indicador(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

itemMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        indicador(e.target);
    })
})


//efeito da scrollBar

var progressbar = document.getElementById("progressbar");
var totalHeight = document.body.scrollHeight - window.innerHeight;


function animScroll() {
    var progressHeight = (window.pageYOffset / totalHeight) * 100;

    progressbar.style.height = progressHeight + "%";
}


//Animação de slide
var sliderCont = 2;
var letreiro = document.getElementById('letreiro');
var especialidades = ["OUVIDO", "NARIZ", "GARGANTA"];

// letreiro.innerHTML = especialidades[sliderCont];
// slider()

// function slider() {
//     var slideInterval = setInterval(function(){

//         sliderCont--;
//         if(sliderCont < 0){
//             sliderCont = 2;
//         }

//         for(var i = 0; i < slide.length; i++){
//             if(i == sliderCont){
//                 slide[i].style.opacity = 1;
//             }else {
//                 slide[i].style.opacity = 0;
//             }
//         }

//         letreiro.innerHTML = especialidades[sliderCont];

//     }, 5000)
// }


//Scroll NavBar
window.onscroll = function() {
    myFunction();
    animScroll();
};

// Get the navbar
var navbarDesktop = document.getElementById("desktop");

// Get the offset position of the navbar
var sticky = navbarDesktop.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarDesktop.style.position = "fixed";
    navbarDesktop.style.top = "0";
  } else {
    navbarDesktop.style.position = "absolute";
    navbarDesktop.style.top = "calc(100% - 95px)";
  }
}