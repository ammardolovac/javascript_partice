
function doSomething() {
   var number = document.getElementById("in1");
   var pElement = document.getElementById("display");

   // (15 / 2 = 7.5 => 7*2 = 14 => 15 - 14 = 1) === 15 % 2 = 1
   if (number.value % 2 === 0) {
     pElement.innerHTML = "Broj je paran";
   } else if (number % 2 !== 0) {
     pElement.innerHTML = "Broj je neparan";
   }
   console.log(number.value);

 }

// function doSomething() {

//   var pare = document.getElementById("in1").value;
//   var pElement = document.getElementById("display");
  
//   pElement.innerHTML = pare;
//   console.log()



 


//  function doSomething() {

//    var input = document.getElementById("in1").value;
//    var inputDrugi = document.getElementById("in2").value;
//    var pElement = document.getElementById("display");
  
//    input = parseInt(input);
//    inputDrugi = parseInt(inputDrugi);
//   pElement.innerHTML = input + inputDrugi
  
//  console.log(input);
//  console.log(inputDrugi);





function doSomething() { 

var unos1 = document.getElementById("in1").value;
var unos2 = document.getElementById("in2").value;
var pElement = document.getElementById("display");

unos1 = parseInt(unos1);
unos2 = parseInt(unos2);

pElement.innerHTML = unos1 + unos2
 
console.log(unos1);
console.log(unos2);

}
    