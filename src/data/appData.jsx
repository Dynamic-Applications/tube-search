import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma, FaAws } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython, SiPostgresql } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
    name: "Tube Search",
    title: "Full Stack Developer",
    email: "mydynamicapplications@gmail.com",
    linkedin: "https://linkedin.com/in/miragekamran",
    github: "https://github.com/miragekamran",
    resumeLink: "/MirageKamran.pdf", // Make sure your resume is in public/
    bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
    shortBio: "I build things for the web.", // For Hero section
};

export const education = [
  {
    institution: "Kabul Polytechnic University",
    degree: "Bachelor of Science in Petruleum Engineering",
    duration: "March 2000 – November 2005",
  },
  {
    institution: "Bloom Institute of Technology",
    degree: "Certificate in Full Stack Development",
    duration: "April 2018 - May 2020",
  },
  {
    institution: "Yuba Community College",
    degree: "Associate of Science in Computer Science",
    duration: "January 2016 - May 2018",
    score: "GPA: 3.8/4.0",
  },
];

export const projects = [
    {
        title: "FilmFaves",
        tech: [
            "React JS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Material UI",
        ],
        description:
            "In today’s fast-paced digital world, seamless authentication is key to enhancing user experience while ensuring top-notch security. That’s why we built FilmFaves, an intuitive authentication platform designed to provide a secure, efficient, and user-friendly login and registration experience.",
        date: "March 2025 – Present",
        githubLink: "https://github.com/Dynamic-Applications/filmfaves_fe", // Replace with actual link
        liveLink: "https://filmfaves-nine.vercel.app/", // Replace with actual link if available
        category: "Full Stack",
        icon: <FaReact size={24} className="text-accent-1" />,
    },
    {
        title: "Secret Family Recipes",
        tech: [
            "JavaScript",
            "React",
            "Redux",
            "HTML",
            "CSS",
            "SQLite",
            "Express",
            "Node.js",
        ],
        description:
            "A full-stack React application that enables users to save and share their most valuable recipes. Worked as a frontend UI developer in a 5-person team, designing and building forms, React components, and user flows in just 4 days, collaborating closely with backend developers to align on functionality and user stories.",
        date: "Jan 2020 – Feb 2020",
        githubLink: "https://github.com/Build-Week-Secret-Family-Recipes-5", // Replace with actual link
        liveLink: "https://sec-family-recipes.netlify.app/", // Replace with actual link if available
        category: "Full Stack",
        icon: <FaNodeJs size={24} className="text-accent-1" />,
    },
    {
        title: "Anywhere Fitness",
        tech: ["React JS", "Node.js", "Express.js", "SQLite"],
        description:
            "A fitness platform designed to help users find and join classes from anywhere. Served as the backend developer on a 5-person full-stack team, building the API, implementing tests, and developing middleware to ensure secure and efficient functionality.",
        date: "Jun 2020 – Jul 2020",
        githubLink: "https://github.com/BW-Anywhere-Fitness-4/be",
        // liveLink: "https://farm-connect-iota-psi.vercel.app/",
        category: "Backend",
        icon: <FaReact size={24} className="text-accent-1" />,
    },
];

export const skills = {
    languages: [
        { name: "JavaScript", icon: <SiJavascript /> },
        // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Python", icon: <SiPython /> },
    ],
    frameworksAndLibraries: [
        { name: "React JS", icon: <FaReact /> },
        { name: "Node JS", icon: <FaNodeJs /> },
        { name: "Express JS", icon: <SiExpress /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
        { name: "Figma", icon: <FaFigma /> }, // Design tool
        { name: "Wordpress", icon: <FaWordpress /> },
    ],
    toolsAndPlatforms: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
        { name: "Postman", icon: <FaCode /> }, // Placeholder icon
        { name: "Insomnia", icon: <FaCode /> }, // Placeholder icon
        { name: "AWS", icon: <FaAws /> }, // Placeholder icon
    ],
    coreCompetencies: [
        "Problem Solving",
        "Presentations",
        "Team Leadership",
        "Event Hosting",
        "Agile Methodologies",
    ],
};

export const leadershipAndInvolvement = [
    {
        role: "Full Stack Developer",
        organization: "Freelance",
        duration: "Nov 2020 – Present",
        points: [
            "Built and delivered custom web solutions using HTML, CSS, JavaScript, React, PostgreSQL, and APIs to enhance client acquisition and retention.",
            "Managed projects end-to-end, from client communication to task breakdown and tech research, using tools like Trello and Whimsical.",
        ],
    },
    {
        role: "Full Stack Web Developer",
        organization: "Delta Air Lines, Atlanta, GA",
        duration: "Nov 2021 – Mar 2024",
        points: [
            "Developed and maintained scalable full-stack applications with React, Node.js/Express, RESTful APIs, and state management, ensuring accessibility and responsive design.",
            "Optimized performance, automated CI/CD workflows, and collaborated in Agile teams to deliver high-quality, maintainable software.",
        ],
    },
    {
        role: "Student Mentor",
        organization: "Bloom Institute of Technology, San Francisco, CA",
        duration: "Sep 2020 – Nov 2021",
        points: [
            "Guided students through coding challenges, pair programming, and project reviews using HTML, CSS, JavaScript, and React.",
            "Conducted mock interviews, provided mentorship via Slack/Zoom, and delivered feedback to improve learning outcomes.",
        ],
    },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};