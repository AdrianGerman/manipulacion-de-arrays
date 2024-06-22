const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers);
const words = ["réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana"];
words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
  {
    customerName: "Adrian",
    total: 600,
    delivered: true
  },
  {
    customerName: "German",
    total: 120,
    delivered: false
  },
  {
    customerName: "Julieta",
    total: 1840,
    delivered: true
  },
  {
    customerName: "Aime",
    total: 240,
    delivered: true
  }
];

orders.sort((a, b) => b.total - a.total);
console.log(orders);
