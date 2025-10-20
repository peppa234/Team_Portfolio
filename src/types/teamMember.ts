export interface TeamMember {
  slug: string;
  name: string;
  image: string;
  description: string;
  role: string;
  bio: string;
  technicalSkills: string[];
  professionalSkills: string[];
  projects: {
    id: number;
    title: string;
    description: string;
  }[];
  contactInfo: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

