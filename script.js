// Typing Animation

const typingText = document.querySelector(".typing");

const words = ["Data Analyst", "Data Scientist", "Web Developer"];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;

      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

/* Dark & Light Mode */

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

/* Contact Form */

/* Contact Form Email Sending */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_uv4b2i5", "template_7fbtshg", this)

    .then(
      function () {
        alert("Message Sent Successfully!");

        form.reset();
      },

      function (error) {
        alert("Failed To Send Message");

        console.log(error);
      }
    );
});
