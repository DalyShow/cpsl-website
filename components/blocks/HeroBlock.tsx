"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieField {
  asset?: { url?: string };
  loop?: boolean;
  autoplay?: boolean;
}

interface HeroBlockProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: {
    asset?: { url?: string };
    alt?: string;
  };
  backgroundBlendMode?: string;
  backgroundOpacity?: number;
  image?: {
    asset?: { url?: string };
    alt?: string;
  };
  lottie?: LottieField;
  mediaMaxWidth?: number;
}

export function HeroBlock({
  eyebrow    = "The Carolinas' Premier League",
  heading    = "Elevating Soccer Across Two States",
  subheading = "Competitive soccer for clubs and players across North and South Carolina — professionally run, community driven.",
  ctaLabel   = "Join Our League",
  ctaHref    = "#contact",
  backgroundImage,
  backgroundBlendMode = "normal",
  backgroundOpacity = 1,
  image,
  lottie,
  mediaMaxWidth = 320,
}: HeroBlockProps) {
  const bgImageUrl = backgroundImage?.asset?.url;
  const lottieUrl  = lottie?.asset?.url;
  const imageUrl   = image?.asset?.url;
  const hasMedia   = !!(lottieUrl || imageUrl);

  return (
    <section
      style={{
        position: "relative",
        // Pull up behind the logo ticker (≈78 px tall) so the background
        // image extends under it. Extra top padding keeps the content
        // positioned as if the hero started below the ticker.
        marginTop: "-78px",
        padding: "174px 24px 96px",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        background: "#041124",
        overflow: "hidden",
      }}
    >
      {bgImageUrl && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, rgba(9,22,40,0.72) 0%, rgba(9,22,40,0.55) 60%, rgba(9,22,40,0.80) 100%), url(${bgImageUrl}) center/cover no-repeat`,
            backgroundBlendMode: backgroundBlendMode,
            opacity: backgroundOpacity,
            pointerEvents: "none",
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        {eyebrow && (
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#D4B949",
              marginBottom: "20px",
            }}
          >
            {eyebrow}
          </p>
        )}

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 8vw, 88px)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#F4EFE6",
            marginBottom: hasMedia ? "28px" : "28px",
          }}
        >
          {heading}
        </h1>

        {/* Image or Lottie under the headline — lottie wins if both supplied */}
        {hasMedia && (
          <div
            style={{
              maxWidth: mediaMaxWidth,
              width: "100%",
              margin: "0 auto 28px",
            }}
          >
            {lottieUrl ? (
              <DotLottieReact
                src={lottieUrl}
                loop={lottie?.loop ?? true}
                autoplay={lottie?.autoplay ?? true}
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={imageUrl!}
                alt={image?.alt ?? ""}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            )}
          </div>
        )}

        {/* Subheading */}
        {subheading && (
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.65,
              color: "#94A3B8",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            {subheading}
          </p>
        )}

        {/* CTA — matches the primary button in the nav */}
        {ctaLabel && (
          <a
            href={ctaHref || "#"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              background: "#D4B949",
              color: "#041124",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              transition: "opacity 0.15s",
            }}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
