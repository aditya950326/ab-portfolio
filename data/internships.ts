// data/internships.ts — Internship records

export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "Software" | "Hardware" | "Full-Stack";
  certificate: string | null; // path to cert image or null
  description: string;
  techStack: string[];
  responsibilities: string[];
  achievements?: string[];
}

export const internships: Internship[] = [
  {
    id: "jbb-ecommerce",
    company: "JBB Technologies",
    role: "Frontend & Admin Panel Developer (Intern)",
    duration: "Internship",
    startDate: "2025",
    endDate: "2025",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    type: "Full-Stack",
    certificate: "/internships/jbb-certificate.pdf",
    description:
      "Developed a full-featured custom e-commerce website for a computer hardware shop supporting both Retail Customers and Wholesale Dealers. Built the complete Admin Dashboard and CMS, enabling non-technical staff to manage products, orders, customers, and website content without developer intervention.",
    techStack: [
      "React.js",
      "PHP (CodeIgniter 4)",
      "MySQL",
      "Custom CMS",
      "Rich Text Editor",
    ],
    responsibilities: [
      "Login Dashboard & Dashboard Analytics",
      "Product Management UI (CRUD, Multi-image upload)",
      "Category & Brand Management",
      "Banner & Offer Management",
      "Inventory Screens",
      "Order Management Screens",
      "Customer Management Panel",
      "CMS Pages (dynamic content editor)",
      "Reports & Settings modules",
      "Role-based Access Control",
      "Activity Logs",
      "Table Filters, Pagination, Search & Export",
    ],
    achievements: [
      "Delivered a fully functional Admin CMS with 13+ management modules",
      "Implemented role-based access so multiple staff members can operate independently",
      "SEO-friendly React frontend with PHP CodeIgniter 4 backend and MySQL database",
    ],
  },
];
