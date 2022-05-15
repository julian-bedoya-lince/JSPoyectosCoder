// Operadores
const condicion0 = 1 == "1";
console.log(condicion0); // True

const condicion1 = 1 === "1";
console.log(condicion1); // False

const condicion2 = 1 != 1;
console.log(condicion2); // False

const condicion3 = 1 !== "1";
console.log(condicion3); // True

const condicion4 = 2<10;
console.log(condicion4); // True

const condicion5 = 2>10;
console.log(condicion5); // Talse

const condicion6 = 2>=10;
console.log(condicion6); // Talse

const condicion7 = 2<=10;
console.log(condicion7); // True

const condicion8 = !condicion7;
console.log(condicion8);

const condicion9 = condicion7 && condicion4 ;
console.log(condicion9); // True 

const condicion10 = condicion7 || condicion4 ;
console.log(condicion10); // True 

const condicion11 = condicion7 && condicion4 || condicion7 || condicion4
console.log(condicion10); // True 