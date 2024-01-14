import {
  c,
  contact,
  csharp,
  css,
  cypress,
  git,
  github,
  html,
  java,
  javascript,
  jest,
  linkedin,
  nodejs,
  postgreSQL,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  vue,
} from "../assets/icons";
import { ctd, ipsEnergy, winestars } from "../assets/images";

// Add more skills
export const skills = [
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: vue,
    name: "Vue.js",
    type: "Frontend",
  },
  {
    imageUrl: postgreSQL,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Backend",
  },
  {
    imageUrl: csharp,
    name: "C#",
    type: "Backend",
  },
  {
    imageUrl: cypress,
    name: "Cypress",
    type: "Testing",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "IPS Energy",
    icon: ipsEnergy,
    contentShadow: "#8ad4e5",
    iconBg: "#ffffff",
    date: "May 2021 - December 2022",
    points: [
      "Designing and developing mobile applications from the ground up for both Android and iOS platforms using <strong>React Native</strong>.",
      "Maintaining and improving the architecture of existing web and mobile applications using <strong>React.js</strong> and React Native.",
      "<strong>Independently</strong> developed a React Native mobile app from scratch, to address malfunctions in machines used by workers in the fields.",
      "Designed custom mobile app interfaces and features for each company that purchased the application, tailored to their specific needs and branding.",
      "Troubleshooting and resolving technical issues promptly to minimize disruptions and maintain a positive user experience.",
      "Mentoring and providing guidance to a junior team member to foster skill development and growth.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Connect The Dots",
    icon: ctd,
    contentShadow: "#39b2e0",
    iconBg: "#ffffff",
    date: "December 2022 - Present",
    points: [
      "Spearheaded development efforts at a <strong>dynamic startup</strong>, contributing to a fast-paced environment.",
      "Utilized <strong>Vue.js</strong> to shape and enhance the application, showcasing adaptability and proficiency in modern frontend technologies",
      "Collaborating with cross-functional teams to identify user requirements and design solutions that meet their needs.",
      "Assumed <strong>code ownership</strong> within a year and conducted regular code reviews to ensure high coding standards.",
      "Engineered the key feature that attracted the <strong>first client</strong>, highlighting a significant impact on the application's success.",
      "Improved sign-up and sign-in flows, seamlessly integrating Microsoft and Google authorization endpoints.",
      "Worked with <strong>Cypress</strong>, <strong>Vitest</strong> and <strong>Jest</strong> to thoroughly test new feature components, ensuring robust functionality and a seamless user experience.",
    ],
  },
  {
    title: "Usability and Interface Coordinator",
    company_name: "Wine Stars",
    icon: winestars,
    contentShadow: "#a12221",
    iconBg: "#ffffff",
    date: "December 2023 - Present",
    points: [
      "Conduct regular user evaluations using <strong>Nielsen's heuristics</strong> to assess and enhance the overall user experience.",
      "Stay abreast of the latest UI/UX trends in e-commerce and effectively communicate insights to programmers for continuous improvement.",
      "Identify and troubleshoot bugs within the website, ensuring a smooth and error-free user interaction.",
      "Test and evaluate new solutions to optimize user engagement and satisfaction.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/tamaratosic98",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/tamara-tosic-867ba018b/",
  },
];

// IpsMalfunctionApp, IpsScheduler, IpsMobApp, ConnectTheDots, WineStars.rs, LostAndFoundDog
export const projects = [];
