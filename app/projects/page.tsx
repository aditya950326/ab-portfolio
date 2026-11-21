"use client";
// app/projects/page.tsx — Projects Hub with Software & Embedded Partitions (Style B)
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { softwareData } from "@/data/software";
import { embeddedData } from "@/data/embedded";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "software" | "embedded">("all");

  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--bg)",
            padding: "88px 24px 64px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent-tint)",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: "1rem" }} aria-hidden="true">🚀</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)" }}>
                Portfolio Showcase
              </span>
            </div>
            <h1 style={{ color: "var(--text)", marginBottom: 16 }}>Projects</h1>
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: "var(--text-muted)",
                maxWidth: 680,
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              Explore my engineering work spanning production full-stack web applications and bare-metal embedded firmware systems.
            </p>

            {/* Quick Filter Tabs */}
            <div
              style={{
                display: "inline-flex",
                background: "var(--bg-alt)",
                border: "1px solid var(--border)",
                borderRadius: 999,
                padding: 4,
                gap: 4,
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  background: activeTab === "all" ? "var(--accent)" : "transparent",
                  color: activeTab === "all" ? "#ffffff" : "var(--text-muted)",
                }}
              >
                All Projects ({softwareData.projects.length + embeddedData.projects.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("software")}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  background: activeTab === "software" ? "var(--accent)" : "transparent",
                  color: activeTab === "software" ? "#ffffff" : "var(--text-muted)",
                }}
              >
                💻 Software ({softwareData.projects.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("embedded")}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  background: activeTab === "embedded" ? "var(--accent)" : "transparent",
                  color: activeTab === "embedded" ? "#ffffff" : "var(--text-muted)",
                }}
              >
                ⚡ Embedded ({embeddedData.projects.length})
              </button>
            </div>
          </div>
        </section>

        {/* ── Partitions Overview (Same as homepage style) ──────── */}
        <section style={{ background: "var(--bg-alt)", padding: "64px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-label" style={{ textAlign: "center" }}>Domains</p>
            <h2 style={{ textAlign: "center", color: "var(--text)", marginBottom: 12 }}>
              Project Partitions
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                maxWidth: 580,
                margin: "0 auto 40px",
                fontSize: "0.95rem",
              }}
            >
              Select a domain partition or scroll below to explore all implementations.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 28,
              }}
            >
              {/* Software Partition Card */}
              <div
                className="card"
                onClick={() => setActiveTab("software")}
                style={{
                  cursor: "pointer",
                  border: activeTab === "software" ? "2px solid var(--accent)" : "1px solid var(--border)",
                  position: "relative",
                  transition: "all 0.2s ease",
                }}
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: "var(--text)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", margin: 0 }}>
                    Software Projects
                  </h3>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      background: "var(--accent-tint)",
                      color: "var(--accent)",
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {softwareData.projects.length} Apps
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: 20 }}>
                  Full-stack React &amp; Vite platforms, e-commerce showcases, construction site intelligence desks, and productivity suites deployed live on Vercel.
                </p>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600 }}>
                    View Software Partition ({softwareData.projects.length}) →
                  </span>
                </div>
              </div>

              {/* Embedded Partition Card */}
              <div
                className="card"
                onClick={() => setActiveTab("embedded")}
                style={{
                  cursor: "pointer",
                  border: activeTab === "embedded" ? "2px solid var(--accent)" : "1px solid var(--border)",
                  position: "relative",
                  transition: "all 0.2s ease",
                }}
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
                  ⚡
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: "var(--text)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", margin: 0 }}>
                    Embedded Projects
                  </h3>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      background: "var(--accent-tint)",
                      color: "var(--accent)",
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {embeddedData.projects.length} Systems
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: 20 }}>
                  ARM Cortex-M0+ STM32 bare-metal C firmware, 12-bit ADC data telemetry, Arduino IR sensor motor control, and TFT display game engines.
                </p>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600 }}>
                    View Embedded Partition ({embeddedData.projects.length}) →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Software Projects Section ────────────────────────── */}
        {(activeTab === "all" || activeTab === "software") && (
          <section id="software-projects" style={{ background: "var(--bg)", padding: "80px 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
                <div>
                  <p className="section-label">Partition 01</p>
                  <h2 style={{ color: "var(--text)", margin: "0 0 8px" }}>Software Projects</h2>
                  <p className="section-subtitle" style={{ margin: 0 }}>
                    Production-grade web apps, tools, and platforms built with modern tech.
                  </p>
                </div>
                <Link href="/software" className="btn-secondary" style={{ minWidth: "auto", minHeight: 40, padding: "8px 20px" }}>
                  Explore Full Software Space →
                </Link>
              </div>

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
                    style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
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

                    <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <span
                        style={{
                          display: "inline-block",
                          alignSelf: "flex-start",
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
                          fontSize: "1.08rem",
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
                          flex: 1,
                        }}
                      >
                        {proj.description}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
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
                            style={{ fontSize: "0.82rem", padding: "8px 18px", minWidth: "auto", minHeight: 36 }}
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
                            style={{ fontSize: "0.82rem", padding: "8px 18px", minWidth: "auto", minHeight: 36 }}
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
        )}

        {/* ── Embedded Projects Section ────────────────────────── */}
        {(activeTab === "all" || activeTab === "embedded") && (
          <section
            id="embedded-projects"
            style={{
              background: activeTab === "all" ? "var(--bg-alt)" : "var(--bg)",
              padding: "80px 24px",
              borderTop: activeTab === "all" ? "1px solid var(--border)" : "none",
            }}
          >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
                <div>
                  <p className="section-label">Partition 02</p>
                  <h2 style={{ color: "var(--text)", margin: "0 0 8px" }}>Embedded &amp; Hardware Projects</h2>
                  <p className="section-subtitle" style={{ margin: 0 }}>
                    Bare-metal C firmware, ADC telemetry, sensor interfacing, and motor control.
                  </p>
                </div>
                <Link href="/embedded" className="btn-secondary" style={{ minWidth: "auto", minHeight: 40, padding: "8px 20px" }}>
                  Explore Full Embedded Space →
                </Link>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 32,
                }}
              >
                {embeddedData.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="card"
                    style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    {proj.image && (
                      <div
                        style={{
                          height: 200,
                          position: "relative",
                          background: "#ffffff",
                          overflow: "hidden",
                          borderBottom: "1px solid var(--border)",
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
                    )}
                    <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <span
                        style={{
                          display: "inline-block",
                          alignSelf: "flex-start",
                          padding: "3px 12px",
                          borderRadius: 999,
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          background: "var(--accent-tint)",
                          color: "var(--accent)",
                          marginBottom: 12,
                        }}
                      >
                        Embedded Systems
                      </span>
                      <h3
                        style={{
                          fontSize: "1.08rem",
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
                          flex: 1,
                        }}
                      >
                        {proj.description}
                      </p>

                      {/* Technical Highlights */}
                      <ul
                        style={{
                          paddingLeft: 18,
                          marginBottom: 16,
                          color: "var(--text-muted)",
                          fontSize: "0.82rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {proj.highlights.slice(0, 3).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                        {proj.tags.map((tag) => (
                          <span key={tag} className="tag" style={{ fontSize: "0.72rem" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Footer CTA ───────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "72px 24px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: 12, color: "var(--text)" }}>
              Have a project or collaboration in mind?
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 24, fontSize: "0.95rem" }}>
              I&apos;m available for software development internships, embedded hardware roles, and exciting freelance opportunities.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Get In Touch →
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
