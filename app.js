document.addEventListener("DOMContentLoaded", () => {
    // Aici adaugi TOATE restaurantele din lista ta. 
    // Poți avea 5, 10 sau 20 de opțiuni aici, jocul va folosi mereu doar cele 3 pahare de pe ecran.
    const restaurante = [
        "Sushi",
        "Ramen",
        "Cannoleria",
        "Storia"
    ];

    const cups = Array.from(document.querySelectorAll(".cup"));
    const startBtn = document.getElementById("start-btn");
    const modal = document.getElementById("winner-modal");
    const restaurantNameElement = document.getElementById("restaurant-name");

    // Pozițiile fixe pentru cele 3 pahare
    const positions = ['10%', '42.5%', '75%'];
    
    let isShuffling = false;
    let gameReady = false;

    // Setăm pozițiile inițiale
    cups.forEach((cup, index) => {
        cup.style.left = positions[index];
    });

    function shuffleCups() {
        let currentIndices = [0, 1, 2].sort(() => Math.random() - 0.5);
        
        cups.forEach((cup, i) => {
            cup.style.left = positions[currentIndices[i]];
        });
    }

    function startShuffleAnimation() {
        if (isShuffling) return;
        isShuffling = true;
        gameReady = false;
        
        // Dacă a fost ridicat un pahar anterior, îl lăsăm jos
        cups.forEach(c => c.classList.remove("lift"));

        startBtn.disabled = true;
        startBtn.innerText = "Urmărește atent...";

        let shuffleCount = 0;
        const maxShuffles = 10; 

        const intervalId = setInterval(() => {
            shuffleCups();
            shuffleCount++;

            if (shuffleCount >= maxShuffles) {
                clearInterval(intervalId);
                isShuffling = false;
                gameReady = true;
                startBtn.innerText = "Alege unde mergem ❤️";
            }
        }, 400); 
    }

    startBtn.addEventListener("click", startShuffleAnimation);

    cups.forEach(cup => {
        cup.addEventListener("click", () => {
            if (!gameReady || isShuffling) return;

            gameReady = false;

            // Animația de ridicare a paharului ales
            cup.classList.add("lift");

            // Aici extragem aleatoriu un restaurant din lista TA
            const restaurantAles = restaurante[Math.floor(Math.random() * restaurante.length)];
            restaurantNameElement.innerText = restaurantAles;

            // Afișăm fereastra cu rezultatul după un scurt delay
            setTimeout(() => {
                modal.classList.remove("hidden");
                startBtn.disabled = false;
                startBtn.innerText = "Mai amestecăm o dată?";
            }, 800);
        });
    });

    // Închide fereastra cu rezultatul dacă apasă pe ea
    modal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});