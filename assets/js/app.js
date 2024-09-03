const aboutBtn = document.querySelectorAll(".about-button");
const remBtn = document.querySelector(".remove");
const dark = document.querySelector(".dark");
const main = document.querySelector("#main");
const header = document.querySelector(".header");
const logotext = document.querySelector(".logotext");
const about = document.querySelector(".about");
const body = document.querySelectorAll(".body");

// Toggle Dark Mode
dark.addEventListener("click", () => {
    main.classList.toggle("light");
    header.classList.toggle("light");
    logotext.classList.toggle("light");
});

// Show/Hide About Section
aboutBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent link default behavior
        about.style.display = about.style.display === "none" || about.style.display === "" ? "block" : "none";
        body[0].style.display = body[0].style.display === "none" ? "flex" : "none";
    });
});

// Hide About Section when Remove button is clicked
remBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent link default behavior
    about.style.display = "none";
    body[0].style.display = "flex";
});

