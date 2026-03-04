"use client";

// Ported from CPSL Design System — components/cpsl/modules/ContentSectionCentered.tsx

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieField {
  url?:      string;
  loop?:     boolean;
  autoplay?: boolean;
}

interface ContentSectionCenteredProps {
  eyebrow?:    string;
  heading?:    string;
  /** Optional image from Sanity — asset is pre-dereferenced via GROQ */
  image?:      { asset?: { url?: string }; alt?: string };
  /** Optional Lottie animation — sits in same slot as image, takes precedence */
  lottie?:     LottieField;
  lead?:       string;
  paragraphs?: string[];
  background?: "white" | "surface" | "cream" | "navy" | "gold";
  /** 1 = single centered column, 2 = two columns at lg (default) */
  columns?:    number;
  /** Optional image at the bottom of the section, 120px below the last content */
  bottomImage?:  { asset?: { url?: string }; alt?: string };
  /** Optional Lottie animation at the bottom — takes precedence over bottomImage */
  bottomLottie?: LottieField;
}

export function ContentSectionCentered({
  eyebrow    = "About the League",
  heading    = "Competitive Soccer Across the Carolinas",
  image,
  lottie,
  lead       = "From the Piedmont to the coast, CPSL brings together the best clubs in North and South Carolina under one banner — raising the standard for competitive soccer at every level.",
  paragraphs = [],
  background = "cream",
  columns    = 2,
  bottomImage,
  bottomLottie,
}: ContentSectionCenteredProps) {
  // Navy and gold are fixed editorial colours; light variants adapt to the active theme
  const bgColor   = background === "navy" ? "#091628"
                  : background === "gold" ? "#C9A74C"
                  : "var(--bg-page)";          // cream / white / surface → theme-aware
  const headColor = background === "navy" ? "#F4EFE6"
                  : background === "gold" ? "#3D2400"
                  : "var(--fg-primary)";
  const leadColor = background === "navy" ? "#94A3B8"
                  : background === "gold" ? "#3D2400"
                  : "var(--fg-secondary)";
  const bodyColor = background === "navy" ? "#64748B"
                  : background === "gold" ? "#4A2E00"
                  : "var(--fg-secondary)";

  const imageUrl       = image?.asset?.url;
  const bottomImageUrl = bottomImage?.asset?.url;
  const hasTopMedia    = !!(lottie?.url || imageUrl);
  const hasBottomMedia = !!(bottomLottie?.url || bottomImageUrl);
  const mid  = Math.ceil(paragraphs.length / 2);
  const col1 = paragraphs.slice(0, mid);
  const col2 = paragraphs.slice(mid);

  return (
    <section style={{ background: bgColor }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">

        {/* Centered header */}
        <div className="mx-auto max-w-2xl text-center" style={{ marginBottom: "64px" }}>
          {eyebrow && (
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                color: background === "gold"  ? "#1A3D2B"
                     : background === "navy"  ? "#E74552"   /* crimson-400 — always dark */
                     : "var(--eyebrow-color)",               /* gold ↔ crimson via theme  */
                letterSpacing: "0.12em",
              }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: headColor,
              marginBottom: hasTopMedia ? "32px" : "24px",
            }}
          >
            {heading}
          </h2>

          {/* Optional media — between heading and lead. Lottie takes precedence. */}
          {lottie?.url ? (
            <div style={{ margin: "0 auto 32px", width: "100%", maxWidth: "100%" }}>
              <DotLottieReact
                src={lottie.url}
                loop={lottie.loop ?? true}
                autoplay={lottie.autoplay ?? true}
                style={{ width: "100%", height: 320 }}
              />
            </div>
          ) : imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={image?.alt ?? ""}
              className="max-h-[250px] lg:max-h-[450px]"
              style={{
                display: "block",
                width: "auto",
                maxWidth: "100%",
                margin: "0 auto 32px",
              }}
            />
          ) : null}

          {lead && (
            <p className="text-lg leading-relaxed" style={{ color: leadColor }}>
              {lead}
            </p>
          )}
        </div>

        {/* Divider */}
        {paragraphs.length > 0 && (
          <div
            className="mx-auto mb-12"
            style={{
              width: "48px",
              height: "3px",
              background: background === "gold" ? "#091628" : "#C9A74C",
            }}
          />
        )}

        {/* Body copy */}
        {paragraphs.length > 0 && (
          columns === 1 ? (
            <div className="mx-auto max-w-2xl flex flex-col gap-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-8" style={{ color: bodyColor }}>{p}</p>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6">
                {col1.map((p, i) => (
                  <p key={i} className="text-base leading-8" style={{ color: bodyColor }}>{p}</p>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                {col2.map((p, i) => (
                  <p key={i} className="text-base leading-8" style={{ color: bodyColor }}>{p}</p>
                ))}
              </div>
            </div>
          )
        )}

        {/* Bottom media — 120px below last content. Lottie takes precedence. */}
        {bottomLottie?.url ? (
          <div style={{ margin: "120px auto 0", width: "100%", maxWidth: "100%" }}>
            <DotLottieReact
              src={bottomLottie.url}
              loop={bottomLottie.loop ?? true}
              autoplay={bottomLottie.autoplay ?? true}
              style={{ width: "100%", height: 400 }}
            />
          </div>
        ) : bottomImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bottomImageUrl}
            alt={bottomImage?.alt ?? ""}
            style={{
              display: "block",
              width: "auto",
              maxWidth: "100%",
              maxHeight: "450px",
              margin: "120px auto 0",
            }}
          />
        ) : null}
      </div>
    </section>
  );
}
