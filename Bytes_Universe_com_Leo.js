document.addEventListener("DOMContentLoaded", () => {
    const games = [
        {
            name: "Jogo da Simon",
            description: "Clássico jogo do Simon feito com Python e PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/001_Simon_the_Game",
            youtube: "https://youtu.be/MT6RpuPKSyw",
            image: "img/Bytes Universe/001_Simon_the_Game.png"
        },
        {
            name: "Jogo da Velha",
            description: "Um jogo da velha interativo usando PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/002_Jogo_da_Velha",
            youtube: "https://youtu.be/1DZ12S1Fi0Y",
            image: "img/Bytes Universe/002_Jogo_da_Velha.png"
        },
        {
            name: "Jogo da Forca",
            description: "O clássico jogo da forca feito em PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/003_Jogo_da_Forca",
            youtube: "https://youtu.be/fcPSU5t3CIo",
            image: "img/Bytes Universe/003_Jogo_da_Forca.png"
        },
        {
            name: "Sudoku",
            description: "Jogo Sudoku recriado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/004_Sudoku",
            youtube: "https://youtu.be/zMumjrj7r1Y",
            image: "img/Bytes Universe/004_Sudoku_V1.png"
        },
        {
            name: "Jogo da Cobrinha",
            description: "O clássico jogo da cobrinha recriado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/005_Jogo_da_Cobrinha",
            youtube: "https://youtu.be/eehcQR5lrAA",
            image: "img/Bytes Universe/005_Jogo_da_Cobrinha.png"
        },
        {
            name: "Jogo Adivinhe o Número",
            description: "Um jogo simples feito no terminal cmd para o público iniciante em programação do canal",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/006_Guess_the_Number",
            youtube: "https://youtu.be/ILYfKn8Q-p0",
            image: "img/Bytes Universe/006_Guess_the_Number.png"
        },
        {
            name: "Resta 1",
            description: "Jogo clássico de tabuleiro onde o objetivo é restar apenas uma peça no final recriado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/007_Resta_1",
            youtube: "https://youtu.be/jQ8Bw8gU7U4",
            image: "img/Bytes Universe/007_Resta_1.png"
        },
        {
            name: "Sokoban",
            description: "Jogo quebra-cabeça retrô onde o objetivo é colocar todas as caixas nos objetivos azuis recriado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/008_Sokoban",
            youtube: "https://youtu.be/HVEwkSnN5Sg",
            image: "img/Bytes Universe/008_Sokoban.png"
        },
        {
            name: "Tetris",
            description: "O clássico jogo do Tetris recriado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/009_Tetris",
            youtube: "https://youtu.be/NT3JW97u4Zw",
            image: "img/Bytes Universe/009_Tetris.png"
        },
        {
            name: "Pong",
            description: "Um dos primeiros jogos já criados reprogramado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/010_Pong",
            youtube: "https://youtu.be/OxMqUB6EWng",
            image: "img/Bytes Universe/010_Pong.png"
        },
        {
            name: "Pedra Papel Tesoura Lagarto Spock",
            description: "Jogo que ficou popular na série de TV The Big Bang Theory criado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/011_Pedra_Papel_Tesoura_Lagarto_Spock",
            youtube: "https://youtu.be/1yHw8cwxafg",
            image: "img/Bytes Universe/011_Pedra_Papel_Tesoura_Lagarto_Spock.png"
        },
        {
            name: "Pedra Papel Tesoura",
            description: "Um jogo que toda criança sabe jogar programado com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/012_Pedra_Papel_Tesoura",
            youtube: "",
            image: "img/Bytes Universe/012_Pedra_Papel_Tesoura.png"
        },
        {
            name: "Jogo de Plataforma 2D",
            description: "Jogo de plataforma 2D com tema de pirata feito com PyGame",
            github: "https://github.com/Leonardo-Nunes-Armelim/Bytes_Universe/tree/main/Jogos_em_Python/013_Jogo_de_Plataforma_2D",
            youtube: "https://youtu.be/nCk4zEL15dM",
            image: "img/Bytes Universe/013_Jogo_de_Plataforma_2D.png"
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
