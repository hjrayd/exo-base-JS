const wrapper= document.querySelector("#wrapper");
const icones= document.querySelectorAll(".icone");


icones.forEach (icone=> {
    icone.addEventListener('click', function() {
        const objectCss = window.getComputedStyle(icone);
        const color = objectCss.getPropertyValue("background-color");
        wrapper.style.setProperty("background-color", color);
        wrapper.innerHTML=color;
})

icone.forEach(icone => {
    icone.addEventListener('click', function() {
       icone.classList.toggle('transition')      
})
})

})