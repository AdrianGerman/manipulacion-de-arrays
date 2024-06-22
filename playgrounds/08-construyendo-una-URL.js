function parseToURL(title) {
  // Tu código aquí 👈
  return title.split(" ").join("-").toLowerCase();
}

const title = "La forma de correr Python";

console.log(parseToURL(title));
