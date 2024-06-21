function checkArray(numbers) {
  // Tu código aquí 👈
  return (numbers = numbers.some((item) => item % 2 === 0));
}

const numbersArray = [1, 3, 5, 7, 10, 11];

console.log(checkArray(numbersArray));
