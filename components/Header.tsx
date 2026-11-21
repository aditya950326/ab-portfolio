"use client";
// components/Header.tsx — sticky top bar, horizontal nav, hamburger on mobile

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Embedded", href: "/embedded" },
  { label: "Software", href: "/software" },
  { label: "Certifications", href: "/certifications" },
  { label: "Academics", href: "/academics" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Border on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeMenu]);

  // Prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Top bar ──────────────────────────────────────────── */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
          transition: "border-color 0.2s ease",
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
            aria-label="Welcome — home"
          >
            Welcome
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
              className="hidden-mobile"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font)",
                        fontSize: "0.9rem",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "var(--accent)" : "var(--text-muted)",
                        textDecoration: "none",
                        padding: "6px 12px",
                        borderRadius: 6,
                        transition: "color 0.15s ease, background 0.15s ease",
                        display: "block",
                      }}
                      aria-current={isActive ? "page" : undefined}
                      onMouseEnter={(e) => {
                        if (!isActive) (e.target as HTMLElement).style.color = "var(--text)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) (e.target as HTMLElement).style.color = "var(--text-muted)";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Contact CTA — desktop */}
            <Link
              href="/contact"
              className="btn-primary hidden-mobile"
              style={{ minWidth: "auto", fontSize: "0.85rem", padding: "9px 20px", minHeight: 38, marginLeft: 16 }}
            >
              Contact me
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              aria-label="Open navigation menu"
              className="show-mobile"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: 6,
                color: "var(--text)",
                padding: "8px 12px",
                fontFamily: "var(--font)",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "none",
              }}
            >
              ☰ Menu
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile menu overlay ────────────────────────────────── */}
      <div
        id="main-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: 20,
            right: 24,
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            fontSize: "1.8rem",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ×
        </button>

        <nav>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    style={{
                      fontFamily: "var(--font)",
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: 700,
                      color: isActive ? "var(--accent)" : "var(--text)",
                      textDecoration: "none",
                      display: "block",
                      letterSpacing: "-0.02em",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn-primary"
                style={{ marginTop: 8 }}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
