const shayaris = [
    "Even the silence of the night has a story to tell.",
    "Pain makes you stronger, tears make you braver.",
    "Lost in thoughts, found in words.",
    "Some memories never fade, no matter how much time passes."
];

const sadShayaris = [
    "The saddest part of love is saying goodbye.",
    "Tears are words the heart can't express.",
    "The stars witness my pain every night.",
    "A smile hides thousands of unspoken words."
];

function getRandomShayari() {
    return shayaris[Math.floor(Math.random() * shayaris.length)];
}

function getSadShayari() {
    return sadShayaris[Math.floor(Math.random() * sadShayaris.length)];
}

document.getElementById('random-shayari').innerText = getRandomShayari();
document.getElementById('sad-shayari').innerText = getSadShayari();
