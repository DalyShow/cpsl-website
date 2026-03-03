import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { sanityFetch } from "@/lib/sanity/client";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  let settings: { siteName?: string; siteDescription?: string } | null = null;
  try {
    settings = await sanityFetch<{ siteName?: string; siteDescription?: string }>(
      `*[_type == "siteSettings"][0]{ siteName, siteDescription }`
    );
  } catch {
    // Sanity unavailable — use hardcoded defaults below
  }

  const title = settings?.siteName ?? "CPSL — Carolina Premier Soccer League";
  const description =
    settings?.siteDescription ??
    "The premier soccer league spanning North and South Carolina. Live scores, standings, match schedules, and team profiles.";

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
