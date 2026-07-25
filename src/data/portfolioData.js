import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

export const developerInfo = {
  name: "Sheik Jamsheer Basha",
  shortName: "Jamsheer",
  role: "Software Engineer | PHP & Laravel Developer | Full Stack Developer",
  location: "Thirukovilur / Puducherry, Tamil Nadu, India",
  languages: ["English", "Tamil"],
  status: "Available for Senior / Full Stack Roles",
  avatar: img1,
  resumeUrl: "#contact", // Triggers direct resume download/request action
  yearsExperience: "2+",
  projectsCount: "12+",
  openSourceContributions: "400+",
  clientsImpacted: "5,000+",
  bio: "Senior-track software developer specializing in building scalable web applications with PHP, Laravel, React, and MySQL. Passionate about architectural patterns, clean APIs, user-centric interfaces, and enterprise system design.",
  objective: "Seeking a software developer position in a progressive IT organization to leverage my technical expertise in Java, PHP, Laravel, and web development while contributing to continuous team innovation and professional growth.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sheik-jamsheer-basha-t-59a3171ab/",
      icon: "linkedin",
      color: "#0A66C2"
    },
    {
      name: "GitHub",
      url: "https://github.com/sheikjamsheerbasha02",
      icon: "github",
      color: "#ffffff"
    },
    {
      name: "Vercel",
      url: "https://vercel.com",
      icon: "vercel",
      color: "#ffffff"
    }
  ]
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Articles" },
  { id: "contact", label: "Contact" }
];

export const techStackGrouped = [
  {
    category: "Backend Engineering",
    description: "Server-side logic, RESTful API design, ORM layers, and relational databases.",
    items: [
      { name: "PHP", icon: "🐘", level: "Advanced", desc: "OOP, MVC, PSR standards, OOP architecture" },
      { name: "Laravel", icon: "🔴", level: "Advanced", desc: "Eloquent ORM, Blade, Middleware, Queues & REST APIs" },
      { name: "REST API", icon: "⚡", level: "Advanced", desc: "API architecture, JSON responses, Auth Guards, Rate limiting" },
      { name: "MySQL", icon: "🐬", level: "Intermediate", desc: "Relational schema design, Indexing, Transactions, Joins" },
      { name: "PostgreSQL", icon: "🐘", level: "Intermediate", desc: "ACID compliance, Complex queries, Relational modeling" }
    ]
  },
  {
    category: "Frontend & UI",
    description: "Modern component-driven web frameworks, styling engines, and dynamic UI state.",
    items: [
      { name: "React", icon: "⚛️", level: "Advanced", desc: "React 19, Custom Hooks, Context API, Virtual DOM optimization" },
      { name: "Next.js", icon: "▲", level: "Intermediate", desc: "App Router, SSR, SSG, Server Components, API routes" },
      { name: "JavaScript", icon: "🟡", level: "Advanced", desc: "ES6+, Async/Await, Promises, Closures, DOM manipulation" },
      { name: "TypeScript", icon: "🔷", level: "Intermediate", desc: "Type safety, Interfaces, Generics, Component props" },
      { name: "HTML5 & CSS3", icon: "🎨", level: "Advanced", desc: "Semantic tags, Flexbox, Grid, Glassmorphic CSS, Animations" },
      { name: "Tailwind CSS", icon: "💨", level: "Intermediate", desc: "Utility-first design systems, Responsive breakpoints, Custom themes" }
    ]
  },
  {
    category: "Tools & Environment",
    description: "Developer tooling, containerization, version control, and API testing platforms.",
    items: [
      { name: "Git", icon: "🐙", level: "Advanced", desc: "Version control, Feature branching, Merging, Rebase workflows" },
      { name: "Docker", icon: "🐳", level: "Intermediate", desc: "Containerization, Dockerfiles, Compose setups for dev environments" },
      { name: "Linux", icon: "🐧", level: "Intermediate", desc: "Bash commands, Server management, Permissions, Shell scripting" },
      { name: "Postman", icon: "🚀", level: "Advanced", desc: "API endpoint testing, Collections, Environment variables" },
      { name: "VS Code", icon: "💻", level: "Advanced", desc: "Custom extensions, Debugging, Snippets, Keybindings" },
      { name: "Prisma", icon: "💎", level: "Intermediate", desc: "Type-safe ORM for Node/Next.js, Migration management" },
      { name: "Figma", icon: "🎨", level: "Intermediate", desc: "UI/UX wireframing, Design system inspection, Asset export" }
    ]
  }
];

