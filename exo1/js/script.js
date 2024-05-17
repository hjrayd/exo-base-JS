//on définit les variables en récuperant la classe "carre" et ses attributs CSS
const carre = document.querySelector('.carre'); 
const objectCss = window.getComputedStyle(carre);

//a chaque click la sera appelée
carre.addEventListener('click',function() {

    //la fonction renvoie une alerte avec tous les attributs de la class "Carre"
    alert("Class : carre\n" +
    "backgroundColor : " + objectCss.backgroundColor + "\n" +
    "color : " + objectCss.color + "\n" +
    "height : " + objectCss.height + "\n" +
    "width : " + objectCss.width + "\n" +
    "Display : " + objectCss.display + "\n" +
    "Font :" + objectCss.fontFamily + "(" + objectCss.fontSize + ")" + "\n");
}
)