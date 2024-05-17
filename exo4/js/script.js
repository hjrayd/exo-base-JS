//on  definit les variables
const wrapper= document.querySelector("#wrapper");
const icones= document.querySelectorAll(".icone");


icones.forEach (icone=> {
    icone.addEventListener('click', function() {

        //changement de couleur du background
        const objectCss = window.getComputedStyle(icone);
        const color = objectCss.getPropertyValue("background-color");

        wrapper.style.setProperty("background-color", color); 
      
        //transition
        icone.classList.toggle('transition') 
       })
    })
