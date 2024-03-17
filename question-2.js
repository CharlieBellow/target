let myArray = [];
let nItem = 8;
function fibo(v1, v2, nItem) {
  if (nItem == 1) {
    return v1;
  }

  if (nItem == 2) {
    return v2;
  }

  let values = fibo(v1, v2, nItem - 1) + fibo(v1, v2, nItem - 2);
  myArray.push(values);
  return values;
}

const value = fibo(0, 1, nItem);

console.log("o resultado é:", value);


if (myArray.includes(nItem)) {
  console.log(nItem, " pertence à sequência");
}
