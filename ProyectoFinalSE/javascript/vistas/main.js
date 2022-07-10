// let categoriasSistema = [];
// let carrito = new Carrito([]);

// initApp();

// function initApp() {
//   saludarConSweetAlert();
//   loadMode();
//   programarModeBtn();
//   loadData();
//   agregarProducto();
// }

// function loadData() {
//   loadCategories();
//   showCategories();
//   showProducts();
//   console.log(categoriasSistema);
// }

// function loadCategories() {
//   const categorias = products.map((element) => element.category);
//   const categoriasSet = new Set(categorias);
//   const categoriasUnicas = [...categoriasSet];

//   categoriasSistema = categoriasUnicas.map((element) => {
//     return {
//       id: element,
//       nombre: element,
//     };
//   });
// }

// function showCategories() {
//   const divCategorias = document.getElementById("categoryMenu");
//   categoriasSistema.forEach((element) => {
//     const btn = document.createElement("button");
//     btn.classList.add("catBtn");
//     btn.innerText = element.nombre;

//     btn.addEventListener("click", () => {
//       showProducts(element.nombre);
//     });

//     divCategorias.appendChild(btn);
//   });
// }
// //Asignación por defecto:
// //Cuando se invoca sin parámetro, asigna el valor por defecto
// function showProducts(categoryName = "") {
//   let productsToShow = products;

//   if (categoryName !== "") {
//     productsToShow = products.filter(
//       (product) => product.category === categoryName
//     );
//   }

//   const categoryNode = document.getElementById("categoryName");
//   categoryNode.innerText = categoryName.toUpperCase();

//   /*productList*/
//   const productList = document.getElementById("productList");
//   productList.innerHTML = "";
//   productsToShow.forEach((product) => {
//     const { image, title, price } = product;
//     const div = document.createElement("div");
//     div.classList.add("product");
//     div.innerHTML = `<img src="${image}">
//         <div class="productInfo">
//             <div class="productName">
//                ${title}
//             </div>
//             <br>
//             <span class="productPrice">
//                 Price:<b> $${price} </b>
//             </span> /
//             <span class="productRate">
//                 Rate: <b> ${product.rating.rate} </b>
//             </span>

//         </div>
//         <button class="addToList" onclick="addProduct('${product.id}')">
//             Agregar al Carrito
//         </button>
//         `;

//     productList.appendChild(div);
//   });
// }

// function addProduct(idProducto) {
//   const producto = products.find((element) => element.id == idProducto);
//   carrito.productos.push(producto);
//   calcularTotal();
//   showCarrito();
// }

// function showCarrito() {
//   const divLista = document.getElementById("productsInCart");
//   divLista.innerHTML = "";
//   carrito.productos.forEach((product) => {
//     const nodo = document.createElement("div");
//     nodo.classList.add("productInList");
//     nodo.innerHTML = ` <div class="productImg">
//                             <img src="${product.image}">
//                             </div>
//                             <div class="productName">
//                                 ${product.title}
//                             </div>
//                             <div class="producPrice">
//                                 <b>$ ${product.price} </b>
//                             </div>`;

//     divLista.appendChild(nodo);
//   });
// }

// function calcularTotal() {
//   const divLista = document.getElementById("total");
//   divLista.innerHTML = "";
//   carrito.productos.forEach((product) => {
//     obtenerTotal = function () {
//       const total = product.price;
//       return total;
//     };

//     total += obtenerTotal();
//     const nodo = document.createElement("div");
//     nodo.classList.add("producPrice");
//     nodo.innerHTML = `
//                             <div class="producPrice">
//                                 <b> Total: $  ${product.price}  </b>
//                             </div>`;

//     divLista.appendChild(nodo);
//   });
// }
// function saludarConSweetAlert() {
//   const boton = document.getElementById("btnSweet");
//   boton.addEventListener("click", () => {
//     Swal.fire({
//       title: "¡Hola, a todos!",
//       text: "Esto es un saludo con Sweet Alert",
//       icon: "error",
//       confirmButtonText: "¡Está muy Piola!",
//     });
//   });
// }
// function getProductos() {
//   const mostrar = document.getElementById("getproductos");
//   mostrar.addEventListener("click", () => {
//     fetch("../productos.json")
//       .then((resp) => resp.json())
//       .then((data) => console.log(data));
//   });
// }
// class Operandos {
//   constructor(price1, price2) {
//     this.price1 = price1;
//     this.price2 = price2;
//   }
// }
// const precios = new Operandos(53021, 34004);

// sumar(precios);
// function sumar({ price1, price2 }) {
//   alert(price1 + price2);
// }
function getProductos() {
  //   const mostrar = document.getElementById("getproductos");
  //   mostrar.addEventListener("click", () => {
  fetch("/productos.json")
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((element) => {
        const elementos = document.getElementById("elements");
        const card = document.createElement("div");
        card.setAttribute("class", "productos");
        const et1 = document.createElement("h4");
        et1.innerText = element.nombre;
        et1.setAttribute("class", "nombre");
        const et2 = document.createElement("h6");
        et2.innerText = element.categoria;
        et2.setAttribute("class", "categoria");
        const et3 = document.createElement("img");
        et3.src = element.foto;
        et3.setAttribute("class", "foto");
        const et4 = document.createElement("h4");
        et4.innerText = element.precio;
        et4.setAttribute("class", "precio");
        const btnAgregar = document.createElement("button");
        btnAgregar.innerText = "Agregar al carrito";
        btnAgregar.setAttribute("id", element.id);
        btnAgregar.setAttribute("onclick", "agregarCarrito(this)");
        // btnAgregar.onclick(agregarCarrito(this.element.id));
        card.appendChild(et3);
        card.appendChild(et1);
        card.appendChild(et2);
        card.appendChild(et4);
        elementos.appendChild(card);
        card.appendChild(btnAgregar);
      });
    });
  //   console.log("Hola");
}
getProductos();

let productos = [];
function agregarCarrito(comp) {
  let id = comp.id;
  console.log(id);
  let prod = [];
  fetch("/productos.json")
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((item) => {
        // prod.push(item);
        // prod.filter(() => item.id === id);
        // console.log(prod);
        let encontrado = item.find(() => item.id === id);
        console.log(encontrado);
      });
    });
}
