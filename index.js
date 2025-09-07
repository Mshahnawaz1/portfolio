

// JavaScript for Day/Night Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const htmlElement = document.documentElement;

// Set initial theme based on local storage or user preference
const isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
if (isDarkMode) {
    htmlElement.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
} else {
    htmlElement.classList.remove('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
});

// JavaScript for Markdown loading
async function showProjectDetails(projectId) {
    const projectDetailsSection = document.getElementById('project-details');
    const projectDetailsContainer = document.getElementById('project-details-container');

    try {
        // Construct the path to the markdown file based on the projectId
        const markdownPath = `projects/${projectId}.md`; // Assumes your files are named project-1.md, project-2.md, etc.

        // Fetch the markdown content from the file
        const response = await fetch(markdownPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdownContent = await response.text();

        // Render the Markdown and insert it into the container
        const htmlContent = marked.parse(markdownContent);
        projectDetailsContainer.innerHTML = htmlContent;

        // Show the details section and scroll to it
        projectDetailsSection.classList.remove('hidden');
        projectDetailsSection.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Failed to load project details:', error);
        // Display a user-friendly error message
        projectDetailsContainer.innerHTML = '<p class="text-red-500">Sorry, could not load project details. Please try again later.</p>';
        projectDetailsSection.classList.remove('hidden');
        projectDetailsSection.scrollIntoView({ behavior: 'smooth' });
    }
}