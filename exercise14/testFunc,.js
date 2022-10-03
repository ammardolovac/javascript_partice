function Execute(broj) {
  if (broj % 2 === 0) {
    console.log("broj je paran");
  } else {
    console.log("boj neparan");
  }
}

exports.func1 = Execute;
