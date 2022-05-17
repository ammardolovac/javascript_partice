var UnosVrednosti = ("Unesite Godinu:");
UnosVrednosti = parseInt(UnosVrednosti);

var UnosDrugeVrednosti = prompt("Unesite godinu rodjenja:");
UnosDrugeVrednosti = parseInt(UnosDrugeVrednosti);

var brojGodina = parseInt(UnosVrednosti) - parseInt(UnosDrugeVrednosti);

var textZaConoslu = "Godine: ";

console.log(textZaConsolu + brojGodina);
