const capUnoBTN = document.querySelector(".capitulo__1__btn");
const capDosBTN = document.querySelector(".capitulo__2__btn");
const capTresBTN = document.querySelector(".capitulo__3__btn");

const capUnoIMG = document.querySelector(".capitulo__1__capitulo__img");
const capDosIMG = document.querySelector(".capitulo__2__capitulo__img");
const capTresIMG = document.querySelector(".capitulo__3__capitulo__img");

const capUnoTranscription = document.querySelector(".capitulo__1__capitulo__transcripcion");
const capDosTranscription = document.querySelector(".capitulo__2__capitulo__transcripcion");
const capTresTranscription = document.querySelector(".capitulo__3__capitulo__transcripcion");

const chapters = document.querySelectorAll(".capitulo");

let capUnoImageOpen = true;
let capDosImageOpen = true;
let capTresImageOpen = true;

let hiddenContent = true;

const autor = document.querySelector(".autor__name");
const spans = document.querySelectorAll(".autor__span");
const mensaje = document.querySelector(".autor__mensaje");

capUnoBTN.addEventListener("click", ()=> {
    capUnoIMG.classList.toggle("capitulo__img__show");
    capUnoTranscription.classList.toggle("capitulo__transcripcion__show");
    capUnoImageOpen = !capUnoImageOpen;
    capUnoBTN.textContent = capUnoImageOpen ? "Mostrar transcripción" : "Mostrar manuscrito";
});

capDosBTN.addEventListener("click", ()=> {
    capDosIMG.classList.toggle("capitulo__img__show");
    capDosTranscription.classList.toggle("capitulo__transcripcion__show");
    capDosImageOpen = !capDosImageOpen;
    capDosBTN.textContent = capDosImageOpen ? "Mostrar transcripción" : "Mostrar manuscrito";
});

capTresBTN.addEventListener("click", ()=> {
    capTresIMG.classList.toggle("capitulo__img__show");
    capTresTranscription.classList.toggle("capitulo__transcripcion__show");
    capTresImageOpen = !capTresImageOpen;
    capTresBTN.textContent = capTresImageOpen ? "Mostrar transcripción" : "Mostrar manuscrito";
});

function activar() {
    spans.forEach(span => {
        span.classList.add("show__span");
    });

    autor.addEventListener("click", ()=> {
        mensaje.classList.add("autor__mensaje__show");

        chapters.forEach(chapter => {
            chapter.classList.add("capitulo__showed");
        });

        setTimeout(() => {
            mensaje.classList.remove("autor__mensaje__show");
        }, 5000);
    });

    window.removeEventListener("scroll", comprobarScroll);
}

function comprobarScroll() {
    if (window.scrollY >= window.innerHeight * 4) {
        activar();
    }
}

window.addEventListener("scroll", comprobarScroll);