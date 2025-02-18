document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            date: "2024-01",
            title: "Weather",
            tagline: "A mindful approach to weather forecasting",
            media: {
                type: "img",
                src: "/api/placeholder/800/500",
                alt: "Weather interface showing current conditions with a clean, minimal design"
            },
            description: "A weather app that focuses on the essentials. Built with React and designed to be both beautiful and functional, helping you plan your day with clarity.",
            links: [
                { href: "#demo", text: "View Demo" },
                { href: "#github", text: "Source Code" },
                { href: "#live", text: "Live Site" }
            ],
            builtWith: "Claude"
        },
        {
            date: "2023-11",
            title: "TaskCLI",
            tagline: "Simple task management for developers",
            media: {
                type: "video",
                src: "#",
                alt: "Your browser does not support the video tag."
            },
            description: "A thoughtfully designed CLI task manager that fits naturally into developer workflows. Built with Node.js and SQLite, featuring seamless Git integration.",
            links: [
                { href: "#github", text: "View Project" },
                { href: "#docs", text: "Documentation" }
            ],
            builtWith: "ChatGPT"
        },
        {
            date: "2023-09",
            title: "Compose",
            tagline: "A peaceful space for writing",
            media: {
                type: "img",
                src: "/api/placeholder/800/500",
                alt: "Clean writing interface with markdown preview"
            },
            description: "A focused markdown editor that helps you concentrate on your thoughts. Features real-time preview and automatic saving, built with modern web technologies.",
            links: [
                { href: "#github", text: "View Project" },
                { href: "#live", text: "Try It Out" }
            ],
            builtWith: "Claude"
        }
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project';

        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-meta">
                    <time class="project-date" datetime="${project.date}">${new Date(project.date).toLocaleString('default', { month: 'long', year: 'numeric' })}</time>
                </div>
                <h2 class="project-title">${project.title}</h2>
                <p class="project-tagline">${project.tagline}</p>
            </div>
            <div class="project-media">
                ${project.media.type === 'img' ? `<img src="${project.media.src}" alt="${project.media.alt}">` : `<video controls><source src="${project.media.src}" type="video/mp4">${project.media.alt}</video>`}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                ${project.links.map(link => `<a href="${link.href}">${link.text}</a>`).join('')}
            </div>
            <div class="project-built-with">
                Built with ${project.builtWith}
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
});
