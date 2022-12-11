const hamburguer = document.querySelector('.hamburguer');
const navegacion= document.querySelector('.navegacion')
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu
})


function mostrarMenu(){
    hamburguer.addEventListener('click', ()=>{
        //navegacion.classList.toggle('ocultar')

        if(navegacion.classList.contains('ocultar')){
            navegacion.classList.remove('ocultar');
        }else{
            navegacion.classList.add('ocultar');
        }
    });
}