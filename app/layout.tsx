import type { Metadata } from "next";
import "./globals.css";

const title = "Hengyu Jin";
const description =
  "Hengyu Jin is an undergraduate researcher working on reasoning and reliability in foundation models, AI agents, and human–AI interaction.";
const siteUrl = "https://kings099.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Hengyu Jin",
    "reliable AI",
    "reasoning in foundation models",
    "foundation models",
    "AI agents",
    "human–AI interaction",
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
