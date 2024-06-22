const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// [... se copia sin la referencia de memoria]
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

console.log("for =>", newArray);

const rta = elements.concat(othersElements);
console.log("concat", rta);

const rta2 = [...elements, ...othersElements];
console.log("...", rta2);
