class SiteHeader extends HTMLElement {
  connectedCallback() {
    const curPath = window.location.pathname
    const isSubdirectory = curPath.includes('/projects/');

    const linkTitle = isSubdirectory ? 'Home' : 'Projects';
    const link = isSubdirectory ? '../' : '../projects';
    const photoPath = isSubdirectory ? '../' : './'
    
    this.innerHTML = `
      <header>
            <div class="section" id = "header">
                <a href = "../">
                    <img src = "${photoPath}resources/scriptmonocream.svg" class="logo" width="64" height="64">
                </a>
                <div class="links">
                    <a class="text" href="${link}">${linkTitle}</a>
                    <a class="text" href="">Contact</a>
                </div>
            </div>
        </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
    const curPath = window.location.pathname
    const isSubdirectory = curPath.includes('/projects/');
    const photoPath = isSubdirectory ? '../' : './'

    const updated = new Date(document.lastModified).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    
    this.innerHTML = `
      <footer>
            <div class = "section">
                <ul class = "links">
                    <a class = "text" href = "https://github.com/huck1ns">
                        <img src="${photoPath}resources/github.svg" width= "20px">
                        <span>GitHub</span>
                    </a>
                    <a class = "text" href = "https://linkedin.com/in/jackhuckins005">
                        <img src="${photoPath}resources/linkedin.svg" width= "20px">
                        <span>LinkedIn</span>
                    </a>
                    <a class = "text" href = "mailto:jackdhuckins@gmail.com">
                        <img src="${photoPath}resources/email.svg" width= "24px">
                        <span>Email</span>
                    </a>
                </ul>
                <p class="text">&copy; 2026 Jack Huckins. All rights reserved.</p>
                <p class="text">Last updated: ${updated}</p>
            </div>
        </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
