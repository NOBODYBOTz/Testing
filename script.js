const shayariList = [
    "Pain makes you stronger, tears make you braver.",
    "A smile hides thousands of unspoken words.",
    "Even in darkness, a light always exists.",
    "Silence is the loudest scream of all.",
    "Broken hearts write the most beautiful poetry."
];

function loadRandomShayari() {
    const container = document.getElementById("shayari-container");
    const randomIndex = Math.floor(Math.random() * shayariList.length);
    container.innerHTML = `<p>${shayariList[randomIndex]}</p>`;
}
window.onload = loadRandomShayari;
