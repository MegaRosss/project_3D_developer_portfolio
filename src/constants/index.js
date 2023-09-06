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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tranter,
  tesla,
  shopify,
  carrent,
  sassdashboard,
  jobit,
  clubbers,
  spacity,
  harpenin,
  tripguide,
  landingpage,
  web3shirt,
  threejs,
  myimage,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
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
    title: "Intern",
    company_name: "Tranter-IT & IOT Africa",
    icon: tranter,
    iconBg: "#FFFFFF",
    date: "May 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using Express.js, Postgresql, Graphql and other related technologies.",
      "Collaborating with cross-functional teams including  product managers, and other developers to create high-quality products.",
      "Working on internal company tools that increased the productity of the sales department by 10%",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Clubbers Store",
    icon: clubbers,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using Express.js and other related technologies.",
      "Collaborating with cross-functional teams including front-end developers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "SpaCity",
    icon: spacity,
    iconBg: "#bbedc9",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Harpenin",
    icon: harpenin,
    iconBg: "#888a89",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Micheal proved me wrong.All i have to say is a quote from Micheal 'he his him'",
    name: "Ye",
    designation: "CEO",
    company: "Yeezy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },

  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like micheal does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Micheal optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const Images = {
    myimage: myimage
  }

const projects = [
  {
    name: "Sass-Dashboard",
    description:
      "This is a dashboard thats targeted to any e-commerce or service based business to track daily sales and with the integrated analytics helps business make better business descions",
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
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Google analytics",
        color: "pink-text-gradient",
      },
    ],
    image: sassdashboard,
    source_code_link: "https://sass-dashboard.onrender.com",
  },
  {
    name: "CNFTSHIRT",
    description:
      "Web application that enables users to connect there nft wallets to the web app allowing them to create custom designs with there nft collections, and also allows them to create new nfts using there custom shirts .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: web3shirt,
    source_code_link: "https://web3shirt.onrender.com",
  },
  {
    name: "Landing-page",
    description:
      "This is a design startup for startups, this contains amazing animations that brings the site to life, the project is in progress and will continue to get updates later on",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: landingpage,
    source_code_link: "https://megarosss-landing-page.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects, Images };