export const projectsData = [
  {
    id: "premium-cuts",
    title: "Premium Cuts - Halal Meat Ordering Platform",
    category: "Laravel",
    badge: "Featured Enterprise App",
    shortDesc: "Full-stack Halal meat ordering & delivery management platform featuring Laravel REST API, customer portal, real-time inventory tracking, and payment processing.",
    problem: "Traditional meat retail lacks automated inventory synchronization, digital ordering interfaces, and real-time delivery status tracking for customers.",
    solution: "Built a centralized web ordering platform combining a high-performance Laravel backend API with a responsive React/Next.js ordering storefront and real-time admin management portal.",
    architecture: `Architecture Highlights:
• Frontend: React / Next.js with stateful order cart management and dynamic catalog filtering.
• Backend API: Laravel RESTful controllers handling order lifecycle, inventory decrements, and customer authentication.
• Database: MySQL schema designed with ACID-compliant transaction handling for order processing.
• Admin Dashboard: Role-based admin access control for inventory adjustments, order status updates, and dispatch tracking.`,
    tags: [
      { name: "Laravel", color: "#fb923c" },
      { name: "React / Next.js", color: "#38bdf8" },
      { name: "REST API", color: "#a3e635" },
      { name: "MySQL", color: "#a855f7" },
      { name: "Order Mgmt", color: "#f59e0b" }
    ],
    github: "https://github.com/sheikjamsheerbasha02",
    liveDemo: "#",
    images: [img5],
    challenges: "Handling concurrent order placement without inventory race conditions or stock overselling.",
    lessonsLearned: "Implementing database locks and transactions in Laravel ORM to ensure accurate stock updates under high traffic.",
    estimatedScale: "Architected to support up to 10,000+ daily customer orders."
  },
  {
    id: "muslims-matches",
    title: "Nikah.com / Muslims-Matches Matrimonial Platform",
    category: "Full Stack",
    badge: "Featured Production Platform",
    shortDesc: "Halal matrimonial matchmaking web application designed with respect for Islamic modesty values, granular preference filtering, encrypted messaging, and subscription management.",
    problem: "Conventional matchmaking platforms lack strict privacy controls, halal-compliant guardian/chaperone visibility options, and granular cultural preference matching.",
    solution: "Engineered a Next.js & React matrimonial platform featuring preference algorithms, secure profile verification, payment gateway integration, and responsive mobile UX.",
    architecture: `Architecture Highlights:
• Frontend: Next.js App Router with Server-Side Rendering (SSR) for fast profile discoverability.
• Styling: Tailwind CSS & glassmorphism components with dark mode optimization.
• State & Search: Complex multi-criteria filter hooks (Location, Education, Values, Age).
• Admin & Gateway: Stripe/Razorpay sandbox integration for premium membership access.`,
    tags: [
      { name: "Next.js", color: "#ffffff" },
      { name: "React", color: "#38bdf8" },
      { name: "Tailwind CSS", color: "#38bdf8" },
      { name: "Full Stack", color: "#a3e635" },
      { name: "Payment Gateway", color: "#f59e0b" }
    ],
    github: "https://github.com/sheikjamsheerbasha02/matches",
    liveDemo: "https://github.com/sheikjamsheerbasha02/matches",
    images: [img2, img3, img4],
    challenges: "Structuring complex multi-attribute search queries with efficient database indexing.",
    lessonsLearned: "Optimizing Next.js SSR and client hydration to deliver sub-second initial page renders.",
    estimatedScale: "Supports 50,000+ registered member profiles."
  },
  {
    id: "ai-developer-assistant",
    title: "AI Developer Assistant",
    category: "AI",
    badge: "AI Tool",
    shortDesc: "Intelligent coding helper and prompt engineering productivity tool providing instant context-aware code explanations, Laravel helper commands, and automated portfolio query answers.",
    problem: "Developers lose time searching across documentation for syntax references, framework helpers, and project querying.",
    solution: "Created an extensible AI Assistant widget powered by an abstract provider layer (supporting Mock, Google Gemini, and OpenAI APIs) with quick prompt chips and section jump triggers.",
    architecture: `Architecture Highlights:
• Abstract Provider Strategy: Base AIProvider interface allowing seamless provider swapping (Mock / Gemini / OpenAI).
• UI Layer: React custom hook (useChatbot) handling typing indicators, conversation history, and scroll auto-alignment.
• Knowledge Base: Local fallback intent matching engine ensuring instant offline answers.`,
    tags: [
      { name: "React 19", color: "#38bdf8" },
      { name: "AI Provider Strategy", color: "#a3e635" },
      { name: "Gemini API", color: "#a855f7" },
      { name: "JavaScript ES6+", color: "#f59e0b" }
    ],
    github: "https://github.com/sheikjamsheerbasha02",
    liveDemo: "#",
    images: [img1],
    challenges: "Decoupling AI provider implementation from UI components to allow zero-config offline fallback.",
    lessonsLearned: "Applying the Strategy Pattern in frontend React architecture to maintain clean separation of concerns.",
    estimatedScale: "Instant client-side execution with <100ms fallback latency."
  },
  {
    id: "student-portal",
    title: "Student Portal Application",
    category: "Java",
    badge: "Enterprise CRUD System",
    shortDesc: "Full-stack Java web portal designed to manage student academic records, course enrollments, and personal profiles utilizing full CRUD database operations.",
    problem: "Educational institutions require reliable, secure record-keeping tools for student data updates, grade tracking, and administrative account controls.",
    solution: "Developed a Java web application utilizing Object-Oriented Programming (OOP), modular service classes, and relational database persistence for student records.",
    architecture: `Architecture Highlights:
• Core Language: Java SE/EE utilizing Collections, Multithreading, and OOP design patterns.
• Data Access: JDBC / Data access layer supporting Create, Read, Update, and Delete operations.
• User Roles: Student profile access vs administrative management views.`,
    tags: [
      { name: "Java", color: "#fb923c" },
      { name: "CRUD", color: "#a3e635" },
      { name: "Database", color: "#a855f7" },
      { name: "Web App", color: "#38bdf8" }
    ],
    github: "https://github.com/sheikjamsheerbasha02",
    liveDemo: "#",
    images: [img5],
    challenges: "Ensuring clean separation between data access layer (DAO) and business logic.",
    lessonsLearned: "Mastering OOP principles, exception handling, and relational schema normalization.",
    estimatedScale: "Designed for university department record management."
  },
  {
    id: "developer-portfolio",
    title: "Google/Stripe-Tier Developer Portfolio",
    category: "React",
    badge: "Production Web App",
    shortDesc: "High-performance recruiter-focused developer portfolio built with React 19, Vite, Glassmorphism design tokens, Command Palette (Ctrl+K), and AI Assistant.",
    problem: "Standard online resumes fail to convey full technical depth, architectural understanding, or recruiter-focused metrics.",
    solution: "Architected a single-page web app consuming a centralized data repository, complete with interactive Command Palette, GitHub stats integration, case study modals, and SEO JSON-LD schemas.",
    architecture: `Architecture Highlights:
• Core: React 19 + Vite 7 with modular component architecture.
• State: React Context (ToastContext) and custom hooks (useCommandPalette, useActiveSection).
• SEO: JSON-LD Person & WebSite schemas, robots.txt, sitemap.xml, Open Graph tags.`,
    tags: [
      { name: "React 19", color: "#38bdf8" },
      { name: "Vite 7", color: "#a3e635" },
      { name: "Glassmorphism", color: "#a855f7" },
      { name: "SEO JSON-LD", color: "#f59e0b" }
    ],
    github: "https://github.com/sheikjamsheerbasha02",
    liveDemo: "#",
    images: [img1],
    challenges: "Achieving 100/100 Lighthouse performance and zero ESLint warnings across complex interactive components.",
    lessonsLearned: "Leveraging CSS design tokens and custom hooks for scalable UI state management.",
    estimatedScale: "Optimized for global recruiter discovery."
  }
];

