import { loadCards } from "./loadCards.js";

async function loadProjects() {
    const list = document.getElementById('projects-grid');

    try {
        const response = await fetch('../projects.json');
        const projects = await response.json();

        list.innerHTML = loadCards(projects);

    } catch (error) {
        console.error('Error loading projects:', error);
        list.innerHTML = '<p>Error loading projects.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);