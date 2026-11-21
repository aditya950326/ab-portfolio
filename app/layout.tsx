// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Birare | Embedded & Software Engineer",
  description:
    "Personal portfolio of Aditya Rahul Birare — Electronics & Computer Engineering student, firmware developer, and full-stack software engineer.",
  keywords: ["Aditya Birare", "embedded systems", "STM32", "React", "portfolio", "firmware", "full-stack"],
  authors: [{ name: "Aditya Rahul Birare" }],
  openGraph: {
    title: "Aditya Birare | Embedded & Software Engineer",
    description:
      "Firmware that runs hardware. Products that people love. Explore Aditya's Embedded and Software creative spaces.",
    url: "https://aditya-birare.vercel.app",
    siteName: "Aditya Birare Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Birare | Embedded & Software Engineer",
    description: "Firmware that runs hardware. Products that people love.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
