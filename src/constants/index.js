import moody from "../assets/moody.png";
import trivia from "../assets/trivia.png";
import world from "../assets/world.png";
import volt from "../assets/volt.png"
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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FrontEnd Developer",
    icon: creator,
  },
    {
    title: "Web DevOps",
    icon: backend,
  },
    {
    title: "Content Creator ",
    icon: creator,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: web,
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
    title: "Sr. DevOps Engineer/SYNC4",
    company_name: "Ford Company",
    icon: starbucks,
    iconBg: "#383E56",
    date: "08/2024 – present",
    points: [
      "Managed the development and maintenance of SYNC4 software systems, ensuring seamless integration with TCU and GCU components, which ultimately enhanced overall system performance.",
      "Designed and maintained Jenkins pipelines for automated builds, testing, and deployments, significantly reducing manual effort and improving release timelines by streamlining processes.",
      "Created and updated essential documentation, including the Post-Release Processing Wiki, which ensured clarity and accessibility for future processes, helping the team adhere to standardized procedures.",
      "Managed crucial release tasks such as updating part numbers, consolidating manifests, and verifying build integrity across multiple systems, which helped maintain consistency and reliability in product delivery.",
      "Conducted thorough root cause analysis and resolved issues in Jenkins builds, ensuring error-free releases, which contributed to higher quality software and minimized downtime.",
      "Partnered with cross-functional teams to enhance workflows and resolve blockers, achieving consistent on-time delivery and improving collaboration across departments.",
    ],
  },
  {
    title: "Sr. DevOps Engineer /AWS",
    company_name: "The Kraft Heinz",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul-2020 – Jul-2024," ,
    points: [
      "Used AWS Cloud Formation templates to create custom sized EC2 instances, VPC, subnets, NAT, ELB and Security Groups.",
      "Migrated Oracle Databases from on-premises to AWS RDS- Oracle, Postgres, MySQL",
      "Working on the development changes to replace existing MongoDB with DynamoDB",
      "Created alarms and trigger points in CloudWatch based on thresholds and monitored the server's performance, CPU Utilization, disk usage and Utilized AWS CloudWatch services to monitor environment for operational & performance metrics during load testing.",
      "Developed a stream filtering system using Spark streaming on top of Apache Kafka.",
      "Designed Jenkins pipeline using Groovy for build creations using build tools like Cocoa pods and Gradle & Deploying the mobile apps in Hockey app for internal testing and TestFlight for preprod validation.",
      "Responsible for building scalable distributed data solutions using DataStax Cassandra.",
      "Worked on managing iOS MAC OS, Xcode upgrades and Android Build tools.",
      "Worked on CloudFront to deliver content from AWS edge locations to users, allowing for further reduction of load on front-end servers.",
      "Created a fully automated build and deployment Platform and coordinating code builds promotions and orchestrated deployments using Jenkins, Harness and GitHub.",      
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Beal Bank",
    icon: shopify,
    iconBg: "#383E56",
    date: "April-2018 – June-2020",
    points: [
      " Launched Amazon EC2 cloud instances using Amazon instances (Linux/Ubuntu) and configuring launched instances with respect to specific applications.",
      "Designed roles and groups using AWS identity and access management (IAM), and managed network using Security Groups, Network Access Control Lists with services provided by IAM.",
      "Used AWS Beanstalk for deploying and scaling web applications and services developed with Java, PHP, Node.js, Python, Ruby, and Docker on familiar servers such as Apache, and IIS.",
      "Worked on Jenkins file with multiple stages like checkout a branch, building the application, testing, pushing the image into GCR, Deploying to QA3, Deploying to QA9, Acceptance testing and finally Deploying to Prod Integration of ANT/Nexus, Jenkins, Urban Code Deploy with patterns/Release, GIT, Confluence, JIRA and Cloud Foundry.opers.",
      "Migrated the production infrastructure into an Amazon Web Services (AWS) VPC utilizing AWS CloudFormation, EC2, S3, Chef/OpsWorks, CloudWatch, CloudTrail, EBS, Route 53, IAM etc.",
      "Created S3 buckets and managed policies and utilized for S3 buckets. Utilized S3 bucket and Amazon Glacier for storage and backup on AWS.",
      " Designed Puppet architecture for Windows agents. Scripted and configured Puppet manifests for different scenarios based on node filters.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Ahold Delhaize",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan-2016 – Mar-2018",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
{
    name: "Project With (HTML,CSS,JavaScript)",
    description:
      "Curious explorer of logic puzzles turned creative coder. My background in mathematics fuels my passion for crafting efficient, scalable web solutions. Explore my projects—from apartment finders and dealership apps to interactive games—and check out my toolkit: HTML5, CSS, JavaScript, React, Node.js, databases like MongoDB and Firebase, and more.",
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
    image: carrent,
    source_code_link: "https://github.com/zaidfadel1989/Train-7_app.index",
  },

  {
    name: "Vape Project",
    description:
      "ManarProject – Vape Shop Template A clean and responsive single-page e-commerce template built using only HTML and CSS. Featuring a prominent hero section, product gallery, newsletter signup, and detailed footer with business contact info. Ideal for prototyping or launching a minimal viable web store.",
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
    image: jobit,
    source_code_link: "https://github.com/zaidfadel1989/Vape-Website",
  },
  
  {
    name: "AirVolt",
    description:
      "AirVolt is a fast, lightweight, and responsive web application built using React and Vite, designed to deliver a clean user experience with optimized performance. The project features a modern UI, organized components, dynamic content sections, and an efficient development setup suitable for scalable front-end applications.",
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
    image: volt,
    source_code_link: "https://github.com/zaidfadel1989/AirVolt",
  },

  {
    name: "Moody",
    description:
      "Moody Music – Curated Mood-Based Music & Reading Suggestions A clean and minimalist web experience that offers users personalized recommendations via two sections: “Moody Curated Playlist” and “Moody Book of the Day.” It likely leverages user mood input to dynamically serve tailored music and reading picks. This project showcases your ability to design intuitive interfaces, personalize content, and create a thoughtful user experience—even with limited visual elements.",
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
    image: moody,
    source_code_link: "https://github.com/zaidfadel1989/zaid-portfolio.index?tab=readme-ov-file",
  },
  {
  name: "Harry Potter Trivia Game",
  description:
    "Harry Potter Trivia Game – Engaging Web Quiz A playful and interactive Harry Potter–themed trivia game built using HTML, CSS, and JavaScript. Featuring a “Start” screen that transitions into a series of trivia questions, it highlights dynamic DOM manipulation, event handling, and a fun, theme-driven design.",
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
  image: trivia,
  source_code_link: "https://github.com/zaidfadel1989/my-portfolio1?tab=readme-ov-file",
},

  {
    name: "ChangeTheWorld",
    description:
      "ChangeTheWord – Rental Apartments Finder for Chicago A full-stack web application built with React (React Helmet, React Bootstrap, Font Awesome), Google Maps, and Airbnb APIs. Powered by a Node/Express backend with MongoDB, the app enables users to log in, search listings on the map, manage availability via calendar, post rentals, and handle payments—all tailored for Chicago-based apartment hunting.",
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
    image: world,
    source_code_link: "https://github.com/zaidfadel1989/ChangeTheWord",
  },
];

export { services, technologies, experiences, testimonials, projects };
