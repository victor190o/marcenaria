
//só usa função pra esconder menu ao clicar na opção quando é Mobile

$(".nav-link").on("click", function(){
    if(window.innerWidth < 768){
        $('.navbar-collapse').collapse('hide');
    }
 });

 //diminui tempo de troca entre slides do carrossel

 $('#carousel').carousel({
     //interval: 3000,
     keyboard: true
 })