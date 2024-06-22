const elements = ["fire", "air", "water"];

let rtaFinal = "";
const separator = "--";

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join("--");
console.log("for =>", rtaFinal);
console.log("for join =>", rta);

const title = "Clase de manipulación de arrays";

const titleFinal = title.split(" ").join("-").toLowerCase();
console.log(titleFinal);
