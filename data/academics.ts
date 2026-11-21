// ============================================================
// data/academics.ts – Official Academic Records & Semester Marksheets
// Student: BIRARE ADITYA RAHUL (HTNo: 230101060011)
// Institution: Maharashtra Institute of Technology (MIT), Chhatrapati Sambhajinagar
// ============================================================

export interface CourseResult {
  sNo: number;
  examCode: string;
  subjectName: string;
  monthYear: string;
  finalGrade: "O" | "A+" | "A" | "B+" | "B" | "C+" | "C" | "P" | "F";
  credits: number;
  status: "PASS" | "FAIL";
}

export interface SemesterRecord {
  semNumber: number;
  roman: string;
  title: string;
  academicYear: string;
  examPeriod: string;
  sgpa: number;
  cgpaAtSem: number;
  creditsEarned: number;
  cumulativeCredits: number;
  image: string;
  status: string;
  courses: CourseResult[];
}

export const academicOverview = {
  institution: "Maharashtra Institute of Technology (MIT)",
  affiliation: "Autonomous Institute | Affiliated to Dr. Babasaheb Ambedkar Marathwada University | NAAC 'A' Grade",
  studentName: "BIRARE ADITYA RAHUL",
  htNo: "230101060011",
  branch: "Electronics and Computer Engineering",
  currentSemester: "VII SEMESTER",
  finalCgpa: 8.20,
  totalCredits: 128.00,
  dueSubjects: "0 / 64 (100% Cleared, Zero Backlogs)",
};

export const semesterRecords: SemesterRecord[] = [
  {
    semNumber: 1,
    roman: "I",
    title: "Semester I",
    academicYear: "First Year (2023–2024)",
    examPeriod: "December 2023 / January 2024",
    sgpa: 8.19,
    cgpaAtSem: 8.19,
    creditsEarned: 21.0,
    cumulativeCredits: 21.0,
    image: "/academics/semester_1.jpg",
    status: "PASS",
    courses: [
      { sNo: 1, examCode: "BSC101B", subjectName: "Engineering Mathematics - I", monthYear: "January 2024", finalGrade: "B", credits: 3.0, status: "PASS" },
      { sNo: 2, examCode: "BSC103B", subjectName: "Engineering Chemistry", monthYear: "December 2023", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 3, examCode: "ESC108", subjectName: "Principles of Programming Language", monthYear: "December 2023", finalGrade: "A+", credits: 3.0, status: "PASS" },
      { sNo: 4, examCode: "ESC110", subjectName: "Basics of Electronics Engineering", monthYear: "December 2023", finalGrade: "B+", credits: 3.0, status: "PASS" },
      { sNo: 5, examCode: "VSE106", subjectName: "Engineering Exploration - I", monthYear: "December 2023", finalGrade: "A+", credits: 2.0, status: "PASS" },
      { sNo: 6, examCode: "HSM107", subjectName: "Communication Skills", monthYear: "December 2023", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 7, examCode: "BSC122B", subjectName: "Engineering Chemistry Lab", monthYear: "December 2023", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 8, examCode: "ESC128", subjectName: "Principles of Programming Lab", monthYear: "December 2023", finalGrade: "O", credits: 1.0, status: "PASS" },
      { sNo: 9, examCode: "ESC130", subjectName: "Basics of Electronics Engineering Lab", monthYear: "December 2023", finalGrade: "O", credits: 1.0, status: "PASS" },
      { sNo: 10, examCode: "ESC132", subjectName: "Electronic Workshop", monthYear: "December 2023", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 11, examCode: "LLC126 A-W", subjectName: "NSS/NCC/Applied Visual/Performing Arts/Clubs", monthYear: "December 2023", finalGrade: "C+", credits: 2.0, status: "PASS" },
    ],
  },
  {
    semNumber: 2,
    roman: "II",
    title: "Semester II",
    academicYear: "First Year (2023–2024)",
    examPeriod: "June 2024",
    sgpa: 7.62,
    cgpaAtSem: 7.90,
    creditsEarned: 21.0,
    cumulativeCredits: 42.0,
    image: "/academics/semester_2.jpg",
    status: "PASS",
    courses: [
      { sNo: 1, examCode: "BSC151B", subjectName: "Engineering Mathematics-II", monthYear: "June 2024", finalGrade: "B", credits: 3.0, status: "PASS" },
      { sNo: 2, examCode: "BSC102B", subjectName: "Engineering Physics", monthYear: "June 2024", finalGrade: "A+", credits: 2.0, status: "PASS" },
      { sNo: 3, examCode: "ESC158", subjectName: "Engineering Graphics", monthYear: "June 2024", finalGrade: "B+", credits: 2.0, status: "PASS" },
      { sNo: 4, examCode: "ESC109", subjectName: "Basics of Electrical Engineering", monthYear: "June 2024", finalGrade: "B", credits: 3.0, status: "PASS" },
      { sNo: 5, examCode: "ESC159", subjectName: "Python Programming", monthYear: "June 2024", finalGrade: "B+", credits: 2.0, status: "PASS" },
      { sNo: 6, examCode: "IKS156", subjectName: "Introduction to Indian Knowledge System", monthYear: "June 2024", finalGrade: "A+", credits: 2.0, status: "PASS" },
      { sNo: 7, examCode: "VSE157", subjectName: "Engineering Exploration-II", monthYear: "June 2024", finalGrade: "A", credits: 2.0, status: "PASS" },
      { sNo: 8, examCode: "BSC121B", subjectName: "Engineering Physics Lab", monthYear: "June 2024", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 9, examCode: "ESC129", subjectName: "Basics of Electrical Engineering Lab", monthYear: "June 2024", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 10, examCode: "ESC174", subjectName: "Engineering Graphics Lab", monthYear: "June 2024", finalGrade: "A", credits: 1.0, status: "PASS" },
      { sNo: 11, examCode: "LLC126 A to W", subjectName: "NSS/NCC/Applied Visual/Performing Arts/Clubs", monthYear: "June 2024", finalGrade: "A+", credits: 2.0, status: "PASS" },
    ],
  },
  {
    semNumber: 3,
    roman: "III",
    title: "Semester III",
    academicYear: "Second Year (2024–2025)",
    examPeriod: "November 2024",
    sgpa: 8.62,
    cgpaAtSem: 8.14,
    creditsEarned: 21.0,
    cumulativeCredits: 63.0,
    image: "/academics/semester_3.jpg",
    status: "PASS",
    courses: [
      { sNo: 1, examCode: "ECE201", subjectName: "Engineering Mathematics-III", monthYear: "November 2024", finalGrade: "B", credits: 3.0, status: "PASS" },
      { sNo: 2, examCode: "ECE202", subjectName: "Electronics Design Technology", monthYear: "November 2024", finalGrade: "A", credits: 2.0, status: "PASS" },
      { sNo: 3, examCode: "ECE203", subjectName: "Data Structure and Algorithm", monthYear: "November 2024", finalGrade: "A", credits: 2.0, status: "PASS" },
      { sNo: 4, examCode: "ECE211", subjectName: "Power Electronics", monthYear: "November 2024", finalGrade: "A+", credits: 2.0, status: "PASS" },
      { sNo: 5, examCode: "OEC241F", subjectName: "Emotional Intelligence", monthYear: "November 2024", finalGrade: "O", credits: 3.0, status: "PASS" },
      { sNo: 6, examCode: "HSM202", subjectName: "Innovation and Entrepreneurship", monthYear: "November 2024", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 7, examCode: "VEC202", subjectName: "Environmental Studies", monthYear: "November 2024", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 8, examCode: "ELC221", subjectName: "Community Engagement Project", monthYear: "November 2024", finalGrade: "A", credits: 2.0, status: "PASS" },
      { sNo: 9, examCode: "SEM222", subjectName: "Seminar", monthYear: "November 2024", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 10, examCode: "ECE223", subjectName: "Electronics Design Technology Lab", monthYear: "November 2024", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 11, examCode: "ECE224", subjectName: "Data Structure and Algorithm Lab", monthYear: "November 2024", finalGrade: "A+", credits: 1.0, status: "PASS" },
    ],
  },
  {
    semNumber: 4,
    roman: "IV",
    title: "Semester IV",
    academicYear: "Second Year (2024–2025)",
    examPeriod: "June 2025",
    sgpa: 8.76,
    cgpaAtSem: 8.30,
    creditsEarned: 21.0,
    cumulativeCredits: 84.0,
    image: "/academics/semester_4.jpg",
    status: "PASS",
    courses: [
      { sNo: 1, examCode: "ECE251", subjectName: "Communication Engineering", monthYear: "June 2025", finalGrade: "A", credits: 3.0, status: "PASS" },
      { sNo: 2, examCode: "ECE252", subjectName: "Digital Electronics", monthYear: "June 2025", finalGrade: "A", credits: 2.0, status: "PASS" },
      { sNo: 3, examCode: "ECE253", subjectName: "Database Management System", monthYear: "June 2025", finalGrade: "A", credits: 2.0, status: "PASS" },
      { sNo: 4, examCode: "ECE261", subjectName: "Robotics and Automation", monthYear: "June 2025", finalGrade: "B+", credits: 2.0, status: "PASS" },
      { sNo: 5, examCode: "OEC291G", subjectName: "Renewable Energy Resources", monthYear: "June 2025", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 6, examCode: "HSM201", subjectName: "Engineering Economics and Management", monthYear: "June 2025", finalGrade: "B+", credits: 2.0, status: "PASS" },
      { sNo: 7, examCode: "VEC201", subjectName: "Universal Human Values", monthYear: "June 2025", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 8, examCode: "VSE271", subjectName: "Professional English", monthYear: "June 2025", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 9, examCode: "AEC272", subjectName: "Personality and Leadership Development Skills", monthYear: "June 2025", finalGrade: "O", credits: 2.0, status: "PASS" },
      { sNo: 10, examCode: "ECE273", subjectName: "Digital Electronics Lab", monthYear: "June 2025", finalGrade: "O", credits: 1.0, status: "PASS" },
      { sNo: 11, examCode: "ECE274", subjectName: "Database Management System Lab", monthYear: "June 2025", finalGrade: "O", credits: 1.0, status: "PASS" },
    ],
  },
  {
    semNumber: 5,
    roman: "V",
    title: "Semester V",
    academicYear: "Third Year (2025–2026)",
    examPeriod: "November 2025",
    sgpa: 7.41,
    cgpaAtSem: 8.11,
    creditsEarned: 22.0,
    cumulativeCredits: 106.0,
    image: "/academics/semester_5.jpg",
    status: "PASS",
    courses: [
      { sNo: 1, examCode: "ECE301", subjectName: "Programming in Java", monthYear: "November 2025", finalGrade: "A", credits: 3.0, status: "PASS" },
      { sNo: 2, examCode: "ECE302", subjectName: "Microprocessor and Microcontroller", monthYear: "November 2025", finalGrade: "C+", credits: 3.0, status: "PASS" },
      { sNo: 3, examCode: "ECE303", subjectName: "Digital Signal Processing", monthYear: "November 2025", finalGrade: "B", credits: 3.0, status: "PASS" },
      { sNo: 4, examCode: "CED311", subjectName: "Smart Cities and Technologies", monthYear: "November 2025", finalGrade: "A", credits: 3.0, status: "PASS" },
      { sNo: 5, examCode: "ECE316B", subjectName: "Operating System", monthYear: "November 2025", finalGrade: "A+", credits: 4.0, status: "PASS" },
      { sNo: 6, examCode: "OEC341H", subjectName: "Circular Economy and Plastic Waste Management", monthYear: "November 2025", finalGrade: "B+", credits: 2.0, status: "PASS" },
      { sNo: 7, examCode: "ECE321", subjectName: "Programming in Java Lab", monthYear: "November 2025", finalGrade: "A", credits: 1.0, status: "PASS" },
      { sNo: 8, examCode: "ECE322", subjectName: "Microprocessor and Microcontroller Lab", monthYear: "November 2025", finalGrade: "A", credits: 1.0, status: "PASS" },
      { sNo: 9, examCode: "ECE323", subjectName: "Digital Signal Processing Lab", monthYear: "November 2025", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 10, examCode: "CED336", subjectName: "Smart Cities and Technologies Lab", monthYear: "November 2025", finalGrade: "B+", credits: 1.0, status: "PASS" },
    ],
  },
  {
    semNumber: 6,
    roman: "VI",
    title: "Semester VI",
    academicYear: "Third Year (2025–2026)",
    examPeriod: "June 2026",
    sgpa: 8.59,
    cgpaAtSem: 8.20,
    creditsEarned: 22.0,
    cumulativeCredits: 128.0,
    image: "/academics/semester_6.jpg",
    status: "PASS",
    courses: [
      { sNo: 1, examCode: "ECE351", subjectName: "Computer Network Security", monthYear: "June 2026", finalGrade: "A+", credits: 3.0, status: "PASS" },
      { sNo: 2, examCode: "ECE352", subjectName: "VLSI Design", monthYear: "June 2026", finalGrade: "A", credits: 3.0, status: "PASS" },
      { sNo: 3, examCode: "ECE353", subjectName: "Software Engineering", monthYear: "June 2026", finalGrade: "O", credits: 3.0, status: "PASS" },
      { sNo: 4, examCode: "CED361", subjectName: "Software Application in Civil Engineering", monthYear: "June 2026", finalGrade: "A", credits: 3.0, status: "PASS" },
      { sNo: 5, examCode: "ECE366B", subjectName: "Cloud Computing", monthYear: "June 2026", finalGrade: "A", credits: 3.0, status: "PASS" },
      { sNo: 6, examCode: "REM367", subjectName: "Research Methodology", monthYear: "June 2026", finalGrade: "A+", credits: 3.0, status: "PASS" },
      { sNo: 7, examCode: "ECE371", subjectName: "Computer Network Security Lab", monthYear: "June 2026", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 8, examCode: "ECE372", subjectName: "VLSI Design Lab", monthYear: "June 2026", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 9, examCode: "PRO373", subjectName: "Major Project-I", monthYear: "June 2026", finalGrade: "A+", credits: 1.0, status: "PASS" },
      { sNo: 10, examCode: "CED386", subjectName: "Software Application in Civil Engineering Lab", monthYear: "June 2026", finalGrade: "B+", credits: 1.0, status: "PASS" },
    ],
  },
];
