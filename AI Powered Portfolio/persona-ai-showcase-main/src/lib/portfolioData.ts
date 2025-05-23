
export const personalInfo = {
  name: "Alex Johnson",
  title: "AI Engineer | Full Stack Developer | Innovator",
  email: "alex.johnson@example.com",
  location: "San Francisco, CA",
  bio: `I'm an AI Engineer and Full Stack Developer with a passion for building intelligent and user-friendly applications. With a background in Computer Science and several years of industry experience, I specialize in developing AI-driven solutions that solve real-world problems.

When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or diving into a good science fiction book. I'm always excited to connect with fellow tech enthusiasts and explore new opportunities for collaboration.`,
  avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  resumeUrl: "#", // Replace with actual URL for your resume download
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", proficiency: 95 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Go", proficiency: 70 },
      { name: "Rust", proficiency: 60 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "TensorFlow", proficiency: 80 },
      { name: "PyTorch", proficiency: 85 },
      { name: "Node.js", proficiency: 75 },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Natural Language Processing", proficiency: 90 },
      { name: "Computer Vision", proficiency: 80 },
      { name: "LLMs & Transformers", proficiency: 85 },
      { name: "Reinforcement Learning", proficiency: 70 },
      { name: "MLOps", proficiency: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 80 },
      { name: "AWS", proficiency: 75 },
      { name: "GCP", proficiency: 70 },
      { name: "Kubernetes", proficiency: 65 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "A web application that uses state-of-the-art language models to generate high-quality content based on user prompts and preferences.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Finance Dashboard",
    description: "A comprehensive financial analytics dashboard that helps users track expenses, set budgets, and visualize spending patterns over time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    techStack: ["Next.js", "TypeScript", "Chart.js", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Computer Vision Object Detector",
    description: "A real-time object detection system that uses computer vision algorithms to identify and track objects in video streams with high accuracy.",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "E-commerce Recommendation Engine",
    description: "An AI-powered recommendation system that analyzes user behavior and preferences to suggest personalized products in real-time.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    techStack: ["Python", "PyTorch", "FastAPI", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Smart Home Automation System",
    description: "A comprehensive IoT solution that integrates various smart devices and provides an intuitive interface for home automation.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    techStack: ["React", "Node.js", "MQTT", "Raspberry Pi"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain-based Voting Platform",
    description: "A secure and transparent voting system built on blockchain technology to ensure integrity and immutability of electoral processes.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    techStack: ["Solidity", "React", "Ethereum", "Web3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const experiences = [
  {
    company: "TechInnovate AI",
    position: "Senior AI Engineer",
    period: "2022 - Present",
    description: "Lead the development of large language model applications, optimize model performance, and collaborate with cross-functional teams to implement AI solutions across various business units.",
    achievements: [
      "Developed a custom transformer-based summarization model that improved accuracy by 35%",
      "Led a team of 5 engineers to deploy an AI-powered customer service chatbot, reducing support tickets by 40%",
      "Implemented MLOps practices that reduced model deployment time from weeks to days"
    ]
  },
  {
    company: "DataDrive Solutions",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Designed and developed web applications with a focus on data visualization and analytics dashboards. Worked closely with data scientists to implement machine learning features.",
    achievements: [
      "Built a real-time analytics dashboard using React and D3.js that is now used by over 500 clients",
      "Improved application performance by 60% through code optimization and database refactoring",
      "Implemented CI/CD pipelines that reduced deployment errors by 75%"
    ]
  },
  {
    company: "GrowthTech Startups",
    position: "Software Engineer Intern",
    period: "2019 - 2020",
    description: "Assisted in developing frontend components and backend services for a SaaS platform. Participated in all phases of the software development lifecycle.",
    achievements: [
      "Developed a reusable component library that increased development speed by 30%",
      "Contributed to an open-source project with over 1,000 stars on GitHub",
      "Created automated testing suites that caught 15 critical bugs before production"
    ]
  }
];

export const education = [
  {
    institution: "Stanford University",
    degree: "Master of Science in Computer Science",
    specialization: "Artificial Intelligence",
    period: "2018 - 2020",
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    specialization: "Software Engineering",
    period: "2014 - 2018",
  }
];

export const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021",
  },
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    name: "Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2021",
  }
];

export const chatbotPrompts = [
  "Tell me about your AI projects",
  "What frameworks do you work with?",
  "Describe your work experience",
  "What are your top skills?",
  "Tell me about your education"
];
