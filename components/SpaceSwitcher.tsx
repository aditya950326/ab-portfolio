"use client";
// components/SpaceSwitcher.tsx — sub-nav bar shown on /embedded and /software (Style B)

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SpaceSwitcher() {
  const path = usePathname();
  const isEmbedded = path.startsWith("/embedded");
  const isSoftware = path.startsWith("/software");

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 20px",
    borderRadius: 999,
    fontFamily: "var(--font)",
    fontSize: "0.9rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all 0.2s ease",
    border: "1px solid var(--border)",
    color: "var(--text-muted)",
    background: "transparent",
  };

  const activeStyle: React.CSSProperties = {
    ...baseStyle,
    background: "var(--accent)",
    color: "#ffffff",
    border: "1px solid var(--accent)",
    fontWeight: 600,
  };

  return (
    <div
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "center",
        gap: 12,
        position: "sticky",
        top: 64,
        zIndex: 40,
      }}
    >
      <Link href="/embedded" style={isEmbedded ? activeStyle : baseStyle} aria-current={isEmbedded ? "page" : undefined}>
        <span aria-hidden="true">⚙️</span> Embedded
      </Link>
      <Link href="/software" style={isSoftware ? activeStyle : baseStyle} aria-current={isSoftware ? "page" : undefined}>
        <span aria-hidden="true">💻</span> Software
      </Link>
    </div>
  );
}
