const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) return;
  addTask(input.value);
  input.value = "";
});

const addTask = (text) => {
  const task = document.createElement("li");
  task.innerHTML = `<span>${text}</span> <button>Delete</button>`;
  list.appendChild(task);
  task.querySelector("button").addEventListener("click", () => {
    task.remove();
  });
  task.addEventListener("click", () => {
    task.classList.toggle("completed");
  });
};