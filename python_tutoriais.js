document.addEventListener("DOMContentLoaded", () => {
    const games = [
        { 
            name: "Playlist Automacoes Inteligentes",
            description: "Série de automações úteis para o dia a dia de trabalho",
            github: "https://github.com/Leonardo-Nunes-Armelim/Python_Tutoriais/tree/main/Automa%C3%A7%C3%B5es%20Inteligentes",
            youtube: "https://www.youtube.com/playlist?list=PLztWjqPNfRdm3jtRWNQtKYw4j7PvLTGBK",
            image: "img/Python Tutoriais/001 Automacoes Inteligentes.png"
        },
        { 
            name: "Playlist TensorFlow",
            description: "Explicações de usabilidade de modelos de IA",
            github: "https://github.com/Leonardo-Nunes-Armelim/Python_Tutoriais/tree/main/TensorFlow",
            youtube: "https://www.youtube.com/playlist?list=PLztWjqPNfRdlz1JfHwrZZrG8MXxSAOC6Z",
            image: "img/Python Tutoriais/002 TensorFlow.png"
        },
        { 
            name: "Playlist Python Standard Libraries",
            description: "Mostrando bibliotecas nativas do Python e como elas funcionam",
            github: "https://github.com/Leonardo-Nunes-Armelim/Python_Tutoriais/tree/main/Python%20Standard%20Libraries",
            youtube: "https://www.youtube.com/playlist?list=PLztWjqPNfRdku8M6efdhNLi2PipJUbwMD",
            image: "img/Python Tutoriais/003 Python Standard Libraries.png"
        },
        { 
            name: "Playlist OpenPyXL",
            description: "Exemplos de automações com Excel",
            github: "https://github.com/Leonardo-Nunes-Armelim/Python_Tutoriais/tree/main/OpenPyXL",
            youtube: "https://www.youtube.com/playlist?list=PLztWjqPNfRdns12MUMm0V3S3un3jORVKr",
            image: "img/Python Tutoriais/004 OpenPyXL.png"
        },
        { 
            name: "Playlist Matplotlib",
            description: "Visualização de dados com Matplotlib",
            github: "https://github.com/Leonardo-Nunes-Armelim/Python_Tutoriais/tree/main/Matplotlib",
            youtube: "https://www.youtube.com/playlist?list=PLztWjqPNfRdnT7Lk3WII5cUzit-8KgA-I",
            image: "img/Python Tutoriais/005 Matplotlib.png"
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
