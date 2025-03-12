document.addEventListener("DOMContentLoaded", function () {
    const particlesEnabled = localStorage.getItem("particlesEnabled") !== "false";

    if (particlesEnabled) {
        startParticles();
    }
});

// Particle Effect Script
let particleCanvas = document.getElementById("particles-canvas");
let ctx = particleCanvas.getContext("2d");
let particlesArray = [];
let animationFrame;

function startParticles() {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    createParticles();
    animateParticles();
}

function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

function createParticles() {
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
        particlesArray.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    for (let particle of particlesArray) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1;

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    }
    animationFrame = requestAnimationFrame(animateParticles);
}
