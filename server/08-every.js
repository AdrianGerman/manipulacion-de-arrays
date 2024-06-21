const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    rta = false;
  }
}

console.log("for", rta);
const rta2 = numbers.every((item) => item <= 40);
console.log("rta2", rta2);

const team = [
  {
    name: "Adrian",
    age: 12
  },
  {
    name: "Julieta",
    age: 8
  },
  {
    name: "Moctezuma",
    age: 2
  },
  {
    name: "Valentina",
    age: 18
  }
];

const rta3 = team.every((item) => item.age < 15);
console.log("rta3", rta3);
