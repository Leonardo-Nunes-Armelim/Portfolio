document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: "C++",          experience: 4, current: false, startCurrentYear: 2022 },
        { name: "Python",       experience: 6, current: true,  startCurrentYear: 2026 },
        { name: "SQL",          experience: 3, current: true,  startCurrentYear: 2026 },
        { name: "React",        experience: 4, current: false, startCurrentYear: 2022 },
        { name: "Django",       experience: 1, current: false, startCurrentYear: 2024 },
        { name: "HTML",         experience: 6, current: false, startCurrentYear: 2022 },
        { name: "CSS",          experience: 6, current: false, startCurrentYear: 2022 },
        { name: "Arduino",      experience: 0, current: true,  startCurrentYear: 2016 },
        { name: "Impressão 3D", experience: 0, current: true,  startCurrentYear: 2018 }
    ];

    const currentYear = new Date().getFullYear();
    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        let yearsOfExperience;

        if (skill.current) {
            yearsOfExperience = skill.experience + (currentYear - skill.startCurrentYear);
        } else {
            yearsOfExperience = currentYear - skill.startCurrentYear;
        }

        const listItem = document.createElement("li");
        listItem.textContent = `${skill.name} - ${yearsOfExperience} anos`;
        skillsList.appendChild(listItem);
    });


    const projects = [
        { 
            name: "Nano Rover",
            description: "Robô educacional feito com Arduino e sensores ultrassônicos.",
            link: "nano_rover.html",
            image: "img/Projetos/Foto_Nano_Rover_Frente.jpeg"
        },
        {
            name: "Bit-Boy",
            description: "Bit-Boy é um console portátil educacional inspirado no Game Boy para ensinar programação e eletrônica de forma prática.",
            link: "https://github.com/Leonardo-Nunes-Armelim/Bit-Boy",
            image: "img/Projetos/Bit-Boy.jpg"
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
            image: "img/Projetos/Arduino - Base Giratoria Cubo Magico.png"
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
