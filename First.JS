// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav ul");

menuBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Project Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => modal.style.display = "none");

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value; 
    let email = document.getElementById("email").value;
    let msg = document.getElementById("message").value;

    if (name === "" || email === "" || msg === "") {
        document.getElementById("formMsg").textContent = "All fields are required!";
        return;
    }

    document.getElementById("formMsg").textContent = "Message sent successfully!";
});

// Demonstrating Variables & Data Types
let myName = "John";              // string
let age = 22;                     // number
let isDeveloper = true;           // boolean
let skills = ["HTML", "CSS"];     // array
let info = { country: "India" };  // object

console.log(myName, age, isDeveloper, skills, info);
