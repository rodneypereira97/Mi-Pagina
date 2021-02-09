let ubicacionPrincipal = window.pageYOffset;

  AOS.init();


window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal>desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"    
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual;
});

//MENU

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }
    
    enlacesHeader.classList.toggle("menudos")
})
$(document).ready(function(){
 
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });
   
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
   
   });