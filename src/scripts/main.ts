// Define resume data structure
interface Resume {
    name: string;
    contact: string;
    objective: string;
    experience: { jobTitle: string; company: string; period: string; description: string }[];
    education: { degree: string; school: string; period: string }[];
    skills: string[];
}

// Resume data
const resumeData: Resume = {
    name: "Muhammad Yousuf",
    contact: "Email: yousuf_saleem@hotmail.com | Phone: +925-300-2554389 | Location: Karachi, Pakistan",
    objective: "Seeking a front-end development position where I can utilize my skills in HTML, CSS, and TypeScript.",
    experience: [
        {
            jobTitle: "Front-End Developer",
            company: "Tech Company",
            period: "Jan 2020 - Present",
            description: "Developed user interfaces for various applications using modern JavaScript frameworks."
        },
        {
            jobTitle: "Web Developer",
            company: "Startup Inc.",
            period: "Mar 2018 - Dec 2019",
            description: "Built and maintained responsive websites using HTML, CSS, and JavaScript."
        }
    ],
    education: [
        {
            degree: "B.Sc. in Computer Science",
            school: "University of Tech",
            period: "2014 - 2018"
        }
    ],
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git"]
};

// Function to populate the resume
function populateResume(resume: Resume) {
    document.getElementById("name")!.textContent = resume.name;
    document.getElementById("contact")!.textContent = resume.contact;
    document.getElementById("objective")!.textContent = resume.objective;

    const experienceList = document.getElementById("experience-list")!;
    resume.experience.forEach(job => {
        const jobDiv = document.createElement("div");
        jobDiv.innerHTML = `<h3>${job.jobTitle} - ${job.company}</h3>
                            <p>${job.period}</p>
                            <p>${job.description}</p>`;
        experienceList.appendChild(jobDiv);
    });

    const educationList = document.getElementById("education-list")!;
    resume.education.forEach(edu => {
        const eduDiv = document.createElement("div");
        eduDiv.innerHTML = `<h3>${edu.degree}</h3><p>${edu.school} | ${edu.period}</p>`;
        educationList.appendChild(eduDiv);
    });

    const skillsList = document.getElementById("skills-list")!;
    resume.skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}

// Function to toggle skills visibility
function toggleSkills() {
    const skillsList = document.getElementById("skills-list")!;
    const toggleButton = document.getElementById("toggle-skills-btn")!;
    
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    } else {
        skillsList.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
}

// Event listener for the toggle button
document.getElementById("toggle-skills-btn")!.addEventListener("click", toggleSkills);

// Populate the resume when the page loads
populateResume(resumeData);
