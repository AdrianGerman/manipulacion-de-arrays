function addNewAttr(array) {
  // Tu código aquí 👈
  return array.map((item) => ({ ...item, taxes: Math.trunc(item.price * 0.19) }));
}

const products = [
  { title: "Burger", price: 121, stock: 10 },
  { title: "Pizza", price: 20, stock: 20 },
  { title: "Hotdog", price: 1000, stock: 2 },
  { title: "Enchiladas", price: 656, stock: 12 }
];

console.log(products);
console.log(addNewAttr(products));
