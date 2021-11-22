// 1

let btnCloner = document.querySelector("#exo-copy-img>button");
let divMignon = document.querySelector("#mignon-container");

btnCloner.addEventListener("click", () => {
    let img = document.createElement("img");
    img.setAttribute("width", "200")
    img.setAttribute("src", "../images/mignons.gif")
    divMignon.appendChild(img)
})

// 2

let imgSupprimer = document.querySelectorAll("#mignon2-container>img");
let divSupprimer = document.querySelector("#mignon2-container");
let sauvegarde = divSupprimer.innerHTML

for (let i = 0; i < imgSupprimer.length; i++) {
    imgSupprimer[i].addEventListener("click", () => {
        imgSupprimer[i].remove()
        if (divSupprimer.children.length === 0) {
            setTimeout(() => {
                divSupprimer.innerHTML = sauvegarde
            }, 1000);
        }
    })
}


// 3

let ul = document.querySelector("ul")
let ilyasse = document.createElement("li");
ilyasse.innerText = "li num 2"
let li3 = document.querySelectorAll("ul>li")[1]
ul.insertBefore(ilyasse, li3);


// 4

let input = document.querySelector("#exo-li-from-input input");
let submit = document.querySelector("#exo-li-from-input button");
let ul_add = document.querySelector("#exo-li-from-input ul");

submit.addEventListener("click", () => {
    if (input.value === "") {
        return;
    } else {
        let li = document.createElement("li");
        li.innerText = input.value;
        ul_add.appendChild(li);
        input.value = ""
    }
})

let order = document.querySelectorAll("button")[2]
let x = 0;
var copieArray = ul_add.innerHTML

order.addEventListener("click", () => {
    if (x === 0) {
        let li = document.querySelectorAll("#exo-li-from-input ul>li");
        let newArray = [].slice.call(li);
        newArray.sort(() => Math.random() - 0.5);
        ul_add.innerHTML = "";
        for (let i = 0; i < newArray.length; i++) {
            let liste = document.createElement("li");
            liste.innerText = newArray[i].innerText
            liste.style.color = "green"
            ul_add.appendChild(liste)
        }
        
    } else {
        ul_add.innerHTML = copieArray
    }
    x++;
});
