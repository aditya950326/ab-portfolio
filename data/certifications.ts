// ============================================================
// data/certifications.ts – All verified certifications for Aditya Birare
// Directly sourced from C:\MY SPACE\college\Certificates\uploaded
// Sort: newest first by issueDateISO
// ============================================================

export type CertCategory = "embedded" | "software" | "all";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;        // Human-readable: "July 2026"
  issueDateISO: string;     // Sort key: "2026-07"
  category: CertCategory;
  image: string;            // path under /public/certifications/
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "cert-isro-aiml",
    name: "AI/ML for Geodata Analytics",
    issuer: "ISRO – Indian Institute of Remote Sensing (IIRS)",
    issueDate: "September 2026",
    issueDateISO: "2026-09",
    category: "software",
    image: "/certifications/01_isro_aiml_geodata_analytics.png",
    credentialId: "2026234977937",
    skills: ["AI/ML", "Geodata Analytics", "Remote Sensing", "Machine Learning"],
  },
  {
    id: "cert-jpmorgan-swe",
    name: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. (via Forage)",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "software",
    image: "/certifications/06_jpmorgan_software_engineering.png",
    skills: ["Kafka Integration", "H2 Database", "REST API Development", "Spring Boot"],
  },
  {
    id: "cert-datacom-cloud",
    name: "Introduction to Cloud Job Simulation",
    issuer: "Datacom (via Forage)",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "software",
    image: "/certifications/07_datacom_cloud_simulation.png",
    skills: ["Cloud Computing", "GitHub Actions", "CI/CD Workflows", "Cloud Deployment"],
  },
  {
    id: "cert-siemens-industrial",
    name: "Operations Industrial Engineer Job Simulation",
    issuer: "Siemens (via Forage)",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "embedded",
    image: "/certifications/08_siemens_operations_industrial_engineer.jpg",
    skills: ["Industrial Engineering", "Operations Optimization", "Time Studies", "Layout Planning"],
  },
  {
    id: "cert-iies-embedded",
    name: "6-Days Workshop in Embedded Systems",
    issuer: "IIES (Indian Institute of Embedded Systems), Bangalore",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "embedded",
    image: "/certifications/05_iies_embedded_systems_stm32.png",
    credentialId: "IIES/02-26/7695",
    skills: ["Programming in C", "Embedded C", "STM32 Microcontroller", "Firmware"],
  },
  {
    id: "cert-maven-silicon-verilog",
    name: "Verilog HDL – Hands On",
    issuer: "Maven Silicon (RISC-V Training Partner)",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "embedded",
    image: "/certifications/04_maven_silicon_verilog_hdl.jpg",
    credentialId: "9921056447",
    skills: ["Verilog HDL", "Digital Circuit Design", "RTL Coding", "Semiconductor"],
  },
  {
    id: "cert-ibm-cybersecurity",
    name: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "software",
    image: "/certifications/11_ibm_cybersecurity_fundamentals.jpg",
    skills: ["Cybersecurity", "Network Security", "Threat Modeling", "Risk Management"],
  },
  {
    id: "cert-google-analytics",
    name: "Google Analytics Certification",
    issuer: "Google",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "software",
    image: "/certifications/12_google_analytics_certification.jpg",
    credentialId: "189186276",
    skills: ["Google Analytics", "Data Tracking", "Web Metrics", "Audience Analysis"],
  },
  {
    id: "cert-infosys-prompt",
    name: "Prompt Engineering",
    issuer: "Infosys Springboard",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "software",
    image: "/certifications/10_infosys_prompt_engineering.jpg",
    skills: ["Prompt Engineering", "Large Language Models", "Generative AI"],
  },
  {
    id: "cert-tata-genai",
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata (via Forage)",
    issueDate: "July 2026",
    issueDateISO: "2026-07",
    category: "software",
    image: "/certifications/09_tata_genai_data_analytics.jpg",
    skills: ["GenAI", "Data Analytics", "Risk Profiling", "Executive Storytelling"],
  },
  {
    id: "cert-datacamp-snowflake-sql",
    name: "Introduction to Snowflake SQL",
    issuer: "DataCamp",
    issueDate: "June 2026",
    issueDateISO: "2026-06",
    category: "software",
    image: "/certifications/13_datacamp_snowflake_sql.jpg",
    credentialId: "48,534,437",
    skills: ["Snowflake SQL", "Relational Databases", "Query Optimization"],
  },
  {
    id: "cert-datacamp-snowflake",
    name: "Introduction to Snowflake",
    issuer: "DataCamp",
    issueDate: "June 2026",
    issueDateISO: "2026-06",
    category: "software",
    image: "/certifications/14_datacamp_snowflake.jpg",
    credentialId: "48,415,714",
    skills: ["Cloud Databases", "Snowflake Architecture", "Data Warehousing"],
  },
  {
    id: "cert-sololearn-java",
    name: "Introduction to Java",
    issuer: "Sololearn",
    issueDate: "May 2026",
    issueDateISO: "2026-05",
    category: "software",
    image: "/certifications/15_sololearn_java.jpg",
    credentialId: "CC-IK1FNY3Q",
    skills: ["Java", "OOP", "Data Structures", "Algorithms"],
  },
  {
    id: "cert-hack-impact",
    name: "Hack For Impact – AI Hackathon",
    issuer: "MIT CSN – Dept. of Computer Science & Engineering",
    issueDate: "April 2026",
    issueDateISO: "2026-04",
    category: "all",
    image: "/certifications/19_hack_for_impact_ai_hackathon.jpg",
    skills: ["AI Innovation", "Rapid Pitching", "Team Collaboration"],
  },
  {
    id: "cert-hackathon-hacked",
    name: "Hackathon Hacked – Workshop (Technophilia 2K26)",
    issuer: "MIT CSN – Dept. of Computer Science & Engineering",
    issueDate: "April 2026",
    issueDateISO: "2026-04",
    category: "all",
    image: "/certifications/20_hackathon_hacked_workshop.png",
    skills: ["Hackathon Strategies", "Rapid Prototyping", "Technical Architecture"],
  },
  {
    id: "cert-build-for-bharat",
    name: "Build for Bharat 2026 – National Innovation Hackathon",
    issuer: "MIT CSN & Sakal / Findability Sciences",
    issueDate: "April 2026",
    issueDateISO: "2026-04",
    category: "all",
    image: "/certifications/18_build_for_bharat_hackathon.jpg",
    skills: ["National Hackathon", "Product Modeling", "Hardware-Software Integration"],
  },
  {
    id: "cert-nielit-soc",
    name: "Bootcamp: RTL, IP Integration, and SoC Signoff",
    issuer: "NIELIT (Ministry of Electronics and Information Technology, MeitY)",
    issueDate: "February 2026",
    issueDateISO: "2026-02",
    category: "embedded",
    image: "/certifications/03_nielit_rtl_ip_integration_soc.jpg",
    credentialId: "a2933ab5-0a28-4c7a-8efc-b96f736be3a5",
    skills: ["RTL Design", "IP Integration", "SoC Signoff", "VLSI"],
  },
  {
    id: "cert-nptel-privacy",
    name: "Privacy and Security in Online Social Media (Elite)",
    issuer: "NPTEL / MoE, Govt. of India (IIIT Hyderabad & IIT Madras)",
    issueDate: "October 2025",
    issueDateISO: "2025-10",
    category: "software",
    image: "/certifications/02_nptel_privacy_security_social_media.jpg",
    credentialId: "NPTEL25CS117S551800223",
    skills: ["Privacy Engineering", "Cybersecurity", "Network Risk Analysis", "Social Media Security"],
  },
  {
    id: "cert-cogni-sphere",
    name: "Cogni-Sphere 2025 – Hacksphere",
    issuer: "MIT CSN – Dept. of ECE & IETE Student Forum",
    issueDate: "October 2025",
    issueDateISO: "2025-10",
    category: "all",
    image: "/certifications/21_cogni_sphere_hacksphere.png",
    skills: ["ECE", "Idea Pitching", "Team Management", "Technical Presentation"],
  },
  {
    id: "cert-gdg-solution",
    name: "GDG on Campus – Solution Challenge",
    issuer: "Google Developer Groups On Campus / Hack2skill",
    issueDate: "February 2025",
    issueDateISO: "2025-02",
    category: "all",
    image: "/certifications/17_gdg_solution_challenge.jpg",
    credentialId: "2025H2S01GSC-PI7758",
    skills: ["Google Technologies", "Social Impact", "API Integration"],
  },
  {
    id: "cert-belkasoft-forensics",
    name: "Mastering Advanced Digital Forensics Techniques",
    issuer: "Belkasoft",
    issueDate: "September 2024",
    issueDateISO: "2024-09",
    category: "software",
    image: "/certifications/16_belkasoft_digital_forensics.jpg",
    credentialId: "32ebdfidpy",
    skills: ["Digital Forensics", "Incident Response", "Evidence Extraction"],
  },
];

// Always export sorted newest-first
export const sortedCertifications = [...certifications].sort((a, b) =>
  b.issueDateISO.localeCompare(a.issueDateISO)
);
