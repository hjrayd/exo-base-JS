const carres = document.querySelectorAll('.carre'); 
const carre5 = document.querySelector('.carre5'); 


//pour chaque element avec la classe carre on fera carre.forEach
carres.forEach (carre=> {
    carre.addEventListener('click', function() {
        // on recupere le css de lelement carre qui a ete click
        const objectCss = window.getComputedStyle(carre);
        //on recupere la couleur du carre 
        const color = objectCss.getPropertyValue("background-color");
        //definir la couleur de carre5
        carre5.style.setProperty("background-color", color);
        //modifier le contenu de lelement carre5 pour afficher la couleur ercuperer
        carre5.innerHTML=color;
})

//recuperer couleur dans une var couleur fond de l'element ou je clique

//recuperer couleur fond 

//modifier la couleur du carre du bas
//pour modifier il faut recuperer dans une var


})
