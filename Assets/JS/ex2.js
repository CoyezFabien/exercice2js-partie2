
// var = déclare une variable "pop" permet d'attribuer un nom 
/* le signe = permet à la variable une valeur (on stocke quelque chose)
document c'est ma page html
getElementById permet de récuper ID que l'on va préciser entre les parenthèses ('....')
.value me permet de récuper la valeur de l'Id signifier juste avant on veut récuper le champ que l'utilisateur va écrire
*/
document.getElementById('formu').onkeyup = function key()
/*on affecte evenement onkeyup  à ID qui correspond au champ ici"formu"
quand l'evenement onkeyup est verifié on lance la fonction qui associé avec le égal 
*/ 
{
var pop = document.getElementById('formu').value;
alert(pop);
}
/*dans javascript c'est un executif du coup il faut mettre la var pop en 1er et l'alerte ensuite*/ 
// la function va permettre d'avtiver l'evenement associé à ID