document.addEventListener("DOMContentLoaded", () => {

    /* ===== 1. SCROLL ANIMATSIYA ===== */
    const sections = document.querySelectorAll(".section");

    function showOnScroll() {
        const triggerBottom = window.innerHeight / 1.2;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < triggerBottom) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();


    /* ===== 2. ACTIVE NAV LINK ===== */
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });


    /* ===== 3. BUTTON ANIMATSIYA ===== */
    window.showMessage = function () {
        const btn = event.target;

        btn.innerText = "Yuborilmoqda...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            btn.innerText = "Yuborildi ✔";
            btn.style.opacity = "1";
        }, 1500);
    };


});