

//efeito de hover da apresentação

var slideApre = document.querySelectorAll('.slide');

var especialidadeApre = document.querySelectorAll('.slide > h1');
var buttonApre = document.querySelector('#slider > button');
var overApre = document.querySelector('#slider > .overflow');

var apresentacao = document.querySelector('.apresentacao');


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

window.onscroll = function() {
    animScroll();
};

function animScroll() {
    var progressHeight = (window.pageYOffset / totalHeight) * 100;

    progressbar.style.height = progressHeight + "%";
}


//efeito de click do botão da apresentação

buttonApre.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove();
    },1000);
})


//Animação de slide
var sliderCont = 2;

slider()

function slider() {
    var slideInterval = setInterval(function(){

        sliderCont--;
        if(sliderCont < 0){
            sliderCont = 2;
        }

        for(var i = 0; i < slideApre.length; i++){
            if(i == sliderCont){
                slideApre[i].style.opacity = 1;
            }else {
                slideApre[i].style.opacity = 0;
            }
        }
    }, 5000)
}