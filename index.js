class Plantas {
constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = parseFloat(precio)
}
}

let arrayPlantas = []

let nombre = prompt("Ingresa tu nombre")

if (nombre != " ") {
alert("Bienvenido/a " + nombre)
} else {
alert("No ingresaste ningun nombre")
}

let pregunta = prompt("¿Necesitas flores para tu jardin?")

while (pregunta == "si") {

const rosa = new Plantas("rosa", "800")
const tulipan = new Plantas("tulipan", "1000")
const girasol = new Plantas("girasol", "950")
const margarita = new Plantas("Margaritas", "700")

let producto = prompt("¿Que flor estas buscando?")

if (producto == "rosa") {
    alert("El precio es " + rosa.precio)
} else if (producto == "tulipan") {
    alert("El precio es " + tulipan.precio)
} else if (producto == "girasol") {
    alert("El precio es " + girasol.precio)
} else if (producto == "margarita") {
    alert("El precio es " + margarita.precio)
} else alert("no tenemos ese producto")

pregunta = prompt("¿Necesitas saber el precio de otra flor?")
}

const productos = [{ id: 1, nombre: "Rosa", precio: 800 },
                    { id: 2, nombre: "Tulipan", precio: 1000 },
                    { id: 3, nombre: "Girasol" , precio: 950},
                    { id: 4, nombre: "Margarita" , precio: 700}];

for (const producto of productos) {

let contenedor = document.createElement("div");

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p> Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;

document.body.appendChild(contenedor);

const button = document.createElement('button'); 

button.type = 'button'; 
button.innerText = 'Comprar'; 
document.body.appendChild(button);

button.addEventListener("click", respuestaClick);
function respuestaClick(){
    alert (producto.nombre + " añadido a tu compra")
 };

}
