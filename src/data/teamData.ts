import { TeamMember } from "../types/teamMember";

export const teamMembers: TeamMember[] = [
  {
    slug: "chaima",
    name: "Chaima",
    image: "/Chaima.png",
    description: "A 3rd Year AI student passionate about AI",
    role: "Web & Python Developer",
    bio: "I'm Chaima Taberkokt, a Web developer and Python developer who enjoys designing and building modern and responsive websites. I like using Python to solve problems and automate tasks, and I'm always learning new technologies to improve my work and create practical, easy-to-use projects.",
    technicalSkills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "PHP",
      "Data Analysis",
      "Python",
      "UI/UX design",
    ],
    professionalSkills: [
      "Problem solving",
      "Team work",
      "Communication",
      "Time management",
      "Creativity",
    ],
    projects: [
      {
        id: 1,
        title: "Portfolio Website",
        description:
          "A modern, responsive portfolio website built with React and TypeScript, showcasing team members and their individual portfolios with seamless navigation and beautiful UI/UX design.",
      },
      {
        id: 2,
        title: "Data Analysis Dashboard",
        description:
          "An interactive dashboard for visualizing and analyzing complex datasets using Python, Pandas, and modern data visualization libraries with real-time updates and filtering capabilities.",
      },
    ],
    contactInfo: {
      github: "https://github.com/chaima",
      linkedin: "https://linkedin.com/in/chaima",
      email: "chaima@example.com",
    },
  },
  {
    slug: "wassim",
    name: "Wassim",
    image: "/Wassim.png",
    description: "A 3rd Year AI student passionate about AI",
    role: "AI & Machine Learning Engineer",
    bio: "Passionate about artificial intelligence and machine learning, I specialize in developing intelligent systems and algorithms. My focus is on creating practical AI solutions that solve real-world problems.",
    technicalSkills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Neural Networks",
      "Computer Vision",
    ],
    professionalSkills: [
      "Research",
      "Problem solving",
      "Analytical thinking",
      "Team collaboration",
      "Technical writing",
    ],
    projects: [
      {
        id: 1,
        title: "Image Recognition System",
        description:
          "An advanced computer vision system that uses deep learning to recognize and classify objects in images with high accuracy, deployed as a scalable web service.",
      },
      {
        id: 2,
        title: "Predictive Analytics Model",
        description:
          "A machine learning model that predicts trends and patterns from historical data, helping businesses make data-driven decisions with confidence intervals and explanations.",
      },
    ],
    contactInfo: {
      github: "https://github.com/wassim",
      linkedin: "https://linkedin.com/in/wassim",
      email: "wassim@example.com",
    },
  },
  {
    slug: "aicha",
    name: "Aicha",
    image: "/Aicha.png",
    description: "A 3rd Year AI student passionate about AI",
    role: "Full Stack Developer",
    bio: "A versatile full-stack developer with expertise in both frontend and backend technologies. I enjoy creating seamless user experiences and robust backend systems.",
    technicalSkills: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Docker",
    ],
    professionalSkills: [
      "Full-stack development",
      "Code review",
      "Agile methodology",
      "Problem solving",
      "Leadership",
    ],
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform with user authentication, payment integration, inventory management, and real-time order tracking built with modern web technologies.",
      },
      {
        id: 2,
        title: "Social Media Dashboard",
        description:
          "A comprehensive social media management dashboard that aggregates data from multiple platforms, providing analytics and scheduling capabilities for content creators.",
      },
    ],
    contactInfo: {
      github: "https://github.com/aicha",
      linkedin: "https://linkedin.com/in/aicha",
      email: "aicha@example.com",
    },
  },
  {
    slug: "mohamed",
    name: "Mohamed",
    image: "/Mohamed.png",
    description: "A 3rd Year ENSIA Student & Passionate Developer",
    role: "Frontend Developer",
    bio: "Frontend Developer specializing in React, JavaScript, and modern CSS. Passionate about creating intuitive user interfaces, responsive designs, and optimizing user experiences across all devices and browsers.",
    technicalSkills: [
      "C++",
      "Java Script",
      "Python",
      "SQL",
      "React",
      "Git",
    ],
    professionalSkills: [
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Critical Thinking",
      "Adaptability",
    ],
    projects: [
      {
        id: 1,
        title: "Algerian Freelance Marketplace",
        description:
          "A Fiverr-inspired platform connecting Algerian freelancers with local clients. Search and book services across various categories within Algeria.",
      },
      {
        id: 2,
        title: " Daily Food Recommendations",
        description:
          "AI-powered daily food recommendations based on your preferences, dietary needs, and local ingredients availability.",
      },
    ],
    contactInfo: {
      github: "https://github.com/kecir-mohamed",
      linkedin: "https://www.linkedin.com/in/kecir-mohamed-154606320/",
      email: "mohamed.kecir@ensia.edu.dz",
    },
  },
  {
    slug: "wanis",
    name: "Wanis",
    image: "/Wanis.png",
    description: "A 3rd Year AI student passionate about AI",
    role: "UI/UX Designer & Frontend Developer",
    bio: "A creative designer and developer who bridges the gap between design and code. I create beautiful, intuitive interfaces that users love.",
    technicalSkills: [
      "Figma",
      "Adobe XD",
      "React",
      "Tailwind CSS",
      "CSS3",
      "JavaScript",
      "Animation",
      "Responsive Design",
    ],
    professionalSkills: [
      "User research",
      "Prototyping",
      "Visual design",
      "Collaboration",
      "Attention to detail",
    ],
    projects: [
      {
        id: 1,
        title: "Design System",
        description:
          "A comprehensive design system with reusable components, design tokens, and documentation that ensures consistency across all team projects and accelerates development.",
      },
      {
        id: 2,
        title: "Mobile App UI",
        description:
          "An elegant mobile application interface with smooth animations and intuitive navigation, designed with user-centered principles and extensive user testing.",
      },
    ],
    contactInfo: {
      github: "https://github.com/wanis",
      linkedin: "https://linkedin.com/in/wanis",
      email: "wanis@example.com",
    },
  },
];

export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  return teamMembers.find((member) => member.slug === slug);
};

