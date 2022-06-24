class Carrito {
  constructor(productos) {
    this.productos = productos;
  }

  addProduct(product) {
    this.productos.push(product);
  }

  calcularTotal() {
    // Recorremos el array del carrito
    return products.reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = products.filter((itemproducts) => {
        return itemproducts === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].price;
    });
  }
}
