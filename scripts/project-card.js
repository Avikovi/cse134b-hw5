class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: #fff;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 20px auto;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 500px;
                    min-width: 500px;
                    font-family: Arial, sans-serif;
                    transition: transform 0.3s ease-in-out;
                }
                :host(:hover) {
                    transform: scale(1.02);
                    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
                }
                h2 {
                    font-size: 1.6em;
                    margin: 10px 0;
                    color: #333;
                    text-align: center;
                }
                h3 {
                    font-size: 1.3em;
                    margin: 10px 0;
                    color: #666;
                    text-align: center;
                }
                picture img {
                    max-width: 120px;
                    height: auto;
                    border-radius: 5px;
                    display: block;
                    margin: 10px auto;
                }
                p {
                    font-size: 1em;
                    color: #444;
                    line-height: 1.6;
                    margin: 10px 20px;
                    text-align: center;
                }
                .date {
                    font-size: 0.9em;
                    color: #777;
                    font-style: italic;
                    margin-bottom: 10px;
                    text-align: center;
                }
                a {
                    display: inline-block;
                    padding: 10px 15px;
                    color: blue;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 15px;
                    transition: background 0.3s ease-in-out;
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