function calcSum(numbers) {
  // Tu código aquí 👈
  return numbers.reduce((sum, item) => sum + item, 0);
}

const array = [2, 4, 8];

console.log(calcSum(array));
