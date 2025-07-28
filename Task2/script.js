document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") { 
    alert("⚠️ Please fill all fields!");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address!");
    return;
  }

  alert("✔️ Form submitted successfully!");
  this.reset();
});

const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Enter a task!");
  
  const li = document.createElement("li");
  li.innerHTML = `<span>${taskText}</span> <button class="remove">❌</button>`;
  
  li.querySelector(".remove").addEventListener("click", () => li.remove());
  
  taskList.appendChild(li);
  taskInput.value = "";
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});
