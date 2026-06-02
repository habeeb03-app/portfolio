import { 
  Database, 
  Layout, 
  Terminal, 
  BrainCircuit
} from "lucide-react";

export const cvData = {
  personal: {
    name: "Habeebur Rahaman N",
    role: "AI & Full Stack Engineer",
    summary: "Aspiring Data Scientist and Software Engineer dedicated to transforming raw data into actionable insights and building intelligent systems. Proven track record in National Level competitions and developing AI-driven educational platforms.",
    dob: "February 15, 2007",
    address: "Arcot, Ranipet Dist, TN",
    phone: "+91 95979 33756",
    email: "habeebur.rahaman.vlr.03@gmail.com",
    linkedin: "https://www.linkedin.com/in/habeebur-rahman-511a4a332"
  },
  skills: [
    {
      category: "Core Languages",
      icon: Terminal,
      items: ["Python", "Java", "C/C++"]
    },
    {
      category: "Web & Architecture",
      icon: Layout,
      items: ["React JS", "Node.js", "Django", "HTML5/CSS3"]
    },
    {
      category: "Data Infrastructure",
      icon: Database,
      items: ["SQL", "MySQL", "MongoDB"]
    },
    {
      category: "AI & Analytics",
      icon: BrainCircuit,
      items: ["Machine Learning", "Data Analytics", "EDA", "Data Visualization"]
    }
  ],
  education: [
    {
      institution: "Kingston Engineering College",
      qualification: "B.Tech in Artificial Intelligence & Data Science",
      year: "2024 - 2028",
      score: "CGPA: 8.79"
    }
  ],
  certifications: [
    {
      title: "Data Science Using Python",
      issuer: "SWAYAM MHRD",
      date: "Oct 2025",
      details: "Score: 87% | Elite"
    },
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL / IIT Roorkee",
      date: "Apr 2026",
      details: "Score: 75% | Elite"
    },
    {
      title: "Honors Diploma in Full Stack Dev",
      issuer: "CSC",
      date: "Oct 2024",
      details: ""
    }
  ],
  achievements: [
    "1st Place – National Technical Quiz, INFRONIX 2026",
    "1st Place – National Mathematics Day Paper Presentation"
  ],
  projects: [
    {
      title: "ARIA",
      category: "AI / Education Technology",
      status: "Featured",
      description: "An AI-powered English speaking assistant designed to help users improve spoken English through interactive voice conversations, real-time feedback, and personalized communication training.",
      technologies: ["AI", "Speech Recognition", "NLP", "Voice Interfaces", "React", "Node.js"]
    },
    {
      title: "CodeMentorAI",
      category: "AI / Education Technology",
      status: "In Development",
      description: "An intelligent platform engineered to bridge critical gaps in technical education by providing AI-driven mentorship and real-time code analysis.",
      technologies: ["Python", "Flask", "JavaScript", "NVIDIA NIM API", "HuggingFace"]
    }
  ]
};
