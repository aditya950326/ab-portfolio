"use client";
// app/contact/page.tsx — Contact page (Style B: clean white, Inter)

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || "Portfolio enquiry")}&body=${encodeURIComponent(`Hi Aditya,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#ffffff",
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "12px 16px",
    color: "var(--text)",
    fontFamily: "var(--font)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

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
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <p className="section-label" style={{ textAlign: "center" }}>Get in Touch</p>
            <h1 style={{ color: "var(--text)", marginBottom: 16 }}>
              Let&apos;s Talk.
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "clamp(1rem, 1.5vw, 1.1rem)", lineHeight: 1.65 }}>
              Whether you have an internship offer, a freelance project, or just want to say hello — I&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* ── Contact grid ─────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 56,
              alignItems: "start",
            }}
          >
            {/* ── Left — Contact info ─────────────────────────── */}
            <div>
              <h2 style={{ color: "var(--text)", marginBottom: 36, fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
                Contact Information
              </h2>

              {/* Contact cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    value: profile.email,
                    href: `mailto:${profile.email}`,
                    cta: "Send Email →",
                  },
                  {
                    icon: "📱",
                    label: "Phone",
                    value: profile.phone,
                    href: `tel:${profile.phone}`,
                    cta: "Call Now →",
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    value: "linkedin.com/in/aditya-birare",
                    href: profile.linkedin,
                    cta: "Connect →",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card"
                    style={{ padding: "20px 24px" }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                      <span
                        style={{
                          fontSize: "1.4rem",
                          width: 44,
                          height: 44,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "var(--accent-tint)",
                          borderRadius: 10,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "var(--text-muted)",
                            marginBottom: 4,
                          }}
                        >
                          {item.label}
                        </p>
                        <p style={{ color: "var(--text)", fontSize: "0.9rem", marginBottom: 6 }}>
                          {item.value}
                        </p>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{
                            color: "var(--accent)",
                            textDecoration: "none",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                          }}
                        >
                          {item.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div
                style={{
                  padding: "16px 20px",
                  background: "var(--bg-alt)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  marginBottom: 32,
                }}
              >
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: 4 }}>
                  📍 Location
                </p>
                <p style={{ color: "var(--text)", fontSize: "0.9rem", marginBottom: 2 }}>
                  {profile.location}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                  Available for Relocation
                </p>
              </div>

              {/* Resume downloads */}
              <div
                style={{
                  padding: "20px 24px",
                  background: "var(--bg-alt)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 14, color: "var(--text)" }}>
                  Download Resumes
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a
                    href="/resumes/embedded-resume.pdf"
                    download
                    className="btn-secondary"
                    style={{ textAlign: "center", fontSize: "0.85rem", minHeight: 40 }}
                  >
                    ⬇ Embedded Resume
                  </a>
                  <a
                    href="/resumes/software-resume.pdf"
                    download
                    className="btn-secondary"
                    style={{ textAlign: "center", fontSize: "0.85rem", minHeight: 40 }}
                  >
                    ⬇ Software Resume
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right — Contact form ─────────────────────────── */}
            <div>
              <h2 style={{ color: "var(--text)", marginBottom: 36, fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
                Send a Message
              </h2>

              {submitted ? (
                <div
                  style={{
                    background: "var(--accent-tint)",
                    border: "1px solid #bfdbfe",
                    borderRadius: 12,
                    padding: "40px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "2.5rem", marginBottom: 16 }} aria-hidden="true">✅</p>
                  <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 8, color: "var(--text)" }}>
                    Email client opened!
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    Your message has been pre-filled. Just hit Send in your email client.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ marginTop: 24 }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <label htmlFor="name" style={{ display: "block", marginBottom: 6, fontSize: "0.9rem", fontWeight: 500, color: "var(--text)" }}>
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Aditya Birare"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: "block", marginBottom: 6, fontSize: "0.9rem", fontWeight: 500, color: "var(--text)" }}>
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" style={{ display: "block", marginBottom: 6, fontSize: "0.9rem", fontWeight: 500, color: "var(--text)" }}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity / Collaboration"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" style={{ display: "block", marginBottom: 6, fontSize: "0.9rem", fontWeight: 500, color: "var(--text)" }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Hi Aditya, I'd love to..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
                      onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--border)")}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
