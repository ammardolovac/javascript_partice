const execute = () => {
  let num1 = document.getElementById("in1").value;
  let num2 = document.getElementById("in2").value;
  let num3 = document.getElementById("in3").value;
  let manifest = document.getElementById("display");

  if (num1 > num2 && num1 > num3) {
    manifest.innerHTML = "number one is the largest number";
  } else if (num2 > num1 && num2 > num3) {
    manifest.innerHTML = "number two is the largest number";
  } else if (num3 > num2 && num3 > num1) {
    manifest.innerHTML = "number three is largest number";
  }
  
console.log(num1);
console.log(num2);
console.log(num3);
console.log(manifest);


};
