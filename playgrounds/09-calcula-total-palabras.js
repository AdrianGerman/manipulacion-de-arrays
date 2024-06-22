function countWords(array) {
  // Tu código aquí 👈
  return array.flatMap((item) => item.split(" ")).length;
}

const zen = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated"
];

console.log(countWords(zen));
