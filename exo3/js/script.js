//on definit la variable en recuperant la classe carre
var carre = document.querySelectorAll('.carre');

//on fait une boucle pour chaque carre
carre.forEach(carre => {
        //au clique la fonction va être appelée
     carre.addEventListener('click', function() {
        //les attributs de la classe transition vont être applique a chaque carré lorsque'on cliquera dessus
        carre.classList.toggle('transition')      
})
})