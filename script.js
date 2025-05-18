const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const tasks = [];

function addTask() {

  const taskText = taskInput.value.trim();

  if (taskText !== "") {

    // Ajouter la tâche au tableau
    
    tasks.push(taskText);
    console.log(`Tâche ajoutée: "${taskText}"`, tasks);

    // Mettre à jour l'affichage
    displayTasks();

    // Vider le champ de saisie
    taskInput.value = "";
  }
}

function displayTasks() {
  // Vider la liste actuelle
  taskList.innerHTML = "";

  // Parcourir le tableau et créer les cartes
  tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.setAttribute("class", "addBoutonStyle");
    taskCard.className = "task-card";
    taskCard.textContent = task;
    const suppBouton = document.createElement("div");
    suppBouton.setAttribute("class", "suppBoutonStyle");
    suppBouton.className = "supp-Button";
    
    taskList.appendChild(taskCard);
    suppBouton.appendChild(suppBouton);
  });
}

addButton.addEventListener("click", addTask);

// Écouteur d'événement pour la touche Entrée
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
