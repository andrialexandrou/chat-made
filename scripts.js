document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects');
    const viewToggles = document.querySelectorAll('.view-toggle');

    // Helper function for updating button states
    const updateButtonStates = (activeButton) => {
        viewToggles.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        activeButton.classList.add('active');
        activeButton.setAttribute('aria-pressed', 'true');
    };

    // Helper function for switching to list view
    const switchToListView = (projectCard) => {
        projectsContainer.classList.remove('grid-view');
        const listViewButton = document.querySelector('[data-view="list"]');
        updateButtonStates(listViewButton);
        projectCard.scrollIntoView({ behavior: 'smooth' });
    };

    // Handle view toggle
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const view = toggle.dataset.view;
            projectsContainer.classList.toggle('grid-view', view === 'grid');
            updateButtonStates(toggle);
        });
    });

    // Handle grid interactions (click and keyboard)
    const handleGridInteraction = (e) => {
        const projectCard = e.target.closest('.project');
        if (projectCard && projectsContainer.classList.contains('grid-view')) {
            switchToListView(projectCard);
        }
    };

    projectsContainer.addEventListener('click', handleGridInteraction);
    projectsContainer.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ')) {
            handleGridInteraction(e);
        }
    });

    // Initialize project cards
    const projects = [
        {
            date: "2024-11-20",
            title: "AI Image Description",
            tagline: "Generate image descriptions based on what's in your clipboard, an Alfred workflow",
            media: {
                type: "img",
                src: "./assets/ai-image-description.png",
                alt: `An Alfred command palette overlay appears in a text document with an image and a caption. The image is a comic titled "TECH DEBT". The overlay shows an interface with the text "desc focus on the intention of the comic" in the input field. Below that is a purple button labeled "Generate description for image in your clipboard" with a small icon and additional text "Inserts into your current cursor focus location." The uses minimalist stick figures to illustrate developers digging themselves into technical debt, represented by a flooding cave metaphor. Below it is the following caption: "A four-panel comic about tech debt. In panel 1, two stick figures wearing miner helmets discover a cave entrance labeled "This way!" with a small green creature watching from above. Panel 2 shows the figures excitedly progressing through the cave, with one saying "We are progressing so fast together!" Panel 3 depicts them looking concerned, saying "This doesn't look good" as water appears to be leaking in. The final panel reveals they've dug themselves into a hole labeled "TECH DEBT" with water rising around them, while the green creature continues observing from a safe position above. The comic illustrates how rushing through technical development without proper planning can lead to accumulated problems, represented by the flooding cave metaphor. Credit shown as "MONKEYUSER.COM"" This alt text was initially drafted with the workflow, and then heavily edited by me to the best of my ability in this admittedly odd alt text scenario.`
            },
            description: `As an accessibility specialist, there are some reputational requirements that come with the domain. Being: I should never attach an image anywhere without an alt text. This is great for inclusivity and for enabling Hubbers to understand the content of the image while maintaining their privacy! It's good and important work! 
            <br /><br />
            It's also a practice that introduces the reality of how visually-oriented our field is, and the friction we face in our day-to-day work especially when put on fast deadlines and trying to keep up with active Slack threads. 
            <br /><br />
            So, given that challenge, what's an engineer to do? 
            <br /><br />
            This project is an exploration at the frontier of AI-assisted image description. There's a long and fraught history of image descriptions being bad, or worse, encouraging a passive relationship to inclusive authorship. But is that truly the end of the story? I didn't think so.
            <br /><br />
            Taking my use case as a realistic representation of how someone might want to engage with AI-assisted image description, I created this workflow that not only creates the description, but supports customizing the prompt right from the execution of the workflow. If you install this you can also customize your system prompt to modify what I've spent a little prompt engineering time on myself.
            <br /><br />
            Most of all, this program calls attention to the fact that the image description is only the start of the task, and encourages modifying the resulting text to include context, or any other details that may be necessary. When used correctly, it helps with the blank page/writer's block problem. And with tens of images being required in our day-to-day, that makes a big difference.`,
            links: [
                { href: "https://github.slack.com/archives/C43EPAC4S/p1732135257591139?thread_ts=1732131808.319699&cid=C43EPAC4S", text: "View Slack demo" },
            ],
            builtWith: "Claude"
        },
        {
            date: "2024-11-30",
            title: "PR Accessibility Review",
            tagline: "A code review agent for accessibility feedback",
            media: {
                type: "img",
                src: "#",
                alt: "Screenshot of a PR review environment for accessibility feedback"
            },
            description: "A naive PR review experience specifically geared toward providing a11y feedback. Built as a basic PR environment to explore whether we can use our own Knowledge Base to artificially contextualize the prompt.",
            links: [
                { href: "https://github.slack.com/archives/C07RLMDF4CU/p1732300623213829?thread_ts=1732221204.022769&cid=C07RLMDF4CU", text: "View Project" }
            ],
            builtWith: "Claude"
        },
        {
            date: "2024-11-01",
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
        // {
        //     date: "2024-01",
        //     title: "Social Media Recipe Site",
        //     tagline: "WindSurf-based social media recipe sharing",
        //     media: {
        //         type: "img",
        //         src: "#",
        //         alt: "Experimental recipe sharing site"
        //     },
        //     description: "Trying to build a social media recipe sharing site. Intentionally scaling up my experiments here, though still green field.",
        //     links: [],
        //     builtWith: "Claude"
        // },
        {
            date: "2024-12-01",
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
            date: "2025-02-02",
            title: "Gus the Writing Assistant",
            tagline: "Obsidian plugin for tracking writing habits",
            media: {
                type: "img",
                src: "./assets/writing-assistant.png",
                alt: `Viewers may recognize an Obsidian UI. Opened on screen with no document in the background is a form dialog box titled "Log Writing Session" with various input fields for tracking writing progress. The form includes sections for Plan, Start Time (set to 12:32), Stage, Project name, Duration, Word Count, Process notes, Test Stat Fluency (with a slider), and Next Actions. Each field has explanatory placeholder text and appropriate input formats. A purple Submit button appears at the bottom right corner. The interface has a clean, minimal design with gray text and white background.`
            },
            description: "A writer friend of mine writes for several hours a day across different stages of the writing process (prewriting, writing, editing). In order to track this she keeps a daily writing log both in a Google Sheet and in Obsidian. I wanted to see if I could automate some of that tedium for her. On form submit, this plugin will log the writing session to a Google Sheet and create a new note in Obsidian with the same information.",
            links: [
                { href: "https://github.com/andrialexandrou/gus-the-writing-assistant", text: "Source Code" }
            ],
            builtWith: "Claude"
        },
        {
            date: "2025-02-02",
            title: "WordCount.js",
            tagline: "Daily writing word count tracker, for use with Google Sheets",
            media: {
                type: "img",
                src: "./assets/word-count-gist.png",
                alt: `JavaScript code snippet titled "WordCount.js" showing a function named "transferDailyWritingData". The code implements data processing functionality, including date handling and word count aggregation. The code is displayed with syntax highlighting, showing keywords in red and strings in a muted color. Key functionality includes getting the previous day's date, retrieving data from a source sheet named 'Log', and grouping word count data by date. The code spans approximately 30 lines and includes helpful comments describing each section's purpose.`
            },
            description: "If given a spreadsheet with entries for wordcount completed on a given day, this script will output a table with the total wordcount for each day. It was created as a little script to accompany the Google sheet output from the Obsidian plugin, Gust the Writing Assistant.",
            links: [
                { href: "https://gist.github.com/andrialexandrou/1ebdac3851a4ce662865b8942206cfe2", text: "View Gist" }
            ],
            builtWith: "Claude"
        },
        {
            date: "2024-12-14",
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

    // Sort projects by date (newest first)
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    projects.forEach((project, index) => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project';
        projectCard.setAttribute('tabindex', '0');
        projectCard.id = `project-${index}`; // Add ID for linking

        const altTextButton = project.media.type === 'img' ? `
            <button class="alt-text-button" aria-label="Show image description">ALT</button>
            <dialog class="alt-text-dialog">
                <div class="dialog-content">
                    ${project.media.alt}
                    <button class="dialog-close" aria-label="Close dialog">×</button>
                </div>
            </dialog>
        ` : '';

        projectCard.innerHTML = `
            <a href="#project-${index}" class="project-share" aria-label="Share link to project">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
            </a>
            <div class="project-header">
                <div class="project-meta">
                    <time class="project-date" datetime="${project.date}">${new Date(project.date).toLocaleString('default', { month: 'long', year: 'numeric' })}</time>
                </div>
                <h2 class="project-title">${project.title}</h2>
                <p class="project-tagline">${project.tagline}</p>
            </div>
            <div class="project-media">
                ${project.media.type === 'img' ? 
                    `<img src="${project.media.src}" alt="${project.media.alt}">
                     ${altTextButton}` : 
                    `<video controls><source src="${project.media.src}" type="video/mp4">${project.media.alt}</video>`}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                ${project.links.map(link => `<a href="${link.href}">${link.text}</a>`).join('')}
            </div>
            <div class="project-built-with">
                Built with ${project.builtWith}
            </div>
        `;

        // Add click handler for alt text button
        if (project.media.type === 'img') {
            const altButton = projectCard.querySelector('.alt-text-button');
            const altDialog = projectCard.querySelector('.alt-text-dialog');
            const closeButton = projectCard.querySelector('.dialog-close');
            
            altButton.addEventListener('click', () => {
                altDialog.showModal();
            });

            // Close dialog and return focus
            const closeDialog = () => {
                altDialog.close();
                altButton.focus();
            };

            // Close on button click
            closeButton.addEventListener('click', closeDialog);

            // Close on Escape key
            altDialog.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeDialog();
                }
            });

            // Close on click outside
            altDialog.addEventListener('click', (e) => {
                const dialogDimensions = altDialog.getBoundingClientRect();
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    closeDialog();
                }
            });
        }

        projectsContainer.appendChild(projectCard);
    });
});
