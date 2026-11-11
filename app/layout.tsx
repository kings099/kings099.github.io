import type { Metadata } from "next";
import "./globals.css";

const title = "Hengyu Jin";
const description =
  "Hengyu Jin is an undergraduate student at Tongji University and a Research Intern at Aether AI. His research focuses on reliability and reasoning in foundation models, robot-use agent systems, and AI agents.";
const siteUrl = "https://kings099.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico?v=hj-k-1", sizes: "16x16 32x32 48x48 256x256", type: "image/x-icon" },
      { url: "/favicon.svg?v=hj-k-1", sizes: "any", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png?v=hj-k-1", sizes: "180x180", type: "image/png" },
  },
  keywords: [
    "Hengyu Jin",
    "reliable AI",
    "reasoning in foundation models",
    "foundation models",
    "AI agents",
    "robot-use agents",
  ],
  authors: [{ name: "Hengyu Jin" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Hengyu Jin",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Hengyu Jin — Reasoning, Reliability, AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
