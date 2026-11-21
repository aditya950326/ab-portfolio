"use client";
// app/certifications/page.tsx — Certifications page (Style B)

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { sortedCertifications, CertCategory } from "@/data/certifications";

const filters: { label: string; value: CertCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Embedded", value: "embedded" },
  { label: "Software", value: "software" },
];

export default function CertificationsPage() {
  const [activeFilter, setActiveFilter] = useState<CertCategory | "all">("all");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const filtered =
    activeFilter === "all"
      ? sortedCertifications
      : sortedCertifications.filter((c) => c.category === activeFilter || c.category === "all");

  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--bg-alt)",
            padding: "88px 24px 72px",
            textAlign: "center",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p className="section-label" style={{ textAlign: "center" }}>Credentials</p>
            <h1 style={{ color: "var(--text)", marginBottom: 16 }}>Certifications</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "clamp(1rem, 1.5vw, 1.1rem)", lineHeight: 1.65 }}>
              Credentials across embedded systems, software engineering, AI, and data — sorted newest first.
            </p>
          </div>
        </section>

        {/* ── Filter chips ─────────────────────────────────────── */}
        <section
          style={{
            background: "var(--bg)",
            padding: "20px 24px",
            position: "sticky",
            top: 64,
            zIndex: 30,
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value as CertCategory | "all")}
                  aria-pressed={isActive}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 999,
                    border: isActive ? "1px solid var(--accent)" : "1px solid var(--border)",
                    background: isActive ? "var(--accent)" : "transparent",
                    color: isActive ? "#ffffff" : "var(--text-muted)",
                    fontFamily: "var(--font)",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {f.label}{" "}
                  {f.value === "all"
                    ? `(${sortedCertifications.length})`
                    : `(${sortedCertifications.filter((c) => c.category === f.value || c.category === "all").length})`}
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Certs grid ───────────────────────────────────────── */}
        <section style={{ background: "var(--bg-alt)", padding: "56px 24px 88px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {filtered.map((cert) => (
                <div
                  key={cert.id}
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
                  {/* Thumbnail */}
                  <button
                    onClick={() => {
                      setLightboxSrc(cert.image);
                      setLightboxAlt(cert.name);
                    }}
                    aria-label={`View full image: ${cert.name}`}
                    style={{
                      display: "block",
                      width: "100%",
                      height: 180,
                      position: "relative",
                      background: "var(--bg-alt)",
                      border: "none",
                      cursor: "zoom-in",
                      padding: 0,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.3s" }}
                      sizes="(max-width: 600px) 100vw, 350px"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(37, 99, 235, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0")}
                    >
                      <span style={{ fontSize: "1.8rem", color: "#fff" }}>🔍</span>
                    </div>
                  </button>

                  {/* Info */}
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ marginBottom: 8 }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 10px",
                          borderRadius: 999,
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          background: "var(--accent-tint)",
                          color: "var(--accent)",
                        }}
                      >
                        {cert.category === "all" ? "General" : cert.category}
                      </span>
                    </div>
                    <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 4, lineHeight: 1.4, color: "var(--text)" }}>
                      {cert.name}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: 4 }}>
                      {cert.issuer}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 4 }}>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", margin: 0, opacity: 0.8 }}>
                        {cert.issueDate}
                      </p>
                      {cert.credentialId && (
                        <span style={{ fontSize: "0.68rem", color: "#6b7280", background: "#f3f4f6", padding: "1px 6px", borderRadius: 4, fontFamily: "monospace" }}>
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {cert.skills.slice(0, 3).map((s) => (
                        <span key={s} className="tag" style={{ fontSize: "0.72rem" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
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
