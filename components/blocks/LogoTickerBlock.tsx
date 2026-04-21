"use client";

// Ported from CPSL Design System — components/cpsl/modules/LogoTicker.tsx

import { useEffect, useRef, useState } from "react";

// Uploaded assets are 2x for retina; tile scaled to 80% of the half-size display.
const TILE_SIZE = 46;
const GAP = 30;

interface TickerLogo {
  _key?: string;
  asset?: { url?: string };
  altText?: string;
}

export interface LogoTickerBlockProps {
  heading?: string;
  logos?: TickerLogo[];
  durationSeconds?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  edgeFade?: boolean;
  sectionBackground?: string;
}

export function LogoTickerBlock({
  heading,
  logos,
  durationSeconds = 40,
  reverse = false,
  pauseOnHover = true,
  edgeFade = true,
  sectionBackground = "transparent",
}: LogoTickerBlockProps) {
  const items = (logos ?? []).filter((l) => l?.asset?.url);

  const viewportRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;
    const vp = viewportRef.current;
    if (!vp) return;

    const contentWidth =
      items.length * TILE_SIZE + Math.max(0, items.length - 1) * GAP;

    const check = () => {
      setShouldScroll(contentWidth > vp.clientWidth);
    };
    check();

    const ro = new ResizeObserver(check);
    ro.observe(vp);
    return () => ro.disconnect();
  }, [items.length]);

  if (items.length === 0) return null;

  // Duplicate items only when the row is wider than the viewport — this
  // lets translateX(-50%) land on a seamless seam mid-loop.
  const rendered = shouldScroll ? [...items, ...items] : items;

  const maskStyle: React.CSSProperties | undefined =
    shouldScroll && edgeFade
      ? {
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
        }
      : undefined;

  return (
    <section style={{ background: sectionBackground, padding: "16px 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {heading && (
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 16px",
              color: "inherit",
            }}
          >
            {heading}
          </h2>
        )}

        <div
          ref={viewportRef}
          className="cpsl-logo-ticker"
          data-pause-on-hover={pauseOnHover ? "true" : "false"}
          data-scrolling={shouldScroll ? "true" : "false"}
          style={{
            overflow: "hidden",
            width: "100%",
            ...maskStyle,
          }}
        >
          <div
            className="cpsl-logo-ticker__track"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: GAP,
              width: shouldScroll ? "max-content" : "100%",
              animation: shouldScroll
                ? `cpsl-ticker-scroll ${durationSeconds}s linear infinite`
                : "none",
              animationDirection: reverse ? "reverse" : "normal",
            }}
          >
            {rendered.map((logo, i) => {
              const url = logo.asset?.url ?? "";
              const isClone = shouldScroll && i >= items.length;
              return (
                <div
                  key={`${logo._key ?? i}-${i}`}
                  aria-hidden={isClone}
                  style={{
                    flexShrink: 0,
                    width: TILE_SIZE,
                    height: TILE_SIZE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={url}
                    alt={isClone ? "" : (logo.altText ?? "")}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      display: "block",
                      filter:
                        "drop-shadow(0 3px 6px rgba(0, 0, 0, 0.35)) drop-shadow(0 11px 11px rgba(0, 0, 0, 0.31)) drop-shadow(0 25px 15px rgba(0, 0, 0, 0.18)) drop-shadow(0 44px 18px rgba(0, 0, 0, 0.05)) drop-shadow(0 69px 19px rgba(0, 0, 0, 0.01))",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <style>{`
            @keyframes cpsl-ticker-scroll {
              from { transform: translate3d(0, 0, 0); }
              to   { transform: translate3d(-50%, 0, 0); }
            }
            .cpsl-logo-ticker[data-pause-on-hover="true"][data-scrolling="true"]:hover .cpsl-logo-ticker__track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .cpsl-logo-ticker__track {
                animation: none !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
