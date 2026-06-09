// ===================================
// GARDENIA PREMIUM JS
// ===================================

// Suppression de l'écran d'introduction

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");

    setTimeout(() => {

        intro.style.display = "none";

    }, 7000);

});

// ===================================
// Apparition progressive du contenu
// ===================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".content-box").forEach(box => {

    observer.observe(box);

});

// ===================================
// Effet de lumière sur les cartes
// ===================================

document.querySelectorAll(".news-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.2))
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.25)";

    });

});

// ===================================
// Particules magiques
// ===================================

const particleContainer = document.createElement("div");

particleContainer.id = "particles";

document.body.appendChild(particleContainer);

function createParticle(){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =
    (Math.random() * 8 + 4) + "s";

    particle.style.opacity =
    Math.random();

    particle.style.width =
    particle.style.height =
    (Math.random() * 5 + 2) + "px";

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },12000);

}

setInterval(createParticle, 300);

// ===================================
// Effet sonore menu (optionnel)
// ===================================

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        // futur son WoW

        // hoverSound.play();

    });

});

// ===================================
// Texte dynamique serveur
// ===================================

const statusText = document.querySelector(".online");

if(statusText){

    setInterval(() => {

        statusText.style.opacity = "0.6";

        setTimeout(() => {

            statusText.style.opacity = "1";

        },500);

    },3000);

}

// ===============================
// Accordéon Codex
// ===============================

const accordions =
document.querySelectorAll(".accordion-header");

accordions.forEach(button => {

    button.addEventListener("click", () => {

        const currentContent =
        button.nextElementSibling;

        accordions.forEach(otherButton => {

            const otherContent =
            otherButton.nextElementSibling;

            if(otherButton !== button){

                otherContent.style.maxHeight = null;

            }

        });

        if(currentContent.style.maxHeight){

            currentContent.style.maxHeight = null;

        } else {

            currentContent.style.maxHeight =
            currentContent.scrollHeight + "px";

        }

    });

});