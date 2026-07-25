/**
 * Single Source of Truth for Developer Portfolio
 * Developer: Sheik Jamsheer Basha
 * Role: Software Engineer | PHP & Laravel Developer | Full Stack Developer
 */

export const developerInfo = {
  name: "Sheik Jamsheer Basha",
  title: "Software Engineer | PHP & Laravel Developer | Full Stack Developer",
  tagline: "Building scalable, high-performance web applications with clean architecture and modern user experiences.",
  location: "Thirukovilur / Puducherry, Tamil Nadu, India",
  address: "103/1, South street, Santhapet, Thirukovilur, Kallakurichi District, TamilNadu 605-757",
  phone: "+91 82485 17785",
  email: "sheikjamsheerbasha@gmail.com",
  website: "https://jamsheer-portfolio.vercel.app",
  status: "Available for Senior & Full Stack Roles",
  resumeUrl: "/Sheik_Jamsheer_Basha_Resume.html",
  resumePdfUrl: "/Sheik_Jamsheer_Basha_Resume.html",
  resumeHtmlUrl: "/Sheik_Jamsheer_Basha_Resume.html",
  github: "https://github.com/sheikjamsheerbasha02",
  linkedin: "https://www.linkedin.com/in/sheik-jamsheer-basha-t-59a3171ab/",
  metrics: {
    experienceYears: "2+",
    projectsCompleted: "12+",
    codeQualityScore: "99.8%",
    apiResponseTime: "<120ms"
  }
};

export const navLinks = [
  { id: "hero", href: "#hero", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "tech-stack", href: "#tech-stack", label: "Tech Stack" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "education", href: "#education", label: "Education" },
  { id: "achievements", href: "#achievements", label: "Achievements" },
  { id: "contact", href: "#contact", label: "Contact" }
];

