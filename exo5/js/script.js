
//on définit la variable "francs" qui servira à afficher le résultat de la conversion
let francs = document.querySelector(".francs");


function convertFunction() {
//on définit ma variable "euro" en lui ajoutant la propriété "value" quinous permettra de récuperer ce qu'il y a à l'interieur du champ de texte
let euros = document.querySelector(".euros").value;

    if(isNaN(euros)) {
     //si la donnée entrée n'est pas une valeur numérique, le résultat affichera :
         francs.innerHTML = "Veuillez saisir une valeur numérique.";  
          
    } else {
    //on converti les euros en francs
    result = euros*6.55957;
    //on affiche le résultat en ajoutant la propriété "toFixed(2)" qui nous permettra d'arrondir le résultat à deux décimales
    francs.innerHTML = result.toFixed(2) + " francs";
}
}

