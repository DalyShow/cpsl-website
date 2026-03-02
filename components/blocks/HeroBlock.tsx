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
}

export function HeroBlock({
  eyebrow    = "The Carolinas' Premier League",
  heading    = "Elevating Soccer Across Two States",
  subheading = "Competitive soccer for clubs and players across North and South Carolina — professionally run, community driven.",
  ctaLabel   = "Join Our League",
  ctaHref    = "#contact",
  backgroundImage,
}: HeroBlockProps) {
  const bgImageUrl = backgroundImage?.asset?.url;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bgImageUrl
          ? `linear-gradient(to bottom, rgba(9,22,40,0.72) 0%, rgba(9,22,40,0.55) 60%, rgba(9,22,40,0.80) 100%), url(${bgImageUrl}) center/cover no-repeat`
          : "linear-gradient(135deg, #091628 0%, #0D1B3E 50%, #091628 100%)",
      }}
    >
      {/* Gold diagonal accent line — echoes the NC/SC border motif */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "#C9A74C",
        }}
      />

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
              color: "#C9A74C",
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
            marginBottom: "28px",
          }}
        >
          {heading}
        </h1>

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

        {/* CTA */}
        {ctaLabel && (
          <a
            href={ctaHref || "#"}
            style={{
              display: "inline-block",
              padding: "14px 36px",
              background: "#C9A74C",
              color: "#091628",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "17px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
