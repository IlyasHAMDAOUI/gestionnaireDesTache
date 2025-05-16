const texte = document.getElementById("texte");
const bouton = document.querySelector(`.bouton`);

console.log(texte.value);
let lancer= false;
// let nouveauMessage = prompt();

let tasks = [];

bouton.addEventListener("click", () => {
    document.body.style.backgroundColor="red";
    
});

tasks.push(texte.value);
console.log(bouton);
console.log(tasks[0]);