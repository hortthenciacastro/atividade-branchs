let tasks = [];

function addTask() {
  const title = document.getElementById("task-title").value;
  const desc = document.getElementById("task-desc").value;

  if (!title.trim()) return alert("Digite o título da tarefa.");

  tasks.push({ title, desc, done: false });

  console.log(tasks); // temporário para ver no console

  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
}