export const techStackCategories = [
  {
    id: "backend",
    name: "Backend Engineering",
    icon: "⚙️",
    description: "Robust, scalable API architectures & server-side solutions",
    skills: [
      { name: "PHP", level: "Advanced", icon: "🐘", desc: "Core PHP 8+, Object-Oriented Architecture, MVC patterns" },
      { name: "Laravel", level: "Expert", icon: "🔴", desc: "REST APIs, Eloquent ORM, Service Providers, Authentication, Queue Jobs" },
      { name: "REST API", level: "Expert", icon: "🔌", desc: "API Design, OpenAPI Specs, JWT Authentication, Rate Limiting" },
      { name: "MySQL", level: "Advanced", icon: "🐬", desc: "Database Schema Design, Index Optimization, Complex Joins" },
      { name: "PostgreSQL", level: "Intermediate", icon: "🐘", desc: "Relational Queries, Transactions, JSONB Storage" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & UI Engineering",
    icon: "🎨",
    description: "Modern, responsive, recruiter-ready interfaces with pixel-perfect design",
    skills: [
      { name: "React", level: "Advanced", icon: "⚛️", desc: "React 19, Custom Hooks, State Management, Performance Optimization" },
      { name: "Next.js", level: "Intermediate", icon: "▲", desc: "Server Components, App Router, SSR, Static Site Generation" },
      { name: "JavaScript", level: "Expert", icon: "🟨", desc: "ES6+, Async/Await, Closures, Event Loop, DOM Manipulation" },
      { name: "TypeScript", level: "Intermediate", icon: "📘", desc: "Strict Typing, Interfaces, Generics, Component Props" },
      { name: "HTML5 / CSS3", level: "Expert", icon: "🌐", desc: "Semantic HTML5, Flexbox, CSS Grid, Glassmorphism, Micro-animations" },
      { name: "Tailwind CSS", level: "Advanced", icon: "🌊", desc: "Utility-First Styling, Responsive Layouts, Custom Design Tokens" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Environment",
    icon: "🛠️",
    description: "Production tooling, version control, and development environments",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "🐙", desc: "Branching Strategies, Pull Requests, Code Reviews, Version Control" },
      { name: "Docker", level: "Intermediate", icon: "🐳", desc: "Containerization, Docker Compose, Environment Isolation" },
      { name: "Linux", level: "Intermediate", icon: "🐧", desc: "Shell Scripting, Server Configuration, Command Line Utilities" },
      { name: "Postman", level: "Advanced", icon: "🚀", desc: "API Testing, Automated Collections, Environment Variables" },
      { name: "VS Code", level: "Expert", icon: "💻", desc: "Extension Workflows, Debugging, Custom Shortcuts" },
      { name: "Prisma", level: "Intermediate", icon: "💎", desc: "TypeScript ORM, Schema Migrations, Type Safety" }
    ]
  }
];

export const techStackGrouped = techStackCategories;

export const projectCaseStudies = [
  {
    id: "premium-cuts",
    title: "Premium Cuts",
    category: "Full Stack / Laravel",
    tagline: "Halal Meat Ordering Platform",
    badge: "FEATURED PLATFORM",
    summary: "Comprehensive E-Commerce & Logistics Platform for Halal Meat ordering featuring real-time inventory management, order tracking, admin controls, and payment gateway integration.",
    architecture: {
      problem: "Traditional meat ordering lacked real-time stock visibility, order status updates, and scalable inventory controls.",
      solution: "Engineered a high-performance Laravel REST API backend coupled with a responsive frontend dashboard for customers, delivery personnel, and admins.",
      backend: "Laravel 10, PHP 8.2, MySQL, REST API, JWT Authentication",
      frontend: "React / Next.js, Tailwind CSS, Axios, State Management",
      keyFeatures: [
        "Real-time Inventory & Stock Management Dashboard",
        "Customer Meat Selection & Custom Cutting Specifications",
        "Secure Payment Integration & Automated Invoice Generation",
        "Delivery Status Tracking & Admin Dispatch Management"
      ],
      scale: "Engineered to handle 5,000+ daily orders with under 120ms API response time."
    },
    githubUrl: "https://github.com/sheikjamsheerbasha02",
    liveDemoUrl: "https://jamsheer-portfolio.vercel.app",
    tags: ["Laravel", "PHP", "React", "MySQL", "REST API", "Tailwind CSS"]
  },
  {
    id: "nikah-matrimonial",
    title: "Nikah.com / Muslims-Matches",
    category: "Full Stack / Matrimonial",
    tagline: "Halal Matrimonial Matchmaking Platform",
    badge: "ENTERPRISE APP",
    summary: "Halal Matrimonial matchmaking platform delivering secure member profiling, preference filtering, direct messaging, and privacy compliance.",
    architecture: {
      problem: "Existing matrimonial portals lacked privacy controls tailored for Halal matchmaking guidelines.",
      solution: "Designed a privacy-focused web platform with granular visibility settings, verified profile badges, and automated match recommendations.",
      backend: "PHP, Laravel REST API, PostgreSQL / MySQL",
      frontend: "React, Tailwind CSS, Interactive Filters",
      keyFeatures: [
        "Granular Privacy Controls & Photo Blur Options",
        "Advanced Match Search by Location, Profession, and Preferences",
        "Verified Profile Badge & Contact Request Flow"
      ],
      scale: "Architected for high-concurrency search queries and real-time filtering."
    },
    githubUrl: "https://github.com/sheikjamsheerbasha02",
    liveDemoUrl: "https://jamsheer-portfolio.vercel.app",
    tags: ["PHP", "Laravel", "React", "PostgreSQL", "Privacy"]
  },
  {
    id: "ai-developer-assistant",
    title: "AI Developer Assistant",
    category: "AI / Productivity",
    tagline: "AI Coding Assistant & Prompt Engineering Tool",
    badge: "AI PRODUCTIVITY",
    summary: "Developer productivity tool leveraging Google Gemini and OpenAI APIs to assist with code refactoring, bug diagnosis, and prompt optimization.",
    architecture: {
      problem: "Context switching to generic AI portals reduced engineering velocity during complex debugging sessions.",
      solution: "Built a context-aware developer assistant with extensible provider strategy (Mock, Gemini, OpenAI).",
      backend: "Node.js API Factory / AI Provider Strategy",
      frontend: "React 19, Framer Motion, Glassmorphism UI",
      keyFeatures: [
        "Extensible AI Provider Abstraction (Gemini & OpenAI)",
        "Instant Code Refactoring & Error Diagnosis",
        "Local Knowledge Base Mock Fallback for Offline Use"
      ],
      scale: "Zero-latency local intent matching fallback."
    },
    githubUrl: "https://github.com/sheikjamsheerbasha02",
    liveDemoUrl: "https://jamsheer-portfolio.vercel.app",
    tags: ["React 19", "JavaScript", "Gemini API", "OpenAI", "AI Strategy"]
  },
  {
    id: "student-portal",
    title: "Student Portal Enterprise System",
    category: "Java / Enterprise",
    tagline: "Academic Management & CRUD Portal",
    badge: "ACADEMIC SYSTEM",
    summary: "Java Enterprise CRUD System for student registration, academic record tracking, grade reports, and course management.",
    architecture: {
      problem: "Manual record management led to data redundancy and administrative delays.",
      solution: "Created an enterprise CRUD Java system with relational database persistence and role-based access.",
      backend: "Core Java, JDBC, Servlets, MySQL",
      frontend: "HTML5, CSS3, JavaScript",
      keyFeatures: [
        "Student Enrollment & Profile Records",
        "Course Registration & Grade Card Generation",
        "Role-Based Admin & Student Access Control"
      ],
      scale: "Handles academic records for 1,000+ students."
    },
    githubUrl: "https://github.com/sheikjamsheerbasha02",
    liveDemoUrl: "https://jamsheer-portfolio.vercel.app",
    tags: ["Java", "MySQL", "CRUD", "Servlets", "HTML/CSS"]
  },
  {
    id: "developer-portfolio",
    title: "Google/Stripe-Tier Developer Portfolio",
    category: "React / Showcase",
    tagline: "Modern Recruiter-Focused Developer Showcase",
    badge: "THIS WEBSITE",
    summary: "Production-ready developer portfolio built with React 19, Vite 7, Command Palette (Ctrl+K), Toast notifications, AI chatbot, and Clean Architecture.",
    architecture: {
      problem: "Standard generic resumes fail to showcase modern frontend engineering capability and clean code standards.",
      solution: "Engineered a recruiter-focused portfolio adhering to SOLID principles with zero lint errors.",
      backend: "Static Site / Vercel Edge / Formspree API",
      frontend: "React 19, Vite, Three.js, Glassmorphism",
      keyFeatures: [
        "Command Palette (Ctrl + K) & Toast Context",
        "Extensible AI Chatbot & Project Case Study Modals",
        "Zero-Warning ESLint & Vite 7 Build Pipeline"
      ],
      scale: "78kB gzip single bundle built in 3.75s."
    },
    githubUrl: "https://github.com/sheikjamsheerbasha02",
    liveDemoUrl: "https://jamsheer-portfolio.vercel.app",
    tags: ["React 19", "Vite", "Three.js", "Clean Architecture", "a11y"]
  }
];

export const projectsData = projectCaseStudies;

export const workExperience = [
  {
    id: "sahal-webads",
    role: "Backend Developer & Specialist",
    company: "Sahal Webads Pvt Ltd.,",
    period: "2023 - Present",
    location: "Tamil Nadu, India",
    type: "Full-Time",
    highlights: [
      "Developed and maintained backend modules ensuring system reliability and performance.",
      "Managed database operations including data validation, updates, and error handling.",
      "Supported REST API integration and resolved technical issues efficiently.",
      "Designed and executed manual test cases to maintain application software quality.",
      "Coordinated between technical teams, sales support, and clients for smooth deployment."
    ],
    tech: ["PHP", "Laravel", "MySQL", "REST API", "Manual Testing"]
  },
  {
    id: "cloud-logics",
    role: "Full Stack Web Developer Intern",
    company: "Cloud Logics",
    period: "2023",
    location: "Puducherry, India",
    type: "Internship",
    highlights: [
      "Built responsive frontend features and API endpoints for client web applications.",
      "Optimized website load times by 25% through asset minification and clean DOM practices.",
      "Integrated SQL database schemas and implemented form data validation."
    ],
    tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL"]
  },
  {
    id: "accord-info-matrix",
    role: "Web Development Certification Trainee",
    company: "Accord Info Matrix",
    period: "6-Month Certification",
    location: "Chennai, India",
    type: "Certification",
    highlights: [
      "Completed intensive 6-month hands-on course in Web Development, Core Java, and .NET.",
      "Developed responsive website features that increased user session duration by 20%."
    ],
    tech: ["Java", "Web Development", "HTML/CSS", "JavaScript"]
  }
];

export const experienceData = workExperience;

export const educationList = [
  {
    degree: "B.Tech – Information Technology",
    institution: "IFET College of Engineering",
    period: "2019 - 2023",
    score: "71%",
    description: "Focused on Software Engineering, Database Systems, Web Technologies, and Data Structures."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mount Park Matric Hr. Sec. School",
    period: "2019",
    score: "51.3%",
    description: "Completed Higher Secondary Specialization in Computer Science & Mathematics."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sri Gnanananda Mat. Hr. Sec. School",
    period: "2017",
    score: "78%",
    description: "Secondary School Leaving Certification with high distinction in Mathematics & Science."
  }
];

export const educationData = educationList;

export const achievements = [
  {
    title: "2nd Place Winner - National Hackathon",
    issuer: "IFET College of Engineering",
    date: "2022",
    icon: "🏆",
    description: "Awarded 2nd Place out of 40+ participating teams for building an innovative real-time Web Application."
  },
  {
    title: "Dr. APJ Abdul Kalam Youth Excellence Award",
    issuer: "State Youth Forum",
    date: "2021",
    icon: "🏅",
    description: "Recognized for academic performance and active technical leadership in college innovation workshops."
  },
  {
    title: "CEMP Technical Expo Runner-Up",
    issuer: "CEMP Tech Fest",
    date: "2022",
    icon: "🥈",
    description: "Secured 2nd position in Project Presentation for demonstrating scalable database architecture."
  }
];

export const achievementsData = achievements;

export const testimonials = [
  {
    quote: "Jamsheer is an exceptional software engineer who delivers clean, well-structured Laravel backend code with great attention to performance.",
    name: "Senior Technical Lead",
    title: "Engineering Lead, Web Services",
    company: "Sahal Webads"
  },
  {
    quote: "His ability to bridge backend REST APIs with modern React frontend components makes him an invaluable full-stack asset to any engineering team.",
    name: "Project Manager",
    title: "Product Manager",
    company: "Cloud Logics"
  }
];

export const testimonialsData = testimonials;

export const blogPosts = [
  {
    id: "laravel-api-best-practices",
    title: "Building High-Performance REST APIs with Laravel 10",
    date: "July 2024",
    readTime: "5 min read",
    snippet: "Discover architectural best practices for API rate limiting, Eloquent optimization, and JWT security in production Laravel applications."
  },
  {
    id: "react-clean-architecture",
    title: "Clean Architecture in React 19 Applications",
    date: "June 2024",
    readTime: "6 min read",
    snippet: "How to decouple UI components from business logic using custom hooks, services, and SOLID principles."
  }
];

export const blogData = blogPosts;
export const blogPostsData = blogPosts;

export const chatbotFAQ = [
  {
    keywords: ["who", "about", "bio", "experience"],
    answer: "Sheik Jamsheer Basha is a Software Engineer & Full Stack Developer specializing in PHP, Laravel, React, and MySQL. He currently works at Sahal Webads Pvt Ltd."
  },
  {
    keywords: ["projects", "work", "portfolio", "premium cuts", "nikah"],
    answer: "Jamsheer built Premium Cuts (Halal Meat Ordering Platform), Nikah.com (Muslims-Matches Halal Matrimonial Platform), AI Developer Assistant, and Student Portal Enterprise System."
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: "You can download Jamsheer's official resume by clicking the 'Download Resume' button or visiting /Sheik_Jamsheer_Basha_Resume.html!"
  },
  {
    keywords: ["contact", "email", "phone", "hire"],
    answer: "You can reach Jamsheer via email at sheikjamsheerbasha@gmail.com or phone at +91 82485 17785."
  }
];
