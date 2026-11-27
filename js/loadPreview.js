import { loadCards } from "./loadCards.js";

async function loadProjectsPreview() {
    const list = document.getElementById('projects-list');

    try {
        const response = await fetch('./projects.json');
        const projects = await response.json();
        const recent = projects.slice(0,4);

        list.innerHTML = loadCards(recent);
        list.insertAdjacentHTML("beforeend", `
            <article class = "project-card" id = "more">
                <img src = "./resources/arrow.png" loading = "lazy">
                <h3><a href="/projects/" target="_blank" rel="noopener" id = "see-more">See more</a></h3>
            `)

    } catch (error) {
        console.error('Error loading projects:', error);
        list.innerHTML = '<p>Error loading projects.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProjectsPreview);