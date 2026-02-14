const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// YES button magic
yesBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    createHearts();
});

// Hearts, balloons & flowers
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const emojis = ["❤️", "💖", "💘", "🌹", "🎈", "🌸"];
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 200);
}
