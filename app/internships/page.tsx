"use client";
// app/internships/page.tsx — Internships showcase page

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { internships } from "@/data/internships";

const typeColors: Record<string, { bg: string; color: string }> = {
  "Full-Stack": { bg: "#eff6ff", color: "#1d4ed8" },
  Software: { bg: "#f0fdf4", color: "#15803d" },
  Hardware: { bg: "#fff7ed", color: "#c2410c" },
};

export default function InternshipsPage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");
  return (
    <>
      <Header />
      <main id="main-content" style={{ minHeight: "100vh", background: "var(--bg)", paddingBottom: 80 }}>
      {/* ── Hero ── */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "72px 24px 48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Experience
        </p>
        <h1
          style={{
            fontFamily: "var(--font)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "var(--text)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Internships
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          Real-world engineering experience — building production systems, working in
          teams, and delivering software that people actually use.
        </p>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ maxWidth: 900, margin: "0 auto 56px", padding: "0 24px" }}>
        <div
          style={{
            background: "var(--bg-alt)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "24px 32px",
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Internships Completed", value: `${internships.length}+` },
            { label: "Tech Stacks Used", value: "5+" },
            { label: "Modules Delivered", value: "13+" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                  marginBottom: 4,
                }}
              >
                {s.value}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Internship Cards ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {internships.map((intern, idx) => {
            const tc = typeColors[intern.type] ?? { bg: "#f3f4f6", color: "#374151" };
            return (
              <article
                key={intern.id}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: "32px 36px 24px",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "var(--accent)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                      <span
                        style={{
                          background: tc.bg,
                          color: tc.color,
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          padding: "3px 10px",
                          borderRadius: 20,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {intern.type}
                      </span>
                      <span
                        style={{
                          background: "var(--bg-alt)",
                          color: "var(--text-muted)",
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          padding: "3px 10px",
                          borderRadius: 20,
                        }}
                      >
                        {intern.duration}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "var(--font)",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        letterSpacing: "-0.02em",
                        marginBottom: 4,
                      }}
                    >
                      {intern.company}
                    </h2>
                    <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>
                      {intern.role}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                      📍 {intern.location} &nbsp;·&nbsp; 🗓 {intern.startDate}
                      {intern.endDate !== intern.startDate ? ` – ${intern.endDate}` : ""}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "28px 36px" }}>
                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      marginBottom: 28,
                    }}
                  >
                    {intern.description}
                  </p>

                  {/* Two-column: Responsibilities + Achievements */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: 24,
                      marginBottom: 28,
                    }}
                  >
                    {/* Responsibilities */}
                    <div>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          marginBottom: 12,
                        }}
                      >
                        Key Responsibilities
                      </p>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {intern.responsibilities.map((r) => (
                          <li
                            key={r}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 8,
                              fontSize: "0.88rem",
                              color: "var(--text-muted)",
                              lineHeight: 1.5,
                            }}
                          >
                            <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>▸</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {intern.achievements && (
                      <div>
                        <p
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: 12,
                          }}
                        >
                          Achievements
                        </p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                          {intern.achievements.map((a) => (
                            <li
                              key={a}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 8,
                                fontSize: "0.88rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.5,
                              }}
                            >
                              <span style={{ color: "#16a34a", flexShrink: 0, marginTop: 2 }}>✓</span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 10,
                      }}
                    >
                      Tech Stack
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {intern.techStack.map((t) => (
                        <span
                          key={t}
                          style={{
                            background: "var(--bg-alt)",
                            border: "1px solid var(--border)",
                            color: "var(--text-muted)",
                            fontSize: "0.78rem",
                            fontWeight: 500,
                            padding: "4px 12px",
                            borderRadius: 20,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate — clean image view without PDF toolbars */}
                  {intern.certificate && (
                    <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 12,
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            margin: 0,
                          }}
                        >
                          Internship Certificate
                        </p>
                        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                          Click to view full size
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (intern.certificate) {
                            setLightboxSrc(intern.certificate);
                            setLightboxAlt(`${intern.company} Internship Certificate`);
                          }
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          padding: 0,
                          background: "#fff",
                          border: "1px solid var(--border)",
                          borderRadius: 12,
                          overflow: "hidden",
                          cursor: "zoom-in",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          textAlign: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                        }}
                      >
                        <Image
                          src={intern.certificate}
                          alt={`${intern.company} Internship Certificate`}
                          width={800}
                          height={1035}
                          style={{
                            width: "100%",
                            maxWidth: 700,
                            height: "auto",
                            display: "block",
                            margin: "0 auto",
                          }}
                          priority
                          unoptimized
                        />
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />

    {/* Lightbox Modal */}
    {lightboxSrc && (
      <Lightbox
        src={lightboxSrc}
        alt={lightboxAlt}
        onClose={() => setLightboxSrc(null)}
      />
    )}
  </>
  );
}
