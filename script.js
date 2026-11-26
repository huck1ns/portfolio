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
                <h3><a href="https://github.com/huck1ns" target="_blank" rel="noopener" id = "see-more">See more</a></h3>
            `)

    } catch (error) {
        console.error('Error loading projects:', error);
        list.innerHTML = '<p>Error loading projects.</p>';
    }
}

 function loadCards(projects) {
    return projects.map(project => `
        <article class = "project-card">
            <img src="${project.icon}" loading = "lazy">
            <div class="card-content">
                <div class="title-and-text">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="link-year-
                tag">
                    <a href="${project.repo}" target="_blank" rel="noopener">Source Code</a>
                    <p id="year">${project.date.slice(0,4)+" • "+project.type}</p>
                </div>
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjectsPreview);