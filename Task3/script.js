const questions = [
  {
    q: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "HighText Machine Language", "Hyper Transfer Mark Language"],
    answer: 0
  },
  {
    q: "What does CSS control?",
    options: ["Styling of a web page", "Data storage", "Backend operations"],
    answer: 0
  },
  {
    q: "Which is used to add interactivity to a page?", 
    options: ["CSS", "HTML", "JavaScript"],
    answer: 2
  },
  {
    q: "Which tag is used for inserting a line break in HTML?",
    options: ["<break>", "<br>", "<lb>"],
    answer: 1
  },
  {
    q: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size"],
    answer: 2
  },
];


let current = 0;

function displayQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.q;
  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (index === q.answer) {
        btn.style.backgroundColor = "#28a745";
        alert("✅ Correct!");
      } else {
        btn.style.backgroundColor = "#dc3545";
        alert("❌ Wrong! Try the next.");
      }
    };
    options.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    displayQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "<h3>🎉 You've completed the quiz!</h3>";
  }
}

window.onload = displayQuestion;

function fetchJoke() {
  const jokeEl = document.getElementById("joke");
  jokeEl.innerText = "Loading joke...";
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(res => res.json())
    .then(data => {
      jokeEl.innerText = `${data.setup} — ${data.punchline}`;
    })
    .catch(() => {
      jokeEl.innerText = "Oops! Couldn't fetch a joke.";
    });
}
