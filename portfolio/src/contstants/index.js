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
} from "../assets";
import { linkedln,leetcode } from "../assets/sociallink";
import {deepak,harsh,jiwan} from '../assets/testimonials';
import {interbiz,leadangel } from '../assets/company/index.js'

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
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name : 'MYSQL',
    icon : mysql
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Software Developer",
    company_name: "LeadAngel ",
    icon: leadangel,
    iconBg: "#383E56",
    date: "July 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Development Intern",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const socialLinks=[
  {
   icon : linkedln,
   link : 'https://www.linkedin.com/in/shiv3923/',
   title:'Linkedln'
  },
  {
    icon:github,
    link:'https://github.com/Shiv392',
    title:'GitHub'
  },
  {
    icon:leetcode,
    link:'https://leetcode.com/u/Shiv3923/',
    title:'Leetcode'
  }
]

export { services, technologies, experiences, testimonials, projects, socialLinks };