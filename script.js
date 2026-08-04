/* ======================================
   PREMIUM BIRTHDAY WEBSITE V2
====================================== */

/* ===========================
ELEMENT
=========================== */

const loader = document.getElementById("loader");

const music = document.getElementById("bgMusic");

const openGift = document.getElementById("openGift");

const giftBox = document.getElementById("giftBox");

const envelope = document.getElementById("envelope");

const readLetter = document.getElementById("readLetter");

const letterSection = document.getElementById("letterSection");

const typewriter = document.getElementById("typewriter");

const musicBtn = document.getElementById("musicBtn");

const backTop = document.getElementById("backTop");

const foreverBtn = document.getElementById("foreverBtn");

/* ===========================
LOADER
=========================== */

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},2500);

});

/* ===========================
OPEN GIFT
=========================== */

openGift.addEventListener("click",()=>{

music.volume=.5;

music.play().catch(()=>{});

document.querySelector(".gift-section").scrollIntoView({

behavior:"smooth"

});

startConfetti();

});

/* ===========================
GIFT BOX
=========================== */

giftBox.addEventListener("click",()=>{

giftBox.classList.toggle("open");

setTimeout(()=>{

document.querySelector(".envelope-section").scrollIntoView({

behavior:"smooth"

});

},600);

});

/* ===========================
ENVELOPE
=========================== */

envelope.addEventListener("click",()=>{

envelope.classList.toggle("open");

});

/* ===========================
LETTER
=========================== */

const message=`

Happy Birthday Sayang ❤️

Hari ini adalah hari yang spesial.

Aku berharap semua doa yang kamu
panjatkan bisa satu per satu menjadi nyata.

Terima kasih sudah selalu bertahan,
selalu mengerti,
dan selalu menjadi rumah
untuk semua cerita aku.

Walaupun sekarang kita LDR,
aku percaya suatu hari nanti
jarak ini hanya akan menjadi cerita.

Semoga kamu selalu sehat,
bahagia,
murah rezeki,
dan selalu tersenyum.

Aku sayang kamu lebih dari
yang bisa dijelaskan oleh kata-kata.

❤️
`;

let index=0;

function typeEffect(){

if(index<message.length){

typewriter.innerHTML+=message.charAt(index);

index++;

setTimeout(typeEffect,40);

}

}

readLetter.addEventListener("click",()=>{

letterSection.style.display="flex";

letterSection.scrollIntoView({

behavior:"smooth"

});

typewriter.innerHTML="";

index=0;

typeEffect();

});

/* ===========================
MUSIC BUTTON
=========================== */

let playing=true;

musicBtn.addEventListener("click",()=>{

if(playing){

music.pause();

musicBtn.innerHTML="🔇";

}else{

music.play();

musicBtn.innerHTML="🎵";

}

playing=!playing;

});
/* ======================================
   LIGHTBOX
====================================== */

const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = photo.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

/* ======================================
   FLOATING HEARTS
====================================== */

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 400);

/* ======================================
   QUOTES SLIDER
====================================== */

const quotes = document.querySelectorAll(".quote");

let quoteIndex = 0;

setInterval(() => {

    quotes[quoteIndex].classList.remove("active");

    quoteIndex++;

    if (quoteIndex >= quotes.length) {

        quoteIndex = 0;

    }

    quotes[quoteIndex].classList.add("active");

}, 3500);

/* ======================================
   LOVE COUNTER
====================================== */

/*
Ubah tanggal ini menjadi tanggal jadian kalian
Format:
YYYY-MM-DDTHH:MM:SS
*/

const startDate = new Date("2026-08-05T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / 86400000);

    const hours = Math.floor(diff / 3600000) % 24;

    const minutes = Math.floor(diff / 60000) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("dayCount").textContent = days;

    document.getElementById("hourCount").textContent = hours;

    document.getElementById("minuteCount").textContent = minutes;

    document.getElementById("secondCount").textContent = seconds;

}

setInterval(updateCounter, 1000);

updateCounter();

/* ======================================
   BACK TO TOP
====================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ======================================
   CURSOR GLOW
====================================== */

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", e => {

    glow.style.left = (e.clientX - 20) + "px";

    glow.style.top = (e.clientY - 20) + "px";

});

/* ======================================
   SCROLL REVEAL
====================================== */

const revealItems = document.querySelectorAll(

".glass-card,.photo,.timeline-item,.counter-card,.love-card,.letter-card"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

revealItems.forEach(item => {

    item.classList.add("fade");

    observer.observe(item);

});

/* ======================================
   FOREVER BUTTON
====================================== */

foreverBtn.addEventListener("click", () => {

    alert("Aku akan selalu memilih kamu. ❤️");

    startConfetti();

});

/* ======================================
   CONFETTI
====================================== */

const canvas = document.getElementById("confetti");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});

let confettiPieces = [];

function startConfetti() {

    confettiPieces = [];

    for (let i = 0; i < 180; i++) {

        confettiPieces.push({

            x: Math.random() * canvas.width,

            y: -20,

            r: Math.random() * 5 + 3,

            speed: Math.random() * 5 + 2,

            color: [

                "#ff4fa3",

                "#ff8ec9",

                "#ffd4ea",

                "#ffffff"

            ][Math.floor(Math.random() * 4)]

        });

    }

    animateConfetti();

}

function animateConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {

        ctx.beginPath();

        ctx.fillStyle = p.color;

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fill();

        p.y += p.speed;

    });

    confettiPieces = confettiPieces.filter(p => p.y < canvas.height + 30);

    if (confettiPieces.length > 0) {

        requestAnimationFrame(animateConfetti);

    }

}