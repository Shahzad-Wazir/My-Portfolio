// Certificate popup functionality
const certItems = document.querySelectorAll(".cert-item");
const certPopup = document.querySelector("#cert-popup");
const certImage = document.querySelector("#cert-image");
const closePopup = document.querySelector("#close-popup");

certItems.forEach(item => {
    item.addEventListener("click", () => {
        const certUrl = item.getAttribute("data-cert-url");
        certImage.src = certUrl;
        certPopup.style.display = "block";
    });
});

closePopup.addEventListener("click", () => {
    certPopup.style.display = "none";
});

// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Close sidebar when clicking on a nav link in mobile view
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 600) {
            sidebar.classList.remove("active");
        }
        // Remove .active class from all links
        navLinks.forEach(l => l.classList.remove("active"));
        // Add .active class to the clicked link
        link.classList.add("active");
    });
});

// Back to Top Button functionality
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
});

// Loader functionality
window.addEventListener("load", () => {
    const loader = document.querySelector("#loader");
    loader.classList.add("hidden");
});

// Contact form submission (for now, log to console)
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    };
    console.log("Form submitted:", data);
    alert("Message sent! (Logged to console for now)");
    contactForm.reset();
});

// Smooth scroll to section function
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Highlight sidebar nav link on scroll
window.addEventListener("scroll", () => {
    let current = "";

    // Get all sections
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if the section is in the viewport
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // Remove .active class from all links
    navLinks.forEach(link => {
        link.classList.remove("active");
        // Add .active class to the link corresponding to the current section
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true // Animation happens only once on scroll
});

// Typing animation for Hero section
new Typed("#typed-text", {
    strings: ["I am a Web Developer", "I am a Problem Solver", "I am a B.Tech CSE Student"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});