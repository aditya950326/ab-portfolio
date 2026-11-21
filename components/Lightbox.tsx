"use client";
// components/Lightbox.tsx — keyboard-accessible image lightbox
import { useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Full image: ${alt}`}
      onClick={onClose}
    >
      <div
        style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close image lightbox"
          style={{
            position: "absolute",
            top: -16,
            right: -16,
            background: "#fff",
            color: "var(--navy)",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontSize: "1.2rem",
            cursor: "pointer",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          ×
        </button>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          unoptimized
          style={{
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: 12,
          }}
        />
      </div>
    </div>
  );
}

