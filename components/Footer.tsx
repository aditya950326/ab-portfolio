// components/Footer.tsx — minimal centered footer, Style B
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border)",
        padding: "48px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
          marginBottom: 40,
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            {profile.name}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
            Electronics &amp; Computer Engineering student.
            <br />
            Firmware + Full-Stack.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
              marginBottom: 12,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Navigation
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "Embedded", href: "/embedded" },
              { label: "Software", href: "/software" },
              { label: "Certifications", href: "/certifications" },
              { label: "Academics", href: "/academics" },
              { label: "Internships", href: "/internships" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
              marginBottom: 12,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Get in Touch
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a
              href={`mailto:${profile.email}`}
              style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
          © 2026 Aditya Rahul Birare. All rights reserved.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
          Designed &amp; Built with Next.js
        </p>
      </div>
    </footer>
  );
}
