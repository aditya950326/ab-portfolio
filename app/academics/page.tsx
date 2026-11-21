"use client";
// app/academics/page.tsx — Official Academic Records & Semester Marksheets (Style B)
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { academicOverview, semesterRecords } from "@/data/academics";
import { profile } from "@/data/profile";

export default function AcademicsPage() {
  const [selectedSemIndex, setSelectedSemIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const currentSem = semesterRecords[selectedSemIndex];

  // Grade badge styling helper
  const getGradeStyle = (grade: string) => {
    switch (grade) {
      case "O":
        return { bg: "#fef3c7", text: "#92400e", border: "#fde68a" }; // Gold
      case "A+":
        return { bg: "var(--accent-tint)", text: "var(--accent)", border: "#bfdbfe" }; // Blue
      case "A":
        return { bg: "#ecfdf5", text: "#065f46", border: "#a7f3d0" }; // Green
      case "B+":
        return { bg: "#f3f4f6", text: "#1f2937", border: "#e5e7eb" }; // Gray
      default:
        return { bg: "#f9fafb", text: "#4b5563", border: "#e5e7eb" };
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--bg)",
            padding: "80px 24px 64px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent-tint)",
                borderRadius: 999,
                padding: "6px 18px",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: "1rem" }} aria-hidden="true">🎓</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)" }}>
                Academic Transcript &amp; Records
              </span>
            </div>
            <h1 style={{ color: "var(--text)", marginBottom: 14 }}>Academics</h1>
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: "var(--text-muted)",
                maxWidth: 720,
                margin: "0 auto 16px",
                lineHeight: 1.6,
              }}
            >
              Official B.Tech semester examination results, grade cards, and cumulative progression at{" "}
              <strong>Maharashtra Institute of Technology (MIT)</strong>.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
              HTNo: <strong>{academicOverview.htNo}</strong> &nbsp;|&nbsp; Branch:{" "}
              <strong>{academicOverview.branch}</strong> &nbsp;|&nbsp; Standing:{" "}
              <strong>{academicOverview.currentSemester}</strong>
            </p>
          </div>
        </section>

        {/* ── Key Metrics Overview Banner ──────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "40px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
              }}
            >
              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1, margin: 0 }}>
                  {academicOverview.finalCgpa.toFixed(2)}
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginTop: 8, marginBottom: 2 }}>
                  Final CGPA
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                  Cumulative Grade Point Average
                </p>
              </div>

              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1, margin: 0 }}>
                  {academicOverview.totalCredits.toFixed(0)}
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginTop: 8, marginBottom: 2 }}>
                  Total Credits Earned
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                  Across Semesters I – VI
                </p>
              </div>

              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: 700, color: "#10b981", lineHeight: 1, margin: 0 }}>
                  0 / 64
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginTop: 8, marginBottom: 2 }}>
                  Due Subjects (Backlogs)
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                  100% First-Attempt Clearance
                </p>
              </div>

              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", lineHeight: 1, margin: 0 }}>
                  VII Sem
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginTop: 8, marginBottom: 2 }}>
                  Current Academic Standing
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                  Graduation Year: 2027
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Semester Tabs & Active Record ─────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "72px 24px" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <p className="section-label">Mark Sheets &amp; Performance</p>
            <h2 style={{ color: "var(--text)", marginBottom: 8 }}>Semester Results</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Select a semester tab to review the official mark sheet image, SGPA, and course grade breakdown.
            </p>

            {/* Semester Tabs */}
            <div
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                paddingBottom: 8,
                marginBottom: 36,
                borderBottom: "1px solid var(--border)",
              }}
            >
              {semesterRecords.map((sem, idx) => {
                const isSelected = selectedSemIndex === idx;
                return (
                  <button
                    key={sem.semNumber}
                    type="button"
                    onClick={() => setSelectedSemIndex(idx)}
                    style={{
                      padding: "10px 22px",
                      borderRadius: "8px 8px 0 0",
                      border: "1px solid",
                      borderColor: isSelected ? "var(--accent)" : "transparent",
                      borderBottom: isSelected ? "3px solid var(--accent)" : "3px solid transparent",
                      background: isSelected ? "var(--accent-tint)" : "transparent",
                      color: isSelected ? "var(--accent)" : "var(--text-muted)",
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: "0.92rem",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>{sem.title}</span>
                    <span
                      style={{
                        marginLeft: 8,
                        fontSize: "0.75rem",
                        padding: "2px 8px",
                        borderRadius: 999,
                        background: isSelected ? "var(--accent)" : "var(--bg-alt)",
                        color: isSelected ? "#ffffff" : "var(--text-muted)",
                      }}
                    >
                      {sem.sgpa.toFixed(2)} SGPA
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Semester Content Layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
                gap: 40,
                alignItems: "start",
              }}
            >
              {/* Left Column: Official Portal Marksheet Image */}
              <div>
                <div
                  className="card"
                  style={{
                    padding: 16,
                    background: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 320,
                      borderRadius: 8,
                      overflow: "hidden",
                      background: "#ffffff",
                      cursor: "zoom-in",
                      border: "1px solid var(--border)",
                    }}
                    onClick={() => {
                      setLightboxSrc(currentSem.image);
                      setLightboxAlt(`MIT Official Marksheet — ${currentSem.title}`);
                    }}
                    title="Click to view full high-resolution marksheet"
                  >
                    <Image
                      src={currentSem.image}
                      alt={`MIT Official Marksheet — ${currentSem.title}`}
                      fill
                      unoptimized
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 14,
                      padding: "0 6px",
                    }}
                  >
                    <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                      🔍 Click image to inspect full high-resolution marksheet
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setLightboxSrc(currentSem.image);
                        setLightboxAlt(`MIT Official Marksheet — ${currentSem.title}`);
                      }}
                      className="btn-secondary"
                      style={{
                        padding: "6px 14px",
                        minWidth: "auto",
                        minHeight: 32,
                        fontSize: "0.78rem",
                      }}
                    >
                      Zoom Marksheet ↗
                    </button>
                  </div>
                </div>

                {/* Semester Summary Info Box */}
                <div
                  className="card"
                  style={{
                    marginTop: 20,
                    padding: "20px 24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                    gap: 16,
                    textAlign: "center",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Semester SGPA
                    </span>
                    <p style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--accent)", margin: "4px 0 0" }}>
                      {currentSem.sgpa.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Credits Earned
                    </span>
                    <p style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--text)", margin: "4px 0 0" }}>
                      {currentSem.creditsEarned.toFixed(0)}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      CGPA At Semester
                    </span>
                    <p style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--text)", margin: "4px 0 0" }}>
                      {currentSem.cgpaAtSem.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Semester Status
                    </span>
                    <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#10b981", margin: "8px 0 0" }}>
                      {currentSem.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Subject / Course Table */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
                    {currentSem.title} Course Breakdown
                  </h3>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    Exam Session: {currentSem.examPeriod}
                  </span>
                </div>

                <div
                  className="card"
                  style={{
                    padding: 0,
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", textAlign: "left" }}>
                      <thead>
                        <tr style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
                          <th style={{ padding: "12px 14px", fontWeight: 600, color: "var(--text-muted)" }}>#</th>
                          <th style={{ padding: "12px 14px", fontWeight: 600, color: "var(--text-muted)" }}>Code</th>
                          <th style={{ padding: "12px 14px", fontWeight: 600, color: "var(--text-muted)" }}>Subject Title</th>
                          <th style={{ padding: "12px 14px", fontWeight: 600, color: "var(--text-muted)", textAlign: "center" }}>Grade</th>
                          <th style={{ padding: "12px 14px", fontWeight: 600, color: "var(--text-muted)", textAlign: "center" }}>Credits</th>
                          <th style={{ padding: "12px 14px", fontWeight: 600, color: "var(--text-muted)", textAlign: "center" }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSem.courses.map((c, i) => {
                          const badge = getGradeStyle(c.finalGrade);
                          return (
                            <tr
                              key={c.examCode}
                              style={{
                                borderBottom: i === currentSem.courses.length - 1 ? "none" : "1px solid var(--border)",
                                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
                              }}
                            >
                              <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{c.sNo}</td>
                              <td style={{ padding: "10px 14px", fontWeight: 600, color: "var(--text)" }}>{c.examCode}</td>
                              <td style={{ padding: "10px 14px", color: "var(--text)" }}>{c.subjectName}</td>
                              <td style={{ padding: "10px 14px", textAlign: "center" }}>
                                <span
                                  style={{
                                    display: "inline-block",
                                    minWidth: 32,
                                    padding: "2px 8px",
                                    borderRadius: 6,
                                    fontSize: "0.78rem",
                                    fontWeight: 700,
                                    background: badge.bg,
                                    color: badge.text,
                                    border: `1px solid ${badge.border}`,
                                  }}
                                >
                                  {c.finalGrade}
                                </span>
                              </td>
                              <td style={{ padding: "10px 14px", textAlign: "center", fontWeight: 600, color: "var(--text)" }}>
                                {c.credits.toFixed(1)}
                              </td>
                              <td style={{ padding: "10px 14px", textAlign: "center" }}>
                                <span
                                  style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                    color: "#059669",
                                  }}
                                >
                                  ✓ PASS
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Semester Progression Timeline Summary ─────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "72px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-label" style={{ textAlign: "center" }}>Progression</p>
            <h2 style={{ textAlign: "center", color: "var(--text)", marginBottom: 12 }}>
              6-Semester Academic Progression
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                maxWidth: 600,
                margin: "0 auto 48px",
                fontSize: "0.95rem",
              }}
            >
              Steady academic consistency maintaining an overall 8.20 CGPA across all core electronics, computer engineering, and lab courses.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 16,
              }}
            >
              {semesterRecords.map((sem, idx) => (
                <div
                  key={sem.semNumber}
                  className="card"
                  onClick={() => setSelectedSemIndex(idx)}
                  style={{
                    padding: "20px 16px",
                    textAlign: "center",
                    cursor: "pointer",
                    border: selectedSemIndex === idx ? "2px solid var(--accent)" : "1px solid var(--border)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)" }}>
                    SEM {sem.roman}
                  </span>
                  <p style={{ fontSize: "1.45rem", fontWeight: 700, color: "var(--text)", margin: "6px 0 2px" }}>
                    {sem.sgpa.toFixed(2)}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                    SGPA ({sem.creditsEarned} Cr)
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 10,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#10b981",
                    }}
                  >
                    All Passed
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Prior Secondary Education ─────────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "72px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p className="section-label">Foundation</p>
            <h2 style={{ color: "var(--text)", marginBottom: 12 }}>Previous Academics</h2>
            <p className="section-subtitle" style={{ marginBottom: 36 }}>
              Secondary and Higher Secondary qualifications prior to B.Tech enrollment.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {profile.education
                .filter((e) => !e.degree.includes("B.Tech"))
                .map((edu) => (
                  <div key={edu.degree} className="card" style={{ padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "3px 10px",
                          borderRadius: 999,
                          background: "var(--accent-tint)",
                          color: "var(--accent)",
                        }}
                      >
                        {edu.period}
                      </span>
                      <strong style={{ fontSize: "1.1rem", color: "var(--accent)" }}>{edu.score}</strong>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", margin: "10px 0 6px" }}>
                      {edu.degree}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
                      {edu.institution}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* ── Footer CTA ───────────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "72px 24px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 650, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: 12, color: "var(--text)" }}>
              Need official transcripts or verification?
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 28, fontSize: "0.95rem" }}>
              Official sealed university transcripts and grade card verifications are available upon request for internship and employment background checks.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact For Verification →
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Engineering Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={lightboxAlt}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      <Footer />
    </>
  );
}
