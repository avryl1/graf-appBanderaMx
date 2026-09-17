// ===============================
// COLOR VERDE
// ===============================

const tonoVerde = document.getElementById("tonoVerde");
const saturacionVerde = document.getElementById("saturacionVerde");
const luminosidadVerde = document.getElementById("luminosidadVerde");

const colorVerde = document.getElementById("colorVerde");
const hexVerde = document.getElementById("hexVerde");


// ===============================
// COLOR ROJO
// ===============================

const tonoRojo = document.getElementById("tonoRojo");
const saturacionRojo = document.getElementById("saturacionRojo");
const luminosidadRojo = document.getElementById("luminosidadRojo");

const colorRojo = document.getElementById("colorRojo");
const hexRojo = document.getElementById("hexRojo");


// ===============================
// CONVERTIR HSL A HEX
// ===============================

function hslToHex(h, s, l) {

    s = s / 100;
    l = l / 100;

    const k = n => (n + h / 30) % 12;

    const a = s * Math.min(l, 1 - l);

    const f = n =>
        l - a * Math.max(
            -1,
            Math.min(
                k(n) - 3,
                Math.min(9 - k(n), 1)
            )
        );

    const r = Math.round(255 * f(0));
    const g = Math.round(255 * f(8));
    const b = Math.round(255 * f(4));

    return "#" +
        [r, g, b]
            .map(x => x.toString(16).padStart(2, "0"))
            .join("");
}


// ===============================
// ACTUALIZAR COLOR VERDE
// ===============================

function actualizarVerde() {

    const h = Number(tonoVerde.value);
    const s = Number(saturacionVerde.value);
    const l = Number(luminosidadVerde.value);

    const hex = hslToHex(h, s, l);

    colorVerde.style.backgroundColor = hex;

    hexVerde.textContent = hex.toUpperCase();

    document.querySelector(".verde-circulo").style.backgroundColor = hex;

    actualizarSlider(tonoVerde);
    actualizarSlider(saturacionVerde);
    actualizarSlider(luminosidadVerde);
}


// ===============================
// ACTUALIZAR COLOR ROJO
// ===============================

function actualizarRojo() {

    const h = Number(tonoRojo.value);
    const s = Number(saturacionRojo.value);
    const l = Number(luminosidadRojo.value);

    const hex = hslToHex(h, s, l);

    colorRojo.style.backgroundColor = hex;

    hexRojo.textContent = hex.toUpperCase();

    document.querySelector(".rojo-circulo").style.backgroundColor = hex;

    actualizarSlider(tonoRojo);
    actualizarSlider(saturacionRojo);
    actualizarSlider(luminosidadRojo);
}


// ===============================
// ACTUALIZAR VISUAL DEL SLIDER
// ===============================

function actualizarSlider(slider) {

    const porcentaje =
        ((slider.value - slider.min) /
        (slider.max - slider.min)) * 100;

    slider.style.background =
        `linear-gradient(
            to right,
            #63b849 0%,
            #63b849 ${porcentaje}%,
            #e5e5e5 ${porcentaje}%,
            #e5e5e5 100%
        )`;
}


// ===============================
// EVENTOS DEL COLOR VERDE
// ===============================

tonoVerde.addEventListener("input", actualizarVerde);

saturacionVerde.addEventListener(
    "input",
    actualizarVerde
);

luminosidadVerde.addEventListener(
    "input",
    actualizarVerde
);


// ===============================
// EVENTOS DEL COLOR ROJO
// ===============================

tonoRojo.addEventListener("input", actualizarRojo);

saturacionRojo.addEventListener(
    "input",
    actualizarRojo
);

luminosidadRojo.addEventListener(
    "input",
    actualizarRojo
);


// ===============================
// INICIAR INTERFAZ
// ===============================

actualizarVerde();

actualizarRojo();