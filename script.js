
const button = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

button.addEventListener("click", function () {
  surprise.classList.toggle("hidden");

  if (surprise.classList.contains("hidden")) {
    button.textContent = "اضغطي هنا يا إسراء 💌";
  } else {
    button.textContent = "بحبك يا إسراء ❤️";
  }
});

// قلوب متحركة
function createHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";
  heart.textContent = "♥";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 25) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 400);
