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
    name: "Aicha Brihmouche",
    image: "/Aicha.png",
    description: "A 3rd Year AI student | Associtae Data Sceintist | Web Developer | Graphic & UIUX Designer",
    role: "Team Leader",
    bio: "Graphic and UI/UX Designer, Web Developer, and Associate Data Scientist. I'm currently studying Artificial Intelligence at ENSIA.",
    technicalSkills: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Nextjs",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    professionalSkills: [
      "Effective Communication",
      "Data analysis",
      "Agile methodology",
      "Problem solving",
      "Leadership",
    ],
    projects: [
      {
        id: 1,
        title: "7wess – AI Touristic App",
        description:
          "Trip planning assistant using AI Algorithms for 7-day itineraries."},
      {
        id: 2,
        title: "Student Portal Platform",
        description:
          "A modern, full-stack school management application built with Node.js, Express, MongoDB, React, and TypeScript. This comprehensive system provides administrators with complete tools to manage students, teachers, classes, and subjects through a beautiful, responsive interface."},
    ],
    contactInfo: {
      github: "https://github.com/peppa234",
      linkedin: "https://www.linkedin.com/in/aicha-brihmouche-a51730300/",
      email: "aichabrihmouche@gmail.com",
    },
  },
  {
    slug: "mohamed",
    name: "Mohamed",
    image: "/Mohamed.png",
    description: "A 3rd Year AI student passionate about AI",
    role: "Backend Developer",
    bio: "Specialized in building scalable backend systems and APIs. I focus on performance optimization, security, and creating robust server-side applications.",
    technicalSkills: [
      "Java",
      "Spring Boot",
      "Python",
      "SQL",
      "PostgreSQL",
      "Redis",
      "Microservices",
      "AWS",
    ],
    professionalSkills: [
      "System design",
      "Database optimization",
      "Security practices",
      "Team work",
      "Debugging",
    ],
    projects: [
      {
        id: 1,
        title: "API Gateway Service",
        description:
          "A high-performance API gateway that handles authentication, rate limiting, and request routing for microservices architecture with comprehensive logging and monitoring.",
      },
      {
        id: 2,
        title: "Real-time Chat System",
        description:
          "A scalable real-time messaging system built with WebSockets, supporting group chats, file sharing, and presence indicators with end-to-end encryption.",
      },
    ],
    contactInfo: {
      github: "https://github.com/mohamed",
      linkedin: "https://linkedin.com/in/mohamed",
      email: "mohamed@example.com",
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

