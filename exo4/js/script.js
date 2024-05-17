//on  definit les variables en récuperant l'id wrapper et toutes les classes icones
const wrapper= document.querySelector("#wrapper");
const icones= document.querySelectorAll(".icone");

//pour chaque icones présentes
icones.forEach (icone=> {
    //la fonction s'appliquera dessus lorsqu'on cliquera sur l'une d'elles
    icone.addEventListener('click', function() {
        icone.classList.toggle(".transition")
        if(!icone.classList.contains(".transtion")) {
            wrapper.style.backgroundColor = "#bdbdbd"
        } else {
            wrapper.style.backgroundColor = icone.dataset.color 
        }
        //on recupere les attributs de la classe "transition" pour ajouter l'ombre et faire apparaitre le texte
        icone.classList.toggle('transition') 
    })
    
})
