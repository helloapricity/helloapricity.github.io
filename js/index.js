const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // remove active
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        projectCards.forEach(card => {
            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    status.innerText = "Sending...";

    emailjs.sendForm("service_9qaq5gu", "template_gae1057", this)
        .then(() => {
            status.innerText = "✅ Message sent!";
            this.reset();
        }, (error) => {
            console.error("EmailJS error:", error);
            status.innerText = "❌ Failed to send message.";
        });
});

document.addEventListener("DOMContentLoaded", function () {
  const typewriter = document.getElementById('typewriter');
  const phrases = [
    "AI Researcher | Quant Developer | LLM Enthusiast",
    "Building agents for finance ⚙️📈",
    "Transforming data into decisions 🚀"
  ];

  let phraseIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < phrases[phraseIndex].length) {
      typewriter.innerHTML += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 60);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriter.innerHTML = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 40);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

  type();
});

// Dark mode toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Toggle Dark Mode + Save to localStorage

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});
