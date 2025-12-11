const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    const step = 55;

    for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    requestAnimationFrame(draw);
}
draw();

document.querySelectorAll(".more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const block = document.getElementById(btn.dataset.target);
        block.classList.toggle("hidden");
        btn.textContent = block.classList.contains("hidden") ? "more" : "less";
    });
});
