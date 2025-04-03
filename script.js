document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: "C++", startYear: 2022 },
        { name: "Python", startYear: 2018 },
        { name: "SQL", startYear: 2018 },
        { name: "React", startYear: 2022 },
        { name: "Django", startYear: 2024 },
        { name: "HTML", startYear: 2022 },
        { name: "CSS", startYear: 2022 },
        { name: "Arduino", startYear: 2016 },
        { name: "Impressão 3D", startYear: 2018 }
    ];

    const currentYear = new Date().getFullYear();
    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        const yearsOfExperience = currentYear - skill.startYear;
        const listItem = document.createElement("li");
        listItem.textContent = `${skill.name} - ${yearsOfExperience} anos`;
        skillsList.appendChild(listItem);
    });

    const projects = [
        { 
            name: "Nano Rover",
            description: "Robô educacional feito com Arduino e sensores ultrassônicos.",
            link: "nano_rover.html",
            image: "img/Nano Rover/Foto_Nano_Rover_Frente.jpeg"
        },
        {
            name: "DigitAI",
            description: "Interface de desenho e reconhecimento de números escritos a mão com IA (TensorFlow)",
            link: "https://github.com/Leonardo-Nunes-Armelim/DigitAI",
            image: "img/Projetos/DigitAI.png"
        },
        {
            name: "DataCraft",
            description: "Ferramenta de ETL e visualização de dados com Python e Django",
            link: "https://github.com/Leonardo-Nunes-Armelim/DataCraft",
            image: "img/Projetos/Em desenvolvimento.jpg"
        },
        {
            name: "Base Giratória para Cubo Mágico",
            description: "Em um final de semana resolvi fazer uma base giratória para o meu cubo mágico",
            link: "https://github.com/Leonardo-Nunes-Armelim/Base_Giratoria_Cubo_Magico",
            image: "img/Impressora 3D/Arduino - Base Giratoria Cubo Magico.png"
        }
    ];

    const container = document.querySelector(".projects-container");

    projects.forEach(proj => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        if (proj.name === "Nano Rover") {
            projectCard.innerHTML = `
            <img src="${proj.image}" alt="${proj.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            <h3>${proj.name}</h3>
            <p>${proj.description}</p>
            <a href="${proj.link}">Resumo</a>
        `;
        } else {
            projectCard.innerHTML = `
            <img src="${proj.image}" alt="${proj.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            <h3>${proj.name}</h3>
            <p>${proj.description}</p>
            <a href="${proj.link}" target="_blank">Ver no GitHub</a>
            `;
        }

        container.appendChild(projectCard);
    });
});
