function filterByTerm(array, term) {
  // Tu código aquí 👈
  term = "ana";
  return array.filter((item) => item.includes(term));
}

const filterArray = ["ana", "santi", "nico", "anastasia"];

console.log(filterByTerm(filterArray));
