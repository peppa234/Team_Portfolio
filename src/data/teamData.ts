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
        title: "Resource Optimization System",
        description:
          "A full stack AI system that optimizes the management of resources : water, fertilizer, irrigation in smart farming, minimizing resource usage while maximizing crop yield and maintaining crop health.",
      },
      {
        id: 2,
        title: "Predictive Maintenance System",
        description:
          "An AI system that monitors aircraft sensors in real time, detects early anomalies, and provides predictive maintenance alerts. It suggests solutions to pilots, prevents failures before they occur, and enhances overall flight safety.",
      },
    ],
    contactInfo: {
      github: "https://github.com/chaimataberkokt",
      linkedin: "https://www.linkedin.com/in/chaima-taberkokt-750b242b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "chaima.taberkokt@ensia.edu.dz",
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

