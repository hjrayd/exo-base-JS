//on  definit les variables
const wrapper= document.querySelector("#wrapper");
const icones= document.querySelectorAll(".icone");

icones.forEach (icone=> {
    icone.addEventListener('click', function() {
        icone.classList.toggle(".transition")
        if(!icone.classList.contains(".transition")) {
            wrapper.style.backgroundColor = "#bdbdbd"
        } else {
            wrapper.style.backgroundColor = icone.dataset.color 
        }
        //on recupere les attributs de la classe "transition" pour ajouter l'ombre et faire apparaitre le texte
        icone.classList.toggle('transition') 
    })
    
})
