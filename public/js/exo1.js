// 1

let button = document.getElementsByClassName("btn btn-primary")[0];
let span = document.getElementsByClassName("ml-4")[0]
let i = 0

const ajout = () => {
    i++;
    span.innerText = i;
}

button.addEventListener("click", ajout);


// 2

let carre = document.getElementById("square");

carre.addEventListener("click", () => {
    carre.classList.toggle("on");
    carre.classList.toggle("off");
});

// 3
let titre = document.querySelectorAll("h2");
let appuie = 0;

document.addEventListener("keypress", (e) => {
    if (e.key === "6" && appuie % 2 === 0) {
        for (let i = 0; i < titre.length; i++) {
            titre[i].innerText = `${i + 1}. ${titre[i].innerText}`
        }
    } else {
        for (let i = 0; i < titre.length; i++) {
            titre[i].innerText = titre[i].innerText.substr(3);
        }
    }
    appuie++;
})


// 4

let btn = document.getElementById("multi-click");
let click = 0;

btn.addEventListener("click", () => {
    click++;
    switch (click) {
        case 1:
            btn.style.borderRadius = "50%"
            break;
        case 2:
            btn.style.backgroundColor = "red"
            break;
        case 3:
            btn.style.borderRadius = "0%";
            btn.style.backgroundColor = "white";
            click = 0;
    }
})

// 5

let couleur = document.getElementById("pick-color");
let phrase = document.querySelector("#exo-set-color>p");

const paint = () => {
    phrase.style.color = couleur.value;
}

couleur.addEventListener("input", paint)