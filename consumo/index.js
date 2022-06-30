// URL a donde vamos hacer la petición
const url = "https://rickandmortyapi.com/api/character/1";
//   "https://rickandmortyapi.com/api";
// Utilizamos fecht para consumir la API y este se maneja por PROMESAS.
fetch(url)
  //   // Si al consumir la APInos va bien entonces pasa al siguiente paso y lo convertimos en JSON
  .then((response) => response.json())
  //   //   Luego de tenerlo en JSON lo asignamos en data y lo imprimimos en consola
  .then((data) => {
    // for(let i of data[])

    let element = document.getElementById("elem");
    element.innerHTML = `
     <img src="${data.image}"/>
     <p>${data.id}</p>
     <p>${data.name}</p>
     <p>${data.status}</p>
     <p>${data.species}</p>
     <p>${data.type}</p>
     <p>${data.gender}</p>
     `;
    console.log(data);
  });

// const response = await fetch(url);
// const personajes = await response.json();
// console.log(personajes);
