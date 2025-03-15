import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mysql,
  mongodb,
  git,
  figma,
  linux,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  LeadAngel,
  LeadAngelCalendar,
  ExpanseTracker
} from "../assets";
import { linkedln,leetcode,resume2,resume } from "../assets/sociallink";
import {deepak,harsh,jiwan} from '../assets/testimonials';
import {interbiz,leadangel } from '../assets/company/index.js';


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:'skills',
    title:'Skills'
  },
  {
    id:'projects',
    title:'Projects'
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    experiences : `2 years`
  },
  {
    name: "CSS 3",
    icon: css,
    experiences : `2 years`
  },
  {
    name: "JavaScript",
    icon: javascript,
    experiences : `2 years`
  },
  {
    name: "TypeScript",
    icon: typescript,
    experiences : `2 years`
  },
  {
    name: "React JS",
    icon: reactjs,
    experiences : `2 years`
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    experiences : `2 years`
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    experiences : `2 years`
  },
  {
    name: "Node JS",
    icon: nodejs,
    experiences : `2 years`
  },
  {
    name : 'MYSQL',
    icon : mysql,
    experiences : `2 years`
  },
  {
    name: "MongoDB",
    icon: mongodb,
    experiences : `2 years`
  },
  {
    name: "git",
    icon: git,
    experiences : `2 years`
  },
  {
    name: "Linux",
    icon: linux,
    experiences : `2 years`
  },
  {
    name: "docker",
    icon: docker,
    experiences : `2 years`
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Arosys Technologies Pvt Ltd ",
    icon: leadangel,
    iconBg: "#383E56",
    date: "July 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    link : 'https://www.linkedin.com/company/arosys-technologies-p-ltd/'
  },
  {
    title: "Software Intern",
    company_name: "Interbiz Software Consulting",
    icon: interbiz,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    link : "https://www.linkedin.com/company/interbiz-consulting-pvt-ltd/"
  }
];

const testimonials = [
  {
    testimonial:
      "He is just amazing as he created SaaS application for Lead routing and management by using limited resource with top level security features ",
    name: "Deepak Kumar",
    designation: "CEO",
    company: "LeadAngel",
    image: deepak,
    linkedlnlink:'https://www.linkedin.com/in/hellodeepak/'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client needs and their future perspective success like Shiv does.",
    name: "Jiwan Kumar",
    designation: "Product Manager",
    company: "LeadAngel",
    image: jiwan,
    linkedlnlink: 'https://www.linkedin.com/in/jiwan-nishad-a5ab6385/'
  },
  {
    testimonial:
      "I thought it was impossible to make a web application as beautiful as our product, but Shiv proved me wrong.",
    name: "Harsh Janghel",
    designation: "UI/UX Lead",
    company: "LeadAngel",
    image: harsh,
    linkedlnlink:'https://www.linkedin.com/in/harsh-janghel-8b39732a4/'
  },
];

const projects = [
  {
    name: "LeadAngel",
    description:
      "Web-based SaaS application integrated with popular CRM applications inlcuding SalesForece, Hubspot, Dynamics, for lead routing and lead management.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Node.JS",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: LeadAngel,
    source_code_link: "https://www.leadangel.com",
    isLive : true
  },
  {
    name: "LeadAngel Calendar",
    description:
      "LeadAngel calendar is a SaaS application helps clients to schedule, book, reschedule events with their respectives sales person for B2B business events.",
    tags: [
      {
        name: "React.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: LeadAngelCalendar,
    source_code_link: "https://www.leadangel.com",
    isLive : true
  },
  {
    name: "Expanse Tracker",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React.JS",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ExpanseTracker,
    source_code_link: "https://github.com/Shiv392/full_stack_expanse_tracker_with-jwt_auth",
    isLive : false
  },
];

const socialLinks=[
  {
   icon : linkedln,
   link : 'https://www.linkedin.com/in/shiv3923/',
   title:'Linkedln',
   isDownload : false
  },
  {
    icon:github,
    link:'https://github.com/Shiv392',
    title:'GitHub',
    isDownload : false
  },
  {
    icon:leetcode,
    link:'https://leetcode.com/u/Shiv3923/',
    title:'Leetcode',
    isDownload : false
  },
  {
    icon:resume,
    link:'https://www.google.com',
    title:'Resume',
    isDownload : true
  }
]

export { services, technologies, experiences, testimonials, projects, socialLinks };