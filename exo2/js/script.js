const carre = document.querySelector('.carres'); 
const carre5 = document.querySelector('.carre5'); 

carre.addEventListener('click',function() {
const objectCss = window.getComputedStyle(carre, carre5);
carre5.objectCss.backgroundColor = carre.objectCss.backgroundColor;
})