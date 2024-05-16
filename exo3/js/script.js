var carre = document.querySelectorAll('.carre');


   
carre.forEach(carre => {
     carre.addEventListener('click', function() {
        carre.classList.toggle('transition')      
})
})