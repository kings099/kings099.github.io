import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Hengyu Jin | Academic Homepage";
const description =
  "Hengyu Jin is an undergraduate researcher working on mechanistic interpretability, reasoning in foundation models, and reliable AI agents.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const image = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "Hengyu Jin",
      "mechanistic interpretability",
      "reasoning in foundation models",
      "foundation models",
      "AI agents",
      "activation steering",
    ],
    authors: [{ name: "Hengyu Jin" }],
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "Hengyu Jin",
      images: [{ url: image, width: 1731, height: 909, alt: "Hengyu Jin — Reasoning, Reliability, AI Agents" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

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
