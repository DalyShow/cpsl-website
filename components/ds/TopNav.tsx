// Ported from CPSL Design System — components/cpsl/navigation/TopNav.tsx
// Extended for marketing site: Next.js Link, mobile menu, CTA button

"use client";
import { useState } from "react";
import Link from "next/link";

export interface TopNavItem {
  label: string;
  href: string;
}

export interface TopNavProps {
  items?: TopNavItem[];
  logoText?: string;
  logoSub?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showLive?: boolean;
}

export function TopNav({
  items = [
    { label: "Standings", href: "#standings" },
    { label: "Schedule",  href: "#schedule" },
    { label: "Teams",     href: "#teams" },
    { label: "Stats",     href: "#stats" },
    { label: "News",      href: "#news" },
  ],
  logoText = "CPSL",
  logoSub  = "CAROLINA PREMIER",
  ctaLabel = "Join Our League",
  ctaHref  = "#schedule",
  showLive = false,
}: TopNavProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [menuOpen, setMenuOpen]       = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#091628", borderBottom: "1px solid #1E2D45" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">

        {/* ── Logo ─────────────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 py-4 flex-shrink-0"
          onClick={() => setActiveIndex(-1)}
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#3B82F6" }}
          >
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M1 1L15 1L15 12C15 16 8 17 8 17C8 17 1 16 1 12Z" fill="none" stroke="white" strokeWidth="1.5" />
              <path d="M4 9.5L8 6L12 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-sm leading-none" style={{ fontFamily: "var(--font-display)" }}>
              {logoText}
            </div>
            <div className="text-[10px] tracking-widest" style={{ color: "#475569", fontFamily: "var(--font-display)" }}>
              {logoSub}
            </div>
          </div>
          <div className="sm:hidden text-white font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
            {logoText}
          </div>
        </Link>

        {/* ── Desktop nav ──────────────────────────────────────────── */}
        <nav className="hidden md:flex gap-1">
          {items.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveIndex(i)}
              className="px-4 py-4 text-sm font-medium border-b-2 transition-colors"
              style={{
                color: i === activeIndex ? "white" : "#64748B",
                borderColor: i === activeIndex ? "#3B82F6" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── Right slot ───────────────────────────────────────────── */}
        <div className="flex items-center gap-2 sm:gap-3">
          {showLive && (
            <div
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold"
              style={{ background: "#FF1744", color: "white" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="hidden sm:inline">Live</span>
            </div>
          )}

          <Link
            href={ctaHref}
            className="hidden md:flex items-center px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "#3B82F6" }}
          >
            {ctaLabel}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-5 rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#94A3B8" }} />
            <span className={`block h-0.5 w-5 rounded transition-all ${menuOpen ? "opacity-0" : ""}`} style={{ background: "#94A3B8" }} />
            <span className={`block h-0.5 w-5 rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#94A3B8" }} />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────── */}
      {menuOpen && (
        <div style={{ background: "#091628", borderTop: "1px solid #1E2D45" }}>
          {items.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => { setActiveIndex(i); setMenuOpen(false); }}
              className="block px-6 py-4 text-sm font-medium border-b"
              style={{ color: i === activeIndex ? "#3B82F6" : "#94A3B8", borderColor: "#1E2D45" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href={ctaHref}
              className="block text-center px-4 py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "#3B82F6" }}
              onClick={() => setMenuOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
