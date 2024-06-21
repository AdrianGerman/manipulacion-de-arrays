function filterByLength(array) {
  // Tu código aquí 👈
  //   retorna palabras de 4 caracteres o mas
  return array.filter((item) => item.length >= 4);
}

const arrayStrings = ["amor", "sol", "piedra", "día"];

console.log(filterByLength(arrayStrings));
