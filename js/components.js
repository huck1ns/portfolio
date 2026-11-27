class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
            <div class="section" id = "header">
                <a href = "https://jackhuckins.com">
                    <img src = "./resources/scriptmonocream.svg" class="logo" width="64" height="64">
                </a>
                <div class="links">
                    <a class="text" href="./projects/">Projects</a>
                    <a class="text" href="">Contact</a>
                </div>
            </div>
        </header>
    `;
  }
}

---
---
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
            <div class = "section">
                <ul class = "links">
                    <a class = "text" href = "https://github.com/huck1ns">
                        <img src="./resources/github.svg" width= "20px">
                        <span>GitHub</span>
                    </a>
                    <a class = "text" href = "https://linkedin.com/in/jackhuckins005">
                        <img src="./resources/linkedin.svg" width= "20px">
                        <span>LinkedIn</span>
                    </a>
                    <a class = "text" href = "mailto:jackdhuckins@gmail.com">
                        <img src="./resources/email.svg" width= "24px">
                        <span>Email</span>
                    </a>
                </ul>
                <p class="text">&copy; 2026 Jack Huckins. All rights reserved.</p>
                <p class="text">Last updated: {{ site.time | date: "%B %-d, %Y" }}</p>
            </div>
        </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
