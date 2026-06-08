// ====================================
// BOTÓN ABRIR REGALO
// ====================================

const openGift = document.getElementById("openGift");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");

openGift.addEventListener("click", () => {

    welcomeScreen.style.display = "none";
    mainContent.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ====================================
// CORAZONES FLOTANTES
// ====================================

const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 10 + 8 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 18000);
}

setInterval(createHeart, 500);

// ====================================
// CARTA ANIMADA
// ====================================

const letterText = `

Mi vida!!!! Tdo esto es para tí  y por los putos bloqueos no puedo hacer nada xD bueno aunque si estuve pensando en que hacer pero de todas maneras aunque no te pueda ver o estar a tu lado en tanto tiempo quiero que me recuerdes con los peluches, el chayyane jajajaja Me encanta estar contigo cada momento, cada hora, acada segundo. Siempre agradezco el poder estar al lado tuyo, aunque a veces no sepamos que decir o estemos en silencio. Perfiero mil veces estar sentado a tu lado sin decir nada a que estar lejos de ti....
Eres mi mundo entero <3 mi cuchurrumina, Asi como este año puedo aunque sea pasar contigo tu cumpleaños (si dios quiere de manera presencial) espero también poder pasar muchos más años a tu lado y acompañarte en todas nuestras fechas importantes mi cielo :3 Hacemos la cuenta regresiva para tus cumple años número 18 :) Waaaaaaa ya será mayor de edad mi amor jajajaja ambos tendremos 18, q riko jajajaja espero estes emocionada por tus cumple y que estos días la pases super hermoso si? TE AMO UN TRILLÓN!!!

Mi Cuchurrumina ❤️

Quizás la distancia a veces intente complicar las cosas,
pero nunca podrá cambiar lo que siento por ti.

Desde aquel 17 de diciembre de 2025,
mi vida cambió para mejor.

Todavía recuerdo la fuente de la facultad,
los nervios, las dudas y las ganas inmensas
de decirte lo mucho que me importabas.

Y aunque no siempre podamos estar juntos,
cada día encuentro una razón más para amarte.

Gracias por tu cariño.
Gracias por tu paciencia.
Gracias por ser tú.

Hoy solo quiero que sepas algo:

Te amo muchísimo.

Y volvería a elegirte una y mil veces más.

❤️

— Tu nubecito :3

`;

const typedLetter =
document.getElementById("typed-letter");

let index = 0;

function typeLetter() {

    if(index < letterText.length){

        typedLetter.innerHTML +=
        letterText.charAt(index);

        index++;

        setTimeout(typeLetter, 35);
    }
}

setTimeout(typeLetter, 1000);

// ====================================
// CONTADOR RELACIÓN
// ====================================

const startDate =
new Date("2025-12-17T00:00:00");

function updateRelationshipCounter() {

    const now = new Date();

    const difference =
    now - startDate;

    const days =
    Math.floor(
    difference / (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
    (difference %
    (1000 * 60 * 60 * 24))
    /
    (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
    (difference %
    (1000 * 60 * 60))
    /
    (1000 * 60)
    );

    const seconds =
    Math.floor(
    (difference %
    (1000 * 60))
    /
    1000
    );

    document.getElementById("days")
    .textContent = days;

    document.getElementById("hours")
    .textContent = hours;

    document.getElementById("minutes")
    .textContent = minutes;

    document.getElementById("seconds")
    .textContent = seconds;
}

setInterval(
updateRelationshipCounter,
1000
);

updateRelationshipCounter();

// ====================================
// CUENTA REGRESIVA CUMPLEAÑOS
// ====================================

// CAMBIA ESTA FECHA
const birthday =
new Date("2026-06-16T00:00:00");

function updateBirthdayCountdown() {

    const now = new Date();

    const difference =
    birthday - now;

    if(difference <= 0){

        document.getElementById(
        "birthdayCountdown"
        ).innerHTML =
        "🎂 ¡Hoy es tu cumpleaños! ❤️";

        return;
    }

    const days =
    Math.floor(
    difference /
    (1000 * 60 * 60 * 24)
    );

    document.getElementById(
    "birthdayCountdown"
    ).innerHTML =
    `Faltan ${days} días para tu cumpleaños ❤️`;
}

setInterval(
updateBirthdayCountdown,
1000
);

updateBirthdayCountdown();

// ====================================
// CORAZONES AL HACER CLICK
// ====================================

document.addEventListener(
"click",
function(e){

    const heart =
    document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left =
    e.clientX + "px";

    heart.style.top =
    e.clientY + "px";

    heart.style.fontSize = "25px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transition =
    "all 1s ease";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
        "translateY(-80px)";

        heart.style.opacity = "0";

    }, 10);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});