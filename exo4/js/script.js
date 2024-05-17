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
        icone.classList.toggle('transition') 
    })
    
})
