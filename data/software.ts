// ============================================================
// data/software.ts – All content for the Software space
// Source: software-resume.pdf only. Do NOT mix with embedded data.
// ============================================================

export const softwareData = {
  hero: {
    headline: "Software Development",
    subtitle: "AI Engineer | Full-Stack Developer | Big Data & Analytics",
    description:
      "Electronics & Computer Engineering undergraduate with strong full-stack and AI application experience. Shipped 5 live production web platforms on Vercel using React.js, Vite, Node.js and Firebase, with OpenAI API and Web Audio API integrations.",
  },

  about: {
    title: "About — Software Focus",
    paragraphs: [
      "On the software side I operate at the intersection of product thinking, design systems, and AI-augmented engineering. I've shipped production apps on Vercel with Firebase backends, built OpenAI-powered document assistants, and designed UX flows researched from real users.",
      "I'm UX/UI focused by training but full-stack by necessity. I move fast with React + Vite, design with Figma, and integrate AI APIs to give applications a brain. My current focus is building ApexLink — a comprehensive productivity suite with an integrated AI assistant.",
    ],
  },

  skills: {
    languages: ["JavaScript (ES2024)", "TypeScript", "Python", "Java", "HTML5 / CSS3", "Dart"],
    frontend: ["React.js", "Vite", "Next.js", "Flutter (UI)", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Firebase (Realtime DB, Auth)"],
    ai: ["OpenAI API", "Google Gemini API", "LangChain", "RAG Architecture"],
    databases: ["Firebase Realtime Database", "Firestore", "Snowflake (DataCamp certified)"],
    cloud: ["Vercel", "Firebase Hosting", "CI/CD Pipelines"],
    design: ["Figma", "Canva", "DaVinci Resolve 20", "User research", "Wireframing", "Design systems"],
    tools: ["Git", "Jira", "VS Code", "Google Analytics (certified)"],
  },

  projects: [
    {
      id: "himroo-fabrics",
      title: "Himroo Fabrics — Authentic Handloom Heritage & E-Commerce",
      category: "Heritage E-Commerce",
      description:
        "Preserving over 130 years of royal Aurangabad handloom heritage since 1891. Features an authentic handloom showcase of Himroo bed sheets, Paithani sarees, and hand-woven shawls with direct WhatsApp ordering, curated story showroom, and rich interactive heritage gallery.",
      stack: ["React.js", "Vite", "Tailwind CSS", "WhatsApp Cloud API", "Vercel"],
      liveUrl: "https://himroofabricks.vercel.app",
      githubUrl: "",
      image: "/images/himroo-fabrics.png",
      tags: ["E-Commerce", "Handloom Heritage", "React", "Vite", "WhatsApp API", "Vercel"],
    },
    {
      id: "apexlink",
      title: "ApexLink — AI-Powered Personal & Team Productivity Suite",
      category: "Productivity Platform",
      description:
        "A high-performance productivity ecosystem built around 'Forge. Focus. Conquer.' Features VedAI (an intelligent context-aware assistant), Execution Hub, Warrior Mode deep work timer, timetable scheduling, sticky notes, and friend circles.",
      stack: ["React.js", "Vite", "Node.js", "Firebase", "OpenAI API", "Tailwind CSS", "Vercel"],
      liveUrl: "https://apexlinkpro.vercel.app",
      githubUrl: "",
      image: "/images/apexlink-ui.jpg",
      tags: ["Productivity Suite", "VedAI", "OpenAI API", "Warrior Mode", "Firebase", "Vercel"],
    },
    {
      id: "constructiq",
      title: "ConstructIQ — AI-Based Construction Management & Site Intelligence",
      category: "Construction Intelligence",
      description:
        "End-to-end construction intelligence platform that bridges project planning to on-site execution with clarity. Features a Supervisor Field Desk, daily worker attendance tracking, work-done photo uploads, and site bills & challans tracking.",
      stack: ["React.js", "Vite", "Tailwind CSS", "Firebase Realtime DB", "Vercel"],
      liveUrl: "https://constructiq-pi.vercel.app",
      githubUrl: "",
      image: "/images/constructiq-ui.jpg",
      tags: ["Construction Tech", "Field Desk", "Attendance Tracking", "React", "Vite", "Vercel"],
    },
    {
      id: "lucent-steno",
      title: "Lucent Steno — Master Stenography & Shorthand",
      category: "EdTech Platform",
      description:
        "Modern web platform designed for shorthand and stenography learners to reach professional transcription speeds up to 120+ WPM with precision. Features dark glassmorphism UI, audio dictations, speed goal benchmarks, and structured course modules.",
      stack: ["React.js", "Vite", "Tailwind CSS", "Web Audio API", "Vercel"],
      liveUrl: "https://lucentsteno.vercel.app",
      githubUrl: "",
      image: "/images/lucent-steno.png",
      tags: ["EdTech", "Stenography", "Shorthand", "Speed Training", "React", "Vercel"],
    },
    {
      id: "xtreme-fitness",
      title: "XTREME FITNESS STUDIO — Luxury Unisex Gym & Performance Club",
      category: "Fitness & Club",
      description:
        "High-octane digital presence for Chhatrapati Sambhajinagar's premier luxury unisex gym. Features authentic gym floor showcases with heavy free weights and squat racks, trainer highlights, floor hours, Google Maps location integration, and one-click WhatsApp membership booking.",
      stack: ["React.js", "Vite", "Tailwind CSS", "Google Maps", "WhatsApp CTA", "Vercel"],
      liveUrl: "https://xtreme-fitness-six.vercel.app",
      githubUrl: "",
      image: "/images/xtreme-fitness.png",
      tags: ["Fitness & Health", "Gym Portal", "React", "Vite", "Google Maps", "Vercel"],
    },
  ],

  whatIBuild: [
    {
      number: "01",
      title: "Production Web Apps",
      description:
        "Responsive, performant React/Vite full-stack applications with real-time Firebase backends and CI/CD to Vercel.",
    },
    {
      number: "02",
      title: "AI Assistants & RAG",
      description:
        "Pragmatic LLM integrations — OpenAI, Gemini, LangChain — that personalise user experiences with hallucination-resistant RAG pipelines.",
    },
    {
      number: "03",
      title: "Design Systems & UI/UX",
      description:
        "Scalable Figma component libraries researched from real users, translated directly into clean React and Flutter code.",
    },
    {
      number: "04",
      title: "Data Dashboards & Analytics",
      description:
        "User behaviour dashboards, analytics integrations, and tracking telemetry that give product teams actionable insights.",
    },
  ],

  experience: [
    {
      role: "Software Developer Intern",
      company: "JBB Technologies Pvt. Ltd.",
      period: "25 June 2026 – 24 July 2026",
      description:
        "Built and shipped features across a full-stack web application. Worked in an agile team with Jira for sprint management.",
      tags: ["React", "Node.js", "Agile", "Jira"],
    },
    {
      role: "UI/UX Designer (Freelance)",
      company: "Namoyatri App, via Under25",
      period: "2024",
      description:
        "Designed UX flows, wireframes, and prototypes for a transportation app. Conducted user research and usability testing.",
      tags: ["Figma", "UX Research", "Prototyping"],
    },
    {
      role: "Digital Marketing Associate (Intern)",
      company: "Forever Living Products",
      period: "June 2024 – August 2024",
      description:
        "Managed digital campaigns, implemented Google Analytics tracking, and built reporting dashboards.",
      tags: ["Google Analytics", "Marketing", "Data"],
    },
  ],

  resumeFile: "/resumes/software-resume.pdf",
};

