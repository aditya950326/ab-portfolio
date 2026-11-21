"use client";
// app/page.tsx — Landing page "/" — Style B (clean white, Inter)
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import { sortedCertifications } from "@/data/certifications";

export default function Home() {
  const previewCerts = sortedCertifications.slice(0, 3);

  const handleDownloadBothResumes = (e: React.MouseEvent) => {
    e.preventDefault();
    // 1. Software Resume
    const linkSoftware = document.createElement("a");
    linkSoftware.href = "/resumes/software-resume.pdf";
    linkSoftware.download = "Aditya_Birare_Software_Resume.pdf";
    document.body.appendChild(linkSoftware);
    linkSoftware.click();
    document.body.removeChild(linkSoftware);

    // 2. Hardware / Embedded Resume
    setTimeout(() => {
      const linkEmbedded = document.createElement("a");
      linkEmbedded.href = "/resumes/embedded-resume.pdf";
      linkEmbedded.download = "Aditya_Birare_Embedded_Hardware_Resume.pdf";
      document.body.appendChild(linkEmbedded);
      linkEmbedded.click();
      document.body.removeChild(linkEmbedded);
    }, 350);
  };

  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--bg)",
            padding: "88px 24px 72px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            id="hero-grid"
            style={{
              maxWidth: 1150,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 56,
              alignItems: "center",
            }}
          >
            {/* Left — text */}
            <div>
              <h1 style={{ color: "var(--text)", marginBottom: 20 }}>{profile.name}</h1>

              {/* Role chips */}
              <div
                id="hero-roles"
                style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}
              >
                {[
                  "Electronics & Computer Engineering Student",
                  "Aspiring Software Developer",
                  "Firmware Engineer",
                  "Full-Stack Enthusiast",
                ].map((role) => (
                  <span
                    key={role}
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      borderRadius: 999,
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      background: "var(--accent-tint)",
                      color: "var(--accent)",
                      border: "1px solid #bfdbfe",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  maxWidth: 600,
                  marginBottom: 24,
                  lineHeight: 1.65,
                  fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                }}
              >
                {profile.bio}
              </p>

              {/* Stat boxes directly in the dashboard / hero intro */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
                {[
                  { value: "8.2+", label: "CGPA" },
                  { value: "8+", label: "Key Projects" },
                  { value: "3+", label: "Internships" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "var(--accent-tint)",
                      border: "1px solid #bfdbfe",
                      borderRadius: 10,
                      padding: "14px 22px",
                      minWidth: 100,
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontSize: "1.45rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1, margin: 0 }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 6, marginBottom: 0, fontWeight: 500 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div id="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/projects" className="btn-primary">
                  Explore Projects →
                </Link>
                <button
                  type="button"
                  onClick={handleDownloadBothResumes}
                  className="btn-secondary"
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontWeight: 500,
                  }}
                  title="Download both Software and Embedded Hardware resumes"
                >
                  <span aria-hidden="true">⬇</span> Download Resumes (Both)
                </button>
                <Link href="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right — profile photo in curvy square frame */}
            <div
              id="hero-photo"
              style={{
                flexShrink: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "clamp(280px, 28vw, 360px)",
                  height: "clamp(280px, 28vw, 360px)",
                  borderRadius: 32,
                  overflow: "hidden",
                  border: "4px solid var(--border)",
                  boxShadow: "0 16px 36px -6px rgba(0, 0, 0, 0.1), 0 6px 16px -3px rgba(0, 0, 0, 0.05)",
                  background: "#ffffff",
                  position: "relative",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 24px 44px -8px rgba(0, 0, 0, 0.14), 0 8px 20px -4px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 16px 36px -6px rgba(0, 0, 0, 0.1), 0 6px 16px -3px rgba(0, 0, 0, 0.05)";
                }}
              >
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile: stack photo on top */}
          <style>{`
            @media (max-width: 768px) {
              #hero-grid {
                grid-template-columns: 1fr !important;
                text-align: center;
              }
              #hero-photo { order: -1; justify-content: center; }
              #hero-roles { justify-content: center !important; }
              #hero-buttons { justify-content: center !important; }
            }
          `}</style>
        </section>

        {/* ── Choose a Space ────────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-label" style={{ textAlign: "center" }}>Explore</p>
            <h2 style={{ textAlign: "center", color: "var(--text)", marginBottom: 12 }}>
              Choose a Space
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                marginBottom: 56,
                fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
              }}
            >
              Two worlds. One engineer.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 32,
              }}
            >
              {/* Embedded card */}
              <Link href="/embedded" style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: 20,
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--accent-tint)",
                      borderRadius: 12,
                    }}
                    aria-hidden="true"
                  >
                    ⚙️
                  </div>
                  <h3
                    style={{
                      color: "var(--text)",
                      marginBottom: 10,
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    }}
                  >
                    Embedded Space
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      marginBottom: 24,
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                    }}
                  >
                    STM32 firmware, sensor interfacing, motor control, and schematic-to-breadboard hardware engineering.
                  </p>
                  <span style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600 }}>
                    Enter Embedded Space →
                  </span>
                </div>
              </Link>

              {/* Software card */}
              <Link href="/software" style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: 20,
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--accent-tint)",
                      borderRadius: 12,
                    }}
                    aria-hidden="true"
                  >
                    💻
                  </div>
                  <h3
                    style={{
                      color: "var(--text)",
                      marginBottom: 10,
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    }}
                  >
                    Software Space
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      marginBottom: 24,
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                    }}
                  >
                    React web apps, AI integrations with OpenAI &amp; LangChain, design systems, and deployed production software.
                  </p>
                  <span style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600 }}>
                    Enter Software Space →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Certifications preview ────────────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 48,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <p className="section-label">Credentials</p>
                <h2 style={{ color: "var(--text)", marginBottom: 8 }}>Certifications</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                  A selection of my recent credentials.
                </p>
              </div>
              <Link
                href="/certifications"
                className="btn-secondary"
                style={{ fontSize: "0.85rem", padding: "9px 20px", minWidth: "auto", minHeight: 40 }}
              >
                View all →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {previewCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="card"
                  style={{ padding: 0, overflow: "hidden", cursor: "default" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <div
                    style={{
                      height: 160,
                      background: "var(--bg-alt)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 600px) 100vw, 350px"
                    />
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 4, color: "var(--text)" }}>
                      {cert.name}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: 4 }}>
                      {cert.issuer}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", opacity: 0.7 }}>
                      {cert.issueDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact CTA ───────────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "88px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 650, margin: "0 auto" }}>
            <p className="section-label" style={{ textAlign: "center" }}>Let&apos;s Connect</p>
            <h2 style={{ color: "var(--text)", marginBottom: 16 }}>
              Let&apos;s work together.
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 36, fontSize: "clamp(1rem, 1.4vw, 1.1rem)" }}>
              Whether you&apos;re looking for an embedded firmware engineer, a full-stack developer, or both — I&apos;m open to internships, freelance projects, and collaborations.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
