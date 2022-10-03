function doSomething(){

    var firstNumber = document.getElementById("in1").value;
    var secondNumber = document.getElementById("in2").value;

    var pElement = document.getElementById("prikaz");

    if(firstNumber === secondNumber){
        pElement.innerHTML = "Brojevi su jednaki";
    }
    else {
        pElement.innerHTML = "Nisu jednaki";
    }

}
