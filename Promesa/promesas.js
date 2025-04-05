const ingredientes = [];

const input = document.getElementById("ingrediente");
const btnAgre = document.getElementById("Agregar");
const btnComp = document.getElementById("Completar");
const img = document.getElementById("imagenBurger");
const texto = document.getElementById("tipoDeBurger");
// Evento para agregar ingrediente
btnAgre.addEventListener("click", () => {
    const valor = input.value.trim();

    if (valor) {
        ingredientes.push(valor.toLowerCase());
        alert(`Ingrediente "${valor}" agregado.`);
        input.value = "";
        input.focus();
    } else {
        alert("Escribe un ingrediente antes de agregar.");
    }
});

// Función simulando una promesa de preparación con `reject`
function prepararHamburguesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ingredientes.length === 0) {
                reject("No has agregado ningún ingrediente.");
            }

            // Lógica sencilla para determinar el tipo de hamburguesa
            let tipo = "Hamburguesa Personalizada";
            let imagen = "hamburguesa-personalizada.jpeg";

            if (ingredientes.includes("tocino")) {
                tipo = "Hamburguesa con Tocino";
                imagen = "hamburguesa-tocino.jpeg";
            }else if (ingredientes.includes("queso")) {
                tipo = "Hamburguesa con Queso";
                imagen = "hamburguesa-queso.jpg";
            }else if (ingredientes.includes("pollo")) {
                tipo = "Hamburguesa de Pollo";
                imagen = "hamburguesa-pollo.jpeg";
            }else if (ingredientes.includes("pescado")) {
                tipo = "Hamburguesa de Pescado";
                imagen = "hamburguesa-pescado.jpeg";
            }else if (ingredientes.includes("vegetales") && ingredientes.includes("lechuga")) {
                tipo = "Hamburguesa Vegana";
                imagen = "hamburguesa-vegana.jpeg";
            }else if (ingredientes.includes("pulpo") || ingredientes.includes("cebolla")) {
                tipo = "Hamburguesa pulpo";
                imagen = "hamburguesa-pulpo.jpeg";
            }

            resolve({ tipo, imagen });
        }, 2000); // Simula 2 segundos de espera
    });
}

// Evento para completar el pedido
btnComp.addEventListener("click", () => {
    if (ingredientes.length === 0) {
        alert("Agrega al menos un ingrediente.");
        return;
    }

    texto.textContent = "Preparando tu hamburguesa...";
    img.src = "";  // Limpiamos la imagen por si es necesario

    prepararHamburguesa()
        .then(({ tipo, imagen }) => {
            texto.textContent = tipo;
            // Verifica si la imagen existe antes de asignarla
            if (imagen && typeof imagen === "string") {
                img.src = imagen; // Asigna la imagen
            } else {
                console.error("Imagen no válida:", imagen);
                img.src = "error.jpg"; // Imagen por defecto de error si no se encuentra
            }
        })
        .catch((error) => {
            alert(`Error: ${error}`);
            texto.textContent = "Error al preparar la hamburguesa";
            img.src = "error.jpg"; // Imagen de error si la promesa falla
        });
});



            









// function ordenarHamburgesa(ingredientes) {
//     const hamburguesaPromesa = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if (ingredientes.includes('pulpo') || ingredientes.includes('cebolla')) {
//                 reject("😔lo lamentamos de momento no tenemos ese ingrediente😔");
//             }
//             resolve(`🍔 con ${ingredientes.join(',')}`);
//         }, 2000);
//     });
    
//     return hamburguesaPromesa;
// }

// function manejoError(erro){
//     console.log(erro);
// }

// let hamburguesaQuesoTosino = ordenarHamburgesa(["Tosino", "Queso"]).then(function(burger){
//     console.log(burger);
// });

// let hamburguesaPollo = ordenarHamburgesa(["Pollo"]).then(function(burger){
//     console.log(burger);
// });

// let hamburguesaPulpo = ordenarHamburgesa(["Pulpo", "cebolla", "tomate"]).then(function(burger){
//     console.log(burger);
// }).catch(manejoError);

// console.log("hamburgesaQuesoTosino");

// console.log("hamburgesaPollo");

// console.log("hamburgesaPulpo");

