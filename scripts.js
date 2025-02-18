document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
        date: "2024-01",
        title: "Alfred Workflow - Image Description",
        tagline: "Generate image descriptions based on what's in your clipboard",
        media: {
            type: "video",
            src: "#",
            alt: "Demo video showing an Alfred workflow that generates image descriptions"
        },
        description: "A workflow that will generate an image description based off of what's in my clipboard. Has a few hardcoded path values in the workflow configuration so it's not quite ready to share.",
        links: [
            { href: "https://github.slack.com/archives/C43EPAC4S/p1732135252521132?thread_ts=1732131808.317699&cid=C43EPAC4S", text: "View Project" },
            { href: "https://grid.enterprise.slack.com/files/U012JLDUNM7/F0815RY9CB1/screenshot_2024-11-19_at_13.40.49.mp4", text: "View Demo" }
        ],
        builtWith: "Claude"
    },
    {
        date: "2024-01",
        title: "PR Accessibility Review",
        tagline: "A code review agent for accessibility feedback",
        media: {
            type: "video",
            src: "#",
            alt: "Demo video of a PR review environment for accessibility feedback"
        },
        description: "A naive PR review experience specifically geared toward providing a11y feedback. Built as a basic PR environment to explore whether we can use our own Knowledge Base to artificially contextualize the prompt.",
        links: [
            { href: "https://github.slack.com/archives/C07RLMDF4CU/p1732300623213829?thread_ts=1732221204.022769&cid=C07RLMDF4CU", text: "View Project" }
        ],
        builtWith: "Claude"
    },
    {
        date: "2024-01",
        title: "Repository PR Finder",
        tagline: "Find all PRs in repository subdirectories",
        media: {
            type: "img",
            src: "#",
            alt: "Script to find PRs in repository subdirectories"
        },
        description: "A script to find all the PRs in a given subdirectory of any repository with automated alt text generation for images and videos.",
        links: [
            { href: "https://gist.github.com/andrialexandrou/0e45af3fb75cc4ac284578694f4602f", text: "View Gist" }
        ],
        builtWith: "Claude"
    },
    {
        date: "2024-01",
        title: "Social Media Recipe Site",
        tagline: "WindSurf-based social media recipe sharing",
        media: {
            type: "img",
            src: "#",
            alt: "Experimental recipe sharing site"
        },
        description: "Trying to build a social media recipe sharing site. Intentionally scaling up my experiments here, though still green field.",
        links: [],
        builtWith: "Claude"
    },
    {
        date: "2024-01",
        title: "Twitter Archive Digest",
        tagline: "5-tweet digest from personal archive",
        media: {
            type: "img",
            src: "#",
            alt: "Twitter archive digest tool"
        },
        description: "A background job to run at noon everyday offering up a 5-tweet digest from my archive. I've been online since late 2010 so there's lots of fun stuff in there. Memory lane.",
        links: [],
        builtWith: "Claude"
    },
    {
        date: "2024-01",
        title: "Writing Assistant Plugin",
        tagline: "Obsidian plugin for tracking writing habits",
        media: {
            type: "img",
            src: "#",
            alt: "Obsidian plugin interface"
        },
        description: "An Obsidian plugin for a writing friend trying to track her writing habits, to replace a laborious process that she's already got like 2 months of backdata (is that a word?) from",
        links: [
            { href: "https://github.com/andrialexandrou/gus-the-writing-assistant", text: "Source Code" }
        ],
        builtWith: "Claude"
    },
    {
        date: "2024-01",
        title: "WordCount.js",
        tagline: "Daily writing word count tracker",
        media: {
            type: "img",
            src: "#",
            alt: "Word count tracking script"
        },
        description: "Script to run daily to collect word counts from previous day's writing sessions, if it can be counted as distinct from the previous one",
        links: [
            { href: "WordCount.js", text: "View Script" }
        ],
        builtWith: "Claude"
    },
    {
        date: "2024-12",
        title: "Commander Tracker",
        tagline: "Commander decklist tracker",
        media: {
            type: "img",
            src: "#",
            alt: "Commander decklist tracker"
        },
        description: "A web form that autofills content from the Scryfall API and generates stored procedure calls, for the purposes of inserting Magic the Gathering deck into a pre-existing database.",
        links: [
            { href: "https://github.com/andrialexandrou/commander-tracker", text: "View Code" },
            { href: "https://andrialexandrou.github.io/commander-tracker/", text: "View Site" }
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
