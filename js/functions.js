

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
    let y = e.clientY - e.target.offsetTop - window.pageXOffset.top;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove();
    },1000);
})


//Animação de slide da sessão inicio
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


//SLIDE DA SESSÃO SOBRE

var titleSobre = document.querySelector(".sobre-descricao h1");
var paragrafoSobre = document.querySelector(".sobre-descricao p");
var sliderSobre = document.querySelector("#sliderSobreWraper");

var sobreCont = 0;

var titulos = [
    "CLÍNICA REFERÊNCIA", 
    "CORPO CLÍNICO QUALIFICADO", 
    "MELHORANDO VIDAS DESDE 2000", 
    "NOSSA EQUIPE"];
var descricoes = [
    "Estamos aparelhados para atuar especialmente na otorrinolaringologia, tanto clínica como cirúrgica adulta ou pediátrica, e voltada, naturalmente, para a saúde das vias aéreas superiores (orelha, nariz e garganta).",
    "Serviço completo de fonoaudiologia incluindo laboratórios com exames altamente qualificados, fisioterapia labiríntica e qualificado corpo de funcionários.",
    "Nasceu no ano de 2000, A necessidade em busca de um serviço especializado e qualificado em otorrinolaringologia, observando a carência deste atendimento na capital de MA. Assim, surge a Clínica Dr. Bismarck Aguiar",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae quam pretium, finibus lectus id, facilisis odio. Nunc feugiat orci nec mollis consectetur. Vestibulum at ornare nisi. Mauris nisi dolor, feugiat iaculis neque et, elementum finibus eros."
];

titleSobre.innerHTML = titulos[sobreCont];
paragrafoSobre.innerHTML = descricoes[sobreCont];

var intervaloSlideSobre = setInterval( () => {

},4000)