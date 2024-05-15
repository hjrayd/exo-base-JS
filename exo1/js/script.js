const carre = document.querySelector('.carre'); 
const objectCss = window.getComputedStyle(carre);

carre.addEventListener('click',function() {

    alert("Class : carre\n" +
    "backgroundColor : " + objectCss.backgroundColor + "\n" +
    "color : " + objectCss.color + "\n" +
    "height : " + objectCss.height + "\n" +
    "width : " + objectCss.width + "\n" +
    "Display : " + objectCss.display + "\n" +
    "Font :" + objectCss.fontFamily + "(" + objectCss.fontSize + ")" + "\n");
}
)