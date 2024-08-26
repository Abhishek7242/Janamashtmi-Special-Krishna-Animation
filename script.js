
const flowerCount = 50; 
const flowerSymbols = ['🌸', '🌼', '💐', '🌺', '🌷']; 
const colors = ['#FF69B4', '#FFC0CB', '#FFB6C1', '#FF1493', '#FFB3B3']; 

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];

    flower.style.left = Math.random() * 100 + '%';

    const duration = Math.random() * 10 + 5;
    flower.style.animationDuration = `${duration}s`;

    const delay = Math.random() * 15;
    flower.style.animationDelay = `${delay}s`;


    flower.style.color = colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 16 + 16;
    flower.style.fontSize = `${size}px`;

    const initialX = Math.random() * 100 - 50; 
    flower.style.transform = `translateX(${initialX}px) rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(flower);
}

for (let i = 0; i < flowerCount; i++) {
    createFlower();
}
