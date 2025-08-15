// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Active Link Highlight =====
const navLinks = document.querySelectorAll("nav ul li a");
function setActiveLink() {
    let fromTop = window.scrollY + 100;
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section) {
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}
window.addEventListener("scroll", setActiveLink);

// ===== Back-to-Top Button =====
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.createElement("div");
menuToggle.id = "menuToggle";
menuToggle.innerHTML = "☰";
document.querySelector("nav").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("showMenu");
});

// ===== Contact Form Validation =====
const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        let valid = true;
        this.querySelectorAll("[required]").forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "1px solid #ccc";
            }
        });
        if (!valid) {
            e.preventDefault();
            alert("Please fill out all required fields.");
        }
    });
}

// ===== Fade-in on Scroll =====
const fadeElements = document.querySelectorAll(".fade-in");
function checkFadeIn() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", checkFadeIn);
window.addEventListener("load", checkFadeIn);

// ===== Dark/Light Mode Toggle =====
const themeToggleBtn = document.getElementById("themeToggle");

function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.style.setProperty("--bg-color", "black");
        document.documentElement.style.setProperty("--text-color", "white");
        themeToggleBtn.innerText = "☀️";
    } else {
        document.documentElement.style.setProperty("--bg-color", "white");
        document.documentElement.style.setProperty("--text-color", "black");
        themeToggleBtn.innerText = "🌙";
    }
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme === "light" ? "dark" : "light");
});
