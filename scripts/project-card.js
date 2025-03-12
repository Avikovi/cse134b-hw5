class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    margin: 16px 0;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                    font-family: Arial, sans-serif;
                }
                h2 {
                    font-size: 1.5em;
                    margin: 0 0 10px;
                }
                h3 {
                    font-size: 1.2em;
                    margin: 0 0 8px;
                    color: #555;
                }
                picture img {
                    max-width: 100px;
                    height: auto;
                    border-radius: 5px;
                }
                p {
                    font-size: 1em;
                    color: #333;
                }
                .date {
                    font-size: 0.9em;
                    color: #777;
                    margin-bottom: 8px;
                }
                a {
                    display: inline-block;
                    margin-top: 10px;
                    color: blue;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
            <picture>
                <img src="" alt="">
            </picture>
            <h2></h2>
            <h3></h3>
            <p class="date"></p>
            <p class="description"></p>
            <a href="#" target="_blank">More About the Company</a>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('h2').textContent = this.getAttribute('company') || 'Company Name';
        this.shadowRoot.querySelector('h3').textContent = this.getAttribute('title') || 'Job Title';
        this.shadowRoot.querySelector('img').src = this.getAttribute('image') || '';
        this.shadowRoot.querySelector('img').alt = this.getAttribute('alt') || 'Company Logo';
        this.shadowRoot.querySelector('.date').textContent = this.getAttribute('date') || 'Employment Period';
        this.shadowRoot.querySelector('.description').textContent = this.getAttribute('description') || 'Job description goes here.';
        this.shadowRoot.querySelector('a').href = this.getAttribute('link') || '#';
    }
}

customElements.define('project-card', ProjectCard);