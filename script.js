/* ==========================================
   PINK LUXURY BIRTHDAY
   SCRIPT PART 1
========================================== */

// ===========================
// ELEMENT
// ===========================

const loader = document.getElementById("loader");

const openGift = document.getElementById("openGift");

const music = document.getElementById("bgMusic");

const envelope = document.getElementById("envelope");

const readLetter = document.getElementById("readLetter");

const letterSection = document.getElementById("letterSection");

const typewriter = document.getElementById("typewriter");

const heartsContainer = document.getElementById("hearts-container");

const loveButton = document.getElementById("loveButton");

// ===========================
// LOADING
// ===========================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 3000);

});

// ===========================
// OPEN GIFT
// ===========================

openGift.addEventListener("click", () => {

music.volume = 0.5;

music.play().catch(err => {
    console.log(err);
});
   
 document.querySelector(".welcome").scrollIntoView({

        behavior: "smooth"

    });

    startConfetti();

});

// ===========================
// ENVELOPE
// ===========================

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

});

// ===========================
// LETTER
// ===========================

const message = `

Happy Birthday Sayang ❤️

Semoga di umur yang baru ini,
semua impian kamu satu per satu
bisa terwujud.

Terima kasih sudah menjadi
orang yang selalu ada buat aku.

Walaupun sekarang kita LDR,
aku percaya semua perjuangan ini
akan terbayar dengan indah.

Semoga kamu selalu sehat,
bahagia,
murah rezeki,
dan selalu dikelilingi
orang-orang baik.

Aku sayang banget sama kamu.

❤️

`;

readLetter.addEventListener("click", () => {

    letterSection.style.display = "flex";

    letterSection.scrollIntoView({

        behavior: "smooth"

    });

    typewriter.innerHTML = "";

    writeLetter();

});

// ===========================
// TYPEWRITER
// ===========================

let index = 0;

function writeLetter() {

    if (index < message.length) {

        typewriter.innerHTML += message.charAt(index);

        index++;

        setTimeout(writeLetter, 45);

    }

}
/* ==========================================
   SCRIPT PART 2
==========================================*/

// ===========================
// LIGHTBOX
// ===========================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// ===========================
// FLOATING HEARTS
// ===========================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 350);

// ===========================
// CONFETTI
// ===========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let pieces = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function startConfetti() {

    pieces = [];

    for (let i = 0; i < 180; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y: -20,

            r: Math.random() * 6 + 3,

            speed: Math.random() * 5 + 2,

            color: [
                "#ff4fa3",
                "#ff85c2",
                "#ffd4e8",
                "#ffffff"
            ][Math.floor(Math.random() * 4)]

        });

    }

    animateConfetti();

}

function animateConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fill();

        p.y += p.speed;

    });

    pieces = pieces.filter(p => p.y < canvas.height + 20);

    if (pieces.length > 0) {

        requestAnimationFrame(animateConfetti);

    }

}

// ===========================
// SCROLL REVEAL
// ===========================

const reveals = document.querySelectorAll(
".glass-card,.gallery-item,.timeline-item,.love-card,.letter-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");
            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

reveals.forEach(item => {

    item.classList.add("fade-up");

    observer.observe(item);

});

// ===========================
// LOVE BUTTON
// ===========================

loveButton.addEventListener("click", () => {

    alert("Aku akan selalu memilih kamu. ❤️");

    startConfetti();

});

// ===========================
// ESC LIGHTBOX
// ===========================

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

});