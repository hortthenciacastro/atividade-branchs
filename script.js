function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";
    li.innerHTML = `
      <div>
        <strong>${task.title}</strong> - ${task.desc}
      </div>
      <div>
        <button onclick="toggleTask(${index})"></button>
        <button onclick="editTask(${index})"></button>
        <button onclick="removeTask(${index})"></button>
      </div>
    `;

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("completed");

    li.innerHTML = `
      <div>
        <strong>${task.title}</strong> - ${task.desc}
      </div>
      <button onclick="toggleTask(${index})">✔️</button>
    `;
    list.appendChild(li);
  });
  
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function editTask(index) {
  const newTitle = prompt("Novo título:", tasks[index].title);
  const newDesc = prompt("Nova descrição:", tasks[index].desc);

  if (newTitle !== null && newTitle.trim() !== "") {
    tasks[index].title = newTitle;
    tasks[index].desc = newDesc;
    renderTasks();
 }
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
saveTasks();


}
