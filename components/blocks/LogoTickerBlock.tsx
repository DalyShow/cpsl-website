"use client";

// Ported from CPSL Design System — components/cpsl/modules/LogoTicker.tsx

interface TickerLogo {
  _key?: string;
  image?: { asset?: { url?: string } };
  altText?: string;
}

export interface LogoTickerBlockProps {
  heading?: string;
  logos?: TickerLogo[];
  durationSeconds?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  edgeFade?: boolean;
  tileBackground?: string;
  tileBorderColor?: string;
  sectionBackground?: string;
}

export function LogoTickerBlock({
  heading,
  logos,
  durationSeconds = 40,
  reverse = false,
  pauseOnHover = true,
  edgeFade = true,
  tileBackground = "#FFFFFF",
  tileBorderColor = "#E2E8F0",
  sectionBackground = "#FFFFFF",
}: LogoTickerBlockProps) {
  const items = (logos ?? []).filter((l) => l?.image?.asset?.url);
  if (items.length === 0) return null;

  // Duplicate the list so translateX(-50%) lands on a seamless seam.
  const loop = [...items, ...items];

  const maskStyle: React.CSSProperties | undefined = edgeFade
    ? {
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
      }
    : undefined;

  return (
    <section style={{ background: sectionBackground, padding: "64px 0" }}>
      {heading && (
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textAlign: "center",
            margin: "0 0 32px",
            color: "#091628",
          }}
        >
          {heading}
        </h2>
      )}

      <div
        className="cpsl-logo-ticker"
        data-pause-on-hover={pauseOnHover ? "true" : "false"}
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
            gap: 30,
            width: "max-content",
            animation: `cpsl-ticker-scroll ${durationSeconds}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {loop.map((logo, i) => {
            const url = logo.image?.asset?.url ?? "";
            const isClone = i >= items.length;
            return (
              <div
                key={`${logo._key ?? i}-${i}`}
                aria-hidden={isClone}
                style={{
                  flexShrink: 0,
                  width: 115,
                  height: 115,
                  background: tileBackground,
                  border: `1px solid ${tileBorderColor}`,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 16,
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
          .cpsl-logo-ticker[data-pause-on-hover="true"]:hover .cpsl-logo-ticker__track {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .cpsl-logo-ticker__track {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
