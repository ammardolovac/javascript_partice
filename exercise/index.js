function execute() {

let inputFirst = document.getElementById("in1").value;
let inputSecond = document.getElementById("in2").value;
let manifest = document.getElementById("dispay");

if (inputFirst === inputSecond){
    document.getElementById("display").innerHTML = "the numbers are equal";

}
else{
    document.getElementById("display").innerHTML = "the numbers are not equal";

}



}