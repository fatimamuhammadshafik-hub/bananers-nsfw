const trustBtn = document.getElementById("trustBtn");
const faceBtn = document.getElementById("faceBtn");

const stage1 = document.getElementById("stage1");
const stage2 = document.getElementById("stage2");

const scene = document.getElementById("scene");
const music = document.getElementById("music");

trustBtn.addEventListener("click", () => {
    stage1.classList.add("hidden");
    stage2.classList.remove("hidden");
});

faceBtn.addEventListener("click", () => {
    stage2.classList.add("hidden");
    scene.classList.remove("hidden");

    music.play().catch(() => {
        console.log("Audio blocked");
    });
});