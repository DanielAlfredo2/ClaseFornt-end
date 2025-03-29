document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click",/*Funcion*/() => {
        const letter = key.textContent // Obtiene la letra del div
        const audio = new Audio(`audio/${letter}.wav`); // Ruta del sonido
        audio.play();
    });
});

document.addEventListener("keydown", (event)=> { 
    const key = event.key.toUpperCase(); // Obtiene la letra del evento
    const audio = new Audio(`audio/${key}.wav`); // Ruta del sonido
    audio.play();
});
