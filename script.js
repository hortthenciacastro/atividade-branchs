let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("completed");

    li.innerHTML = `
      <div>
        <strong>${task.title}</strong> - ${task.desc}
      </div>
      <div class="actions">
        <button onclick="toggleTask(${index})">✔️</button>
        <button onclick="editTask(${index})">✏️</button>
        <button onclick="removeTask(${index})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const title = document.getElementById("task-title").value;
  const desc = document.getElementById("task-desc").value;

  if (!title.trim()) return alert("Digite o título da tarefa.");

  tasks.push({ title, desc, done: false });
  saveTasks();
  renderTasks();

  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function removeTask(index) {
  if (confirm("Deseja remover esta tarefa?")) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

function editTask(index) {
  const newTitle = prompt("Novo título:", tasks[index].title);
  const newDesc = prompt("Nova descrição:", tasks[index].desc);

  if (newTitle !== null && newTitle.trim() !== "") {
    tasks[index].title = newTitle;
    tasks[index].desc = newDesc;
    saveTasks();
    renderTasks();
  }
}

// Inicializa ao carregar
renderTasks();
