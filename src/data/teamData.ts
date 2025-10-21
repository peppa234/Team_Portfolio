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
    description: "AI Student, and Entrepreneur building creative tech experiences",
    role: "Founder & Creative Director at Zidny | AI Student",
    bio: "An entrepreneur passionate about blending art, technology, and education. As the founder of Zidny, I lead projects that empower youth through creativity, innovation, and learning. With a background in AI and storytelling, I bring emotion and clarity into everything I design, film, or build.",
    technicalSkills: [
      "Figma",
      "After Effects",
      "React",
      "Tailwind CSS",
      "CSS3",
      "Animation",
      "Responsive Design",
    ],
    professionalSkills: [
      "Leadership",
      "Storytelling",
      "Public Speaking",
      "Marketing Strategy",
      "Team Management",
      "Creative Problem Solving",
    ],
    projects: [
      {
      id: 1,
      title: "Zidny",
      description:
        "An educational and creative startup that empowers young people to learn, grow, and create through digital innovation, workshops, and storytelling.",
    },

    ],
    contactInfo: {
      github: "https://github.com/WanisHADJMOHAMMED",
      linkedin: "https://www.linkedin.com/in/wanis-hadj-mohammed-35992233b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "wanishadjmohammed@gmail.com",
    },
  },
];

export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  return teamMembers.find((member) => member.slug === slug);
};

