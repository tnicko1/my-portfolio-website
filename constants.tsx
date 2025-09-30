import React from 'react';
import type { Skill, Project, ExperienceItem, EducationItem } from './types';

// SVG icons as React components for skills
const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-400">
        <path d="M13.5 9.5s-1-2-3.5-2-3.5 2-3.5 2v5s1 2 3.5 2 3.5-2 3.5-2v-5z"></path>
        <path d="M10.5 14.5s1 2 3.5 2 3.5-2 3.5-2v-5s-1-2-3.5-2-3.5 2-3.5 2v5z"></path>
    </svg>
);
const FirebaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-yellow-500">
        <path d="M4.53 18.57l6.46-13.14a.7.7 0 0 1 1.01 0l6.46 13.14a.7.7 0 0 1-.5 1.13H5.04a.7.7 0 0 1-.5-1.13z"></path>
    </svg>
);
const QtIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4v-2h2v2h-2zm0-4V7h2v2h-2z"></path>
    </svg>
);
const SoftwareDevelopmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-cyan-400">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="12" y1="2" x2="12" y2="22"></line>
    </svg>
)


export const PERSONAL_DATA = {
    name: "Nikoloz Taturashvili",
    role: "Independent Developer",
    tagline: "Building innovative and efficient software solutions to solve real-world operational challenges.",
    about: "As a proactive and dedicated Independent Developer, I specialize in designing and building custom software solutions from the ground up. I recently developed the Retail Operations Suite, a comprehensive desktop application using Python, Google Firebase, and PyQt6, which streamlined inventory management, sales tracking, and reporting for the company. My expertise lies in full-stack desktop application development, database design, and delivering user-focused software that significantly improves efficiency and reduces manual errors.",
    email: "nikoloz@taturashvili.com",
    social: {
        github: "https://github.com/tnicko1",
        linkedin: "https://www.linkedin.com/in/tnicko1",
        instagram: "https://www.instagram.com/tnicko__/",
    }
};

export const SKILLS_DATA: Skill[] = [
    { name: 'Software Development', icon: <SoftwareDevelopmentIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Google Firebase', icon: <FirebaseIcon /> },
    { name: 'PyQt6', icon: <QtIcon /> },
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "Retail Operations Suite",
        description: "A custom internal software solution designed to manage daily operations for PCSHOP.GE. Features modules for inventory management, sales tracking, reporting, and user management, significantly improving efficiency and reducing manual errors.",
        image: "https://picsum.photos/seed/retail-suite/800/600",
        tags: ["Python", "Google Firebase", "PyQt6", "Desktop Development"],
        githubUrl: "#"
    },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        role: "Independent Developer",
        company: "PCSHOP.GE",
        period: "July 2025 - Present",
        description: "Designed and developed Retail Operations Suite, a custom internal software solution. Delivered modules for inventory management, sales tracking, and reporting using Python, Google Firebase, and PyQt6."
    },
    {
        role: "Sales Manager & Merchandiser",
        company: "PCSHOP.GE",
        period: "February 2025 - Present",
        description: "Consulted customers, managed support calls, and oversaw in-store merchandising to optimize sales and product presentation."
    },
    {
        role: "Sales Consultant",
        company: "Carrefour",
        period: "June 2021 - September 2021",
        description: "Provided product recommendations, handled sales transactions, and assisted with customer inquiries in a fast-paced retail environment."
    },
    {
        role: "Sales Assistant",
        company: "PcPlus.ge",
        period: "July 2020 - September 2020",
        description: "Assisted customers with product selection, managed point-of-sale transactions, and helped maintain store organization and displays."
    }
];


export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: "B.S. in Computer Science",
        institution: "Tbilisi State University",
        period: "2023 - 2027",
        description: "Pursuing a comprehensive curriculum in computer science, focusing on algorithms, data structures, and software development principles."
    }
];