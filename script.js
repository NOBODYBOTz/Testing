document.addEventListener("DOMContentLoaded", function () {
    const shayaris = [
        "The silent echoes of lost words linger in the night.",
        "A shadow never leaves, but it never speaks.",
        "Some stories are written in silence, never to be read."
    ];
    document.getElementById("shayari").textContent = shayaris[Math.floor(Math.random() * shayaris.length)];
});
