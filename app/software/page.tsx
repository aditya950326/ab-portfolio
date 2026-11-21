"use client";
// app/software/page.tsx — Software Creative Space (Style B)
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpaceSwitcher from "@/components/SpaceSwitcher";
import { softwareData } from "@/data/software";
import { profile } from "@/data/profile";
import { sortedCertifications } from "@/data/certifications";

export default function SoftwarePage() {
  const softwareCerts = sortedCertifications
    .filter((c) => c.category === "software" || c.category === "all")
    .slice(0, 4);

  return (
    <>
      <Header />
      <SpaceSwitcher />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--bg)",
            padding: "88px 24px 72px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent-tint)",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: "1.1rem" }} aria-hidden="true">💻</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)" }}>
                Software Creative Space
              </span>
            </div>
            <h1 style={{ color: "var(--text)", marginBottom: 20 }}>
              {softwareData.hero.headline}
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "var(--text-muted)",
                maxWidth: 650,
                margin: "0 auto 16px",
                fontWeight: 500,
              }}
            >
              {softwareData.hero.subtitle}
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: 600,
                margin: "0 auto 36px",
                lineHeight: 1.7,
                fontSize: "0.95rem",
              }}
            >
              {softwareData.hero.description}
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={softwareData.resumeFile} download className="btn-primary">
                ⬇ Download Resume
              </a>
              <Link href="/contact" className="btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-label">About</p>
            <h2 style={{ color: "var(--text)", marginBottom: 24 }}>
              {softwareData.about.title}
            </h2>
            {softwareData.about.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: "var(--text-muted)",
                  marginBottom: 20,
                  lineHeight: 1.75,
                  fontSize: "0.95rem",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-label">Technical Skills</p>
            <h2 style={{ color: "var(--text)", marginBottom: 12 }}>Skills</h2>
            <p className="section-subtitle">
              A curated view of tools, languages, and frameworks I work with.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {[
                { label: "Languages", items: softwareData.skills.languages },
                { label: "Frontend & Full Stack", items: softwareData.skills.frontend },
                { label: "Backend", items: softwareData.skills.backend },
                { label: "AI & LLM", items: softwareData.skills.ai },
                {
                  label: "Databases & Cloud",
                  items: [...softwareData.skills.databases, ...softwareData.skills.cloud],
                },
                {
                  label: "Design & Tools",
                  items: [...softwareData.skills.design.slice(0, 4), ...softwareData.skills.tools],
                },
              ].map((group) => (
                <div key={group.label} className="card" style={{ padding: "24px" }}>
                  <p
                    style={{
                      fontWeight: 600,
                      marginBottom: 14,
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)",
                    }}
                  >
                    {group.label}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What I Build ─────────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p className="section-label">Focus Areas</p>
            <h2 style={{ color: "var(--text)", marginBottom: 12 }}>What I Build</h2>
            <p className="section-subtitle">Four areas where I focus my software work.</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {softwareData.whatIBuild.map((item) => (
                <div key={item.number} className="card" style={{ padding: "28px 24px" }}>
                  <p
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      color: "var(--accent-tint)",
                      lineHeight: 1,
                      marginBottom: 14,
                      WebkitTextStroke: "1px var(--accent)",
                    }}
                  >
                    {item.number}
                  </p>
                  <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8, color: "var(--text)" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-label">Featured Projects</p>
            <h2 style={{ color: "var(--text)", marginBottom: 12 }}>Projects</h2>
            <p className="section-subtitle">
              Hand-crafted applications developed to solve concrete problems.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 32,
              }}
            >
              {softwareData.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="card"
                  style={{ padding: 0, overflow: "hidden" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  {proj.image ? (
                    <div
                      style={{
                        height: 200,
                        position: "relative",
                        background: "var(--bg-alt)",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 600px) 100vw, 400px"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        height: 160,
                        background: "var(--accent-tint)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "3.5rem" }} aria-hidden="true">💻</span>
                    </div>
                  )}

                  <div style={{ padding: "24px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "3px 12px",
                        borderRadius: 999,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        background: "var(--accent-tint)",
                        color: "var(--accent)",
                        marginBottom: 12,
                      }}
                    >
                      {("category" in proj && proj.category) ? (proj as { category: string }).category : "Web Application"}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        marginBottom: 10,
                        color: "var(--text)",
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        marginBottom: 16,
                      }}
                    >
                      {proj.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                      {proj.tags.map((tag) => (
                        <span key={tag} className="tag" style={{ fontSize: "0.72rem" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ fontSize: "0.8rem", padding: "8px 18px", minWidth: "auto", minHeight: 36 }}
                        >
                          Live ↗
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{ fontSize: "0.8rem", padding: "8px 18px", minWidth: "auto", minHeight: 36 }}
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-label">Experience</p>
            <h2 style={{ color: "var(--text)", marginBottom: 48 }}>Experience</h2>
            <div style={{ position: "relative", paddingLeft: 32 }}>
              <div className="timeline-line" />
              <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                {softwareData.experience.map((exp, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <div className="timeline-dot" />
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "var(--accent-tint)",
                        padding: "2px 10px",
                        borderRadius: 999,
                        marginBottom: 8,
                      }}
                    >
                      {exp.period}
                    </span>
                    <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 2, color: "var(--text)" }}>
                      {exp.role}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: 10 }}>
                      {exp.company}
                    </p>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        marginBottom: 12,
                      }}
                    >
                      {exp.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {exp.tags.map((t) => (
                        <span key={t} className="tag" style={{ fontSize: "0.72rem" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Education ────────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-label">Education</p>
            <h2 style={{ color: "var(--text)", marginBottom: 40 }}>Education</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {profile.education.map((edu, i) => (
                <div key={i} className="card" style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>
                      {edu.degree}
                    </p>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "var(--accent-tint)",
                        padding: "2px 10px",
                        borderRadius: 999,
                        height: "fit-content",
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: 4 }}>
                    {edu.institution}
                  </p>
                  <p style={{ color: "var(--accent)", fontSize: "0.88rem", fontWeight: 600 }}>
                    {edu.score}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ───────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 40,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <p className="section-label">Credentials</p>
                <h2 style={{ color: "var(--text)" }}>Certifications</h2>
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
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {softwareCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="card"
                  style={{ padding: 0, overflow: "hidden" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <div style={{ height: 130, position: "relative", background: "var(--bg-alt)" }}>
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="300px"
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", marginBottom: 2, color: "var(--text)" }}>
                      {cert.name}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
                      {cert.issuer} · {cert.issueDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--bg)",
            padding: "88px 24px",
            textAlign: "center",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 650, margin: "0 auto" }}>
            <h2 style={{ color: "var(--text)", marginBottom: 16 }}>
              Ready to ship something great?
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 32, fontSize: "0.95rem", lineHeight: 1.65 }}>
              I&apos;m looking for software engineering internships and freelance product collaborations.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
