const tasks = [];
//    le DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// la Function pour ajouter une tâche
function addTask() {
  // trim() pour retirer les espace inutile
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    console.log(`Tâche ajoutée: "${taskText}"`, tasks);

    // Pour mettre à jour l'affichage
    displayTasks();

    // Pour vider le champ de saisie
    taskInput.value = "";
  }
}

// La Function pour supprimer une tâche
function deleteTask(index) {
  // Pour SUPPRIMER la tâche du tableau
  // splice() pour retirer oui ajouter un element au tableau
  // ici un rajoute au tableau tasks, l'index en position 1
  tasks.splice(index, 1);
  console.log(`Tâche à l'index ${index} supprimée`, tasks);

  // Pour mettre à jour l'affichage
  displayTasks();
}

// a ameliorer, tout refaire depuis le debut sur la partie du bouton modifier.
function modifTask(index) {
  const replaceTask = prompt(
    "Il est l'heure de modifier ton message: ",
    tasks[index]
  );
  tasks.replace(replaceTask, 1);
  console.log(`Tâche à l'index ${index} modifiée`, tasks);

  displayTasks();
}

// La Function pour afficher les tâches
function displayTasks() {
  // Pour vider la liste actuelle
  taskList.innerHTML = "";

  // Pour parcourir le tableau et créer les cartes
  tasks.forEach((task, index) => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";

    // Pour le texte de la tâche
    const taskText = document.createElement("span");
    taskText.textContent = task;

    // Pour le bouton de suppression
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "supprimer";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    // Pour le bouton de suppression
    const modif = document.createElement("modif");
    modif.className = "modif-btn";
    modif.textContent = "modifier";
    modif.addEventListener("click", () => modifTask(index));

    // Pour ajouter des éléments à la carte
    taskCard.appendChild(taskText);
    taskCard.appendChild(deleteBtn);
    taskCard.appendChild(modif);

    // Pour ajouter la carte à la liste
    taskList.appendChild(taskCard);
  });
}

// Pour lancer l'événement du bouton Ajouter
addButton.addEventListener("click", addTask);

// Pour lancer l'événement de la touche Entrée
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});



