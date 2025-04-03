document.addEventListener("DOMContentLoaded", () => {
    const games = [
        { 
            name: "Jogo da Velha",
            description: "Um jogo da velha interativo usando PyGame.",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/002_Jogo_da_Velha",
            youtube: "https://youtu.be/J7vevSFA1XE",
            image: "img/Bytes Universe/002_Jogo_da_Velha.png"
        },
        { 
            name: "Jogo da Cobrinha",
            description: "O clássico jogo da cobrinha recriado com PyGame.",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/005_Jogo_da_Cobrinha",
            youtube: "https://youtu.be/DBqH8PZ310g",
            image: "img/Bytes Universe/005_Jogo_da_Cobrinha.png"
        }
    ];

    const container = document.querySelector(".games-container");

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("project-card");

        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <a href="${game.github}" target="_blank">Código no GitHub</a>
            <a href="${game.youtube}" target="_blank">Vídeo no YouTube</a>
        `;

        container.appendChild(gameCard);
    });
});
