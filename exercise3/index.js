const execute = () => {
let year = document.getElementById("in1").value;
let manifest = document.getElementById("display");

if (year % 4 > 0) {

   manifest.innerHTML = "Godina nije prestupna"

}
else if (year % 100 > 0){

    manifest.innerHTML = "godina je prestupna"
}




}