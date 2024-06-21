function checkArray(array) {
  // Tu código aquí 👈
  return array.length ? array.every((item) => item % 2 === 0) : false;
}

const retBool = [2, 4, 6, 8, 10];
console.log(checkArray(retBool));
