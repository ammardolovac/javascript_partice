let resultArray = [];
let displayEl = document.getElementById("display");

const execute = () => {
  
  let inputValue = document.getElementById("input").value;
  
  if (inputValue === "end") {
    for (let i = 0; i < resultArray.length; i++) {
      displayEl.innerHTML += "<br>" + resultArray[i];
    }
  } else {
    resultArray.push(parseInt(inputValue));
  }
  console.log(typeof inputValue);
};
  
const sort = () => {

  let newArr = resultArray.sort((a, b) => b - a);
  document.getElementById("display1").innerHTML = newArr[1];

};


// let arr = [];

// let newArr = arr.sort((a,b) => a - b);

// const secondMax = (arg1) => {

  //   console.log(34);

  // };

  //  second4([1, 2, 32, 343, 543, 324, -234.23, 35.34, 253]);