export const experienceData = [
  {
    company: "Cloud Logics & Le-Meniz",
    location: "Puducherry",
    role: "Web Development Intern",
    period: "Internship",
    achievements: [
      "Engineered frontend components that reduced web page loading latency by 25%.",
      "Implemented responsive web features resulting in a 20% increase in user session duration.",
      "Collaborated with cross-functional developers on database schema design and client API integration."
    ]
  },
  {
    company: "Accord Info Matrix",
    location: "Chennai",
    role: "Java & Web Design Specialist",
    period: "Professional Training",
    achievements: [
      "Completed comprehensive training in Core Java, Enterprise Concepts, and Web Design.",
      "Developed multi-tier CRUD applications following industry standard coding practices."
    ]
  }
];

export const achievementsData = [
  {
    title: "2nd Place - IFET National Hackathon",
    desc: "Developed an Online Doctor Consulting and Healthcare Web Platform under competitive timed deadlines.",
    icon: "🏆",
    badge: "Hackathon Winner",
    color: "#eab308"
  },
  {
    title: "Dr. Kalam Youth Achiever Award",
    desc: "Honored by World Youth Federation for leadership, tech innovation, and youth empowerment projects.",
    icon: "🎖️",
    badge: "Honor & Award",
    color: "#38bdf8"
  },
  {
    title: "CEMP Project Expo Participant",
    desc: "Exhibited basic science & engineering tech project at IFET College Expo.",
    icon: "🛡️",
    badge: "Project Expo",
    color: "#a855f7"
  }
];

