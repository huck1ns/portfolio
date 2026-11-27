export function loadCards(projects) {
    return projects.map(project => { 
        const siteRoot = new URL("../", import.meta.url);
        const icon = project.icon ? new URL(project.icon, siteRoot).href : '';
        
        return `
        <article class = "project-card">
            <img src="${icon}" loading = "lazy">
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
    `}).join('');

}