document.addEventListener("DOMContentLoaded", () => {
    const experienceData = [
        {
            company: "Crowdstrike",
            title: "Software Engineer Intern",
            image: "images/crowdstrike.webp",
            alt: "CrowdStrike logo",
            description: "Developed an application that utilized scripts to facilitate the process of creating a testing environment, reducing testing setup times from 1-2 hours to a few seconds.",
            date: "June 2024 - September 2024",
            link: "https://www.crowdstrike.com/en-us/"
        },
        {
            company: "wYne.ai",
            title: "Software Development Intern",
            image: "images/wyne.webp",
            alt: "wYne.ai Logo",
            description: "Developed an API that allowed real-time inventory tracking.",
            date: "June 2021 - Sept 2021",
            link: "https://www.instagram.com/choosewyne/"
        },
        {
            company: "Alan AI",
            title: "Software Engineering Intern",
            image: "images/alanai.webp",
            alt: "Alan AI logo",
            description: "Developed a task management app with AI voice commands.",
            date: "Jan 2020 - Aug 2020",
            link: "https://www.alan.app/"
        }
    ];

    document.getElementById("saveLocal").addEventListener("click", () => {
        localStorage.setItem("experienceData", JSON.stringify(experienceData));
        alert("Work experience data saved locally!");
    });

    document.getElementById("loadLocal").addEventListener("click", () => {
        const storedData = JSON.parse(localStorage.getItem("experienceData"));
        if (storedData) {
            populateExperience(storedData);
        } else {
            alert("No local data found.");
        }
    });

    document.getElementById("loadRemote").addEventListener("click", () => {
        fetch("scripts/work-experience.json")
            .then(response => response.json())
            .then(data => {
                populateExperience(data);
            })
            .catch(error => {
                console.error("Error fetching remote data:", error);
                alert("Failed to load remote data.");
            });
    });

    function populateExperience(data) {
        const section = document.getElementById("projects");
        const existingButtons = section.querySelectorAll("button");
        const header = section.querySelector("h1");
        
        section.innerHTML = "";
        section.appendChild(header);
        existingButtons.forEach(button => section.appendChild(button));
        data.forEach(item => {
            const card = document.createElement("project-card");
            card.setAttribute("company", item.company);
            card.setAttribute("title", item.title);
            card.setAttribute("image", item.image);
            card.setAttribute("alt", item.alt);
            card.setAttribute("description", item.description);
            card.setAttribute("date", item.date);
            card.setAttribute("link", item.link);
            section.appendChild(card);
        });
    }
});