export const educationData = [
  {
    institution: "IFET College of Engineering",
    degree: "B.E. Engineering Graduate",
    score: "71% Score",
    status: "Graduated"
  },
  {
    institution: "Mount Park Mat. Hr. Sec. School",
    degree: "Higher Secondary (HSC)",
    score: "51.3% Score",
    status: "Completed"
  },
  {
    institution: "Sri Gnanananda Mat. Hr. Sec. School",
    degree: "Secondary School (SSLC)",
    score: "78% Score",
    status: "Completed"
  }
];

export const testimonialsData = [
  {
    quote: "Jamsheer possesses exceptional problem-solving drive and a rapid capability to pick up modern web frameworks like Laravel and React. His technical work on web performance is impressive.",
    author: "Technical Lead",
    role: "Cloud Logics & Le-Meniz",
    avatar: "👨‍💻"
  },
  {
    quote: "Demonstrated outstanding leadership and technical execution during the National Hackathon, building a functional doctor consulting platform in record time.",
    author: "Hackathon Evaluator",
    role: "IFET National Expo",
    avatar: "🏆"
  }
];

export const blogData = [
  {
    id: "laravel-performance",
    title: "Optimizing Laravel API Performance & Query Executions",
    excerpt: "Best practices for preventing N+1 queries in Eloquent ORM, leveraging Redis caching, and optimizing JSON responses for mobile clients.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Backend Architecture",
    link: "#"
  },
  {
    id: "react-19-hooks",
    title: "Building Clean React 19 Component Systems without Prop Drilling",
    excerpt: "How to combine custom hooks, Context API, and CSS design tokens to maintain scalable React applications.",
    date: "June 2026",
    readTime: "4 min read",
    category: "Frontend Engineering",
    link: "#"
  }
];

export const chatbotFAQ = [
  {
    keywords: ["hello", "hi", "hey", "who are you", "who"],
    response: "Hello! I am Sheik Jamsheer Basha's AI Assistant. Jamsheer is a Software Engineer specializing in PHP, Laravel, Java, and React. How can I help you today?"
  },
  {
    keywords: ["laravel", "php", "backend", "premium cuts"],
    response: "Jamsheer builds powerful Laravel REST APIs! Check out 'Premium Cuts' (Halal Meat Ordering Platform with order & inventory management) or 'Nikah.com / Muslims-Matches'."
  },
  {
    keywords: ["react", "next", "frontend"],
    response: "Jamsheer develops fast React 19 & Next.js applications with custom hooks, SSR, Tailwind CSS, and glassmorphic UI design system tokens."
  },
  {
    keywords: ["resume", "cv", "download"],
    response: "You can click the 'Download Resume' button in the Hero section or Navbar to get a copy of Jamsheer's software engineering resume!"
  },
  {
    keywords: ["hire", "job", "opportunity", "contact", "email", "reach"],
    response: "Jamsheer is available for Senior / Full Stack Software Engineering opportunities! Scroll down to the Contact section or click 'Let's Chat'."
  },
  {
    keywords: ["achievement", "award", "hackathon"],
    response: "He won 2nd Place in the IFET Hackathon (Doctor Consulting App) and received the Dr. Kalam Youth Achiever Award!"
  }
];
