import {
  c,
  contact,
  csharp,
  css,
  cypress,
  git,
  github,
  html,
  ipsMobApp,
  ipsNotifier,
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

export const projects = [
  {
    name: "CTD.ai",
    theme: "btn-back",
    iconUrl: ctd,
    link: "https://app.ctd.ai/invitation?code=9ac18a4e-a7c1-48fb-822b-00da74cbdded--tamara-tosic",
    description:
      "I actively contributed to developing Connect The Dots (CTD), implementing features like email inbox integration and other enhancements for a streamlined networking experience.",
  },
  {
    name: "IPS-MobApp S",
    description: "A React Native application",
    theme: "btn-back",
    iconUrl: ipsMobApp,
    link: "https://apps.apple.com/us/app/ips-mobapp-s/id6443954470",
    description:
      "I played a key role in developing and maintaining features for the web, tablet, and mobile versions. Additionally, I actively contributed to optimizing the offline mode functionality of an app designed for global electrical power utility field crews.",
  },
  {
    name: "IPS® Advanced Scheduling",
    theme: "btn-back",
    iconUrl: ipsMobApp,
    description:
      "I significantly contributed to this web-based application for simplifying work scheduling and dynamically assigning tasks based on resource availability. My role involved adding features, addressing user needs, and collaborating for a seamless and efficient scheduling experience.",
    link: "https://www.ips-energy.com/en/products-solutions/ips-advanced-scheduling-module/",
  },
  {
    name: "IPS-Notifier",
    theme: "btn-back",
    description:
      "Single-handedly, I constructed this application from the ground up, ensuring compatibility with both iOS and Android. Its primary function revolves around on-site malfunction tracking.",
    iconUrl: ipsNotifier,
    link: "https://apps.apple.com/us/app/ips-notifier/id6446323860",
  },
  // { name: "LostAndFoundDog", theme: "btn-back-blue" },
];
