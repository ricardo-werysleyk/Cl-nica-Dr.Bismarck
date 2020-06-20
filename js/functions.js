

//efeito de hover da apresentação

var slideApre = document.querySelectorAll('.slide');

var especialidadeApre = document.querySelectorAll('.slide > h1');
var buttonApre = document.querySelector('#slider > button');
var overApre = document.querySelector('#slider > .overflow');

var apresentacao = document.querySelector('.apresentacao');

//sessões
var sectionSobre = document.getElementById('sobre');
var sectionEspecialidades = document.getElementById('especialidades');
var sectionConvenios = document.getElementById('convenios');


//efeito da navbar selecionada

var marker = document.querySelector('#marker');
var itemMenu = document.querySelectorAll('#desktop a');
var MenuDesk = document.querySelector('#desktop');

indicador(itemMenu[0]);

function indicador(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

itemMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        indicador(e.target);
        scrollToSmooth( e.target.innerText );
    })
})

function animNav() {
    
    if(window.pageYOffset >= 0 && window.pageYOffset < sectionSobre.offsetTop){
        indicador(itemMenu[0]);
    }else if(window.pageYOffset >= sectionSobre.offsetTop && window.pageYOffset < sectionEspecialidades.offsetTop){
        indicador(itemMenu[1]);
    }

    if(window.pageYOffset >= 0 && window.pageYOffset < 100){
        MenuDesk.style.top = "0";
    }else{
        MenuDesk.style.top = "-75px";
    }
    
}

function scrollToSmooth(sessao) {
    if(sessao == "SOBRE A CLÍNICA"){
        scrollPersonalizado(sectionSobre.offsetTop);
    }else if(sessao == "ESPECIALIDADES"){
        scrollPersonalizado(sectionEspecialidades.offsetTop);
    }else if(sessao == "CONVÊNIOS"){
        scrollPersonalizado(sectionConvenios.offsetTop);
    }
}

function scrollPersonalizado(n) {
    var i = 10;

    var int = setInterval(function() {

        window.scrollTo({
            top: (window.pageYOffset + i)
        })
        i += 10;
        if (window.pageYOffset >= n - 70) clearInterval(int);
    }, 20);
}


//efeito da scrollBar

var progressbar = document.getElementById("progressbar");
var totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    animScroll();
    animNav();
};

function animScroll() {
    var progressHeight = (window.pageYOffset / totalHeight) * 100;

    progressbar.style.height = progressHeight + "%";
}

//efeito botão scrool top

window.addEventListener('scroll', function(){
    var btnScroll = document.querySelector('.scrollTop');

    btnScroll.classList.toggle('active' , window.scrollY > 500);
});

function btnScrollTop(){

    var n = 10;
    var topo = setInterval(function() {

        window.scrollTo({
            top: (window.pageYOffset - n)
        })
        n += 10;
        if (window.pageYOffset == 0) clearInterval(topo);
    }, 20);

}


//efeito de click do botão da apresentação

buttonApre.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop + window.pageYOffset;

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
var sobreBullets = document.querySelectorAll('.sobreBullets > .bullet');

var sobreCont = 0;
var slideSobreTimer = 4000;

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

    //inicialização
titleSobre.innerHTML = titulos[sobreCont];
paragrafoSobre.innerHTML = descricoes[sobreCont];
sliderSobre.style.left = "0";
sobreBullets[sobreCont].classList.add("bulletSelect");

var intervaloSlideSobre = setInterval( () => {
    slideSobre();
},slideSobreTimer);

function slideSobre() {

    //sistema contador
    sobreCont++;
    if(sobreCont > 3){
        sobreCont = 0;
    }

    //Textos

    titleSobre.innerHTML = titulos[sobreCont];
    paragrafoSobre.innerHTML = descricoes[sobreCont];

    //movimentação das imagens

    if(sobreCont == 0){

        sliderSobre.style.left = "0";

    }else if(sobreCont == 1){

        sliderSobre.style.left = "-100%";

    }else if(sobreCont == 2){

        sliderSobre.style.left = "-200%";

    }else if(sobreCont == 3){

        sliderSobre.style.left = "-300%";

    }

    //sistema das bullets

    for(var i = 0; i < sobreBullets.length; i++){
        if(i == sobreCont){
            sobreBullets[i].classList.add("bulletSelect");
        }else {
            sobreBullets[i].classList.remove("bulletSelect");
        }
    }

}

//SISTEMA DE CLICKS DAS BULLETS

function currentSlide(index) {

    sobreCont = index;

    clearInterval(intervaloSlideSobre);

    titleSobre.innerHTML = titulos[index];
    paragrafoSobre.innerHTML = descricoes[index];

    if(index == 0){

        sliderSobre.style.left = "0";

    }else if(index == 1){

        sliderSobre.style.left = "-100%";

    }else if(index == 2){

        sliderSobre.style.left = "-200%";

    }else if(index == 3){

        sliderSobre.style.left = "-300%";

    }

    for(var i = 0; i < sobreBullets.length; i++){
        if(i == index){
            sobreBullets[i].classList.add("bulletSelect");
        }else {
            sobreBullets[i].classList.remove("bulletSelect");
        }
    }

    setTimeout(() => {
        var intervaloSlideSobre = setInterval( () => {
            slideSobre();
        },slideSobreTimer);
    },slideSobreTimer);

}


//funções extras

function retira_acentos(str) 
{

    com_acento = `ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐ
ÑÒÓÔÕÖØÙÚÛÜ
ÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ`;

sem_acento = `AAAAAAACEEEEIIIIDN
OOOOOOUUUUYRsBaaa
aaaaceeeeiiiionoooooouuuuybyr`;
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
} 


//GRADE JS- GRADIENT DE ACORDO COM A IMAGEM

window.addEventListener('load', function(){
    /*
        A NodeList of all your image containers (Or a single Node).
        The library will locate an <img /> within each
        container to create the gradient from.
     */
    Grade(document.querySelectorAll('.gradient-wrap'))
})

//swiper js

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: '.swiper-pagination',
    // },
});