import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Outfit } from "next/font/google";
import { site } from "@/content/profile";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = new URL(site.url);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Sean Langshaw — Founder and developer",
    template: "%s · Sean Langshaw",
  },
  description: site.description,
  applicationName: "Sean Langshaw",
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  keywords: [
    "Sean Langshaw",
    "DeFi AI Technologies",
    "Sovereign Core OS",
    "KTE",
    "EcoSip",
    "treasury",
    "stablecoin",
    "gUSD",
    "AI software",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Sean Langshaw — Founder and developer",
    description: site.description,
    firstName: "Sean",
    lastName: "Langshaw",
    username: "sdlangshaw",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sdlangshaw",
    title: "Sean Langshaw — Founder and developer",
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-paper">{children}</body>
    </html>
  );
}
