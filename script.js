function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);
  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function answerFirst(button, correct) {
  const feedback = document.getElementById("feedback1");

  if (correct) {
    button.style.background = "#e2f5e7";
    button.style.borderColor = "#72b783";
    feedback.textContent = "¡Correcto! Sabía que esa no te la iba a ganar 😌🪨";

    setTimeout(() => {
      createRoseRain();
      showScreen("roses");
    }, 900);
  } else {
    button.style.background = "#ffe2e8";
    button.style.borderColor = "#e67b98";
    feedback.textContent = "Mmm... piensa un poquito más. Tú puedes 💗";
  }
}

function createRoseRain() {
  const container = document.getElementById("roseRain");
  container.innerHTML = "";

  const roses = ["🌹", "🌹", "🌹", "🌸", "🌹", "🌷"];

  for (let i = 0; i < 55; i++) {
    const rose = document.createElement("div");
    rose.className = "falling-rose";
    rose.textContent = roses[Math.floor(Math.random() * roses.length)];
    rose.style.left = Math.random() * 100 + "%";
    rose.style.fontSize = (18 + Math.random() * 28) + "px";
    rose.style.animationDuration = (3 + Math.random() * 5) + "s";
    rose.style.animationDelay = Math.random() * 2.5 + "s";
    rose.style.transform = `rotate(${Math.random() * 90 - 45}deg)`;
    container.appendChild(rose);
  }
}

function answerSecond(button, correct) {
  const feedback = document.getElementById("feedback2");

  if (correct) {
    button.style.background = "#e2f5e7";
    button.style.borderColor = "#72b783";
    feedback.textContent = "¡Exacto! Escala de Mohs. 10/10 otra vez 😌✨";

    setTimeout(() => showScreen("question3"), 1100);
  } else {
    button.style.background = "#ffe2e8";
    button.style.borderColor = "#e67b98";
    feedback.textContent = "Casi... esa mide otra cosa. Inténtalo de nuevo 💗";
  }
}

function showRockOptions() {
  showScreen("rockOptions");
}

function showAnswer(choice) {
  const mineralName = document.getElementById("mineralName");
  const mineralIcon = document.getElementById("answerMineral");

  if (choice === "cuarzo") {
    mineralName.textContent = "Cuarzo rosa 💗";
    mineralIcon.textContent = "💎";
  } else {
    mineralName.textContent = "Torbernita ☢️";
    mineralIcon.textContent = "☢️";
  }

  showScreen("answer");
}
