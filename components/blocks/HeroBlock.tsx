// 240×190 tile: Shield A (top-left) + Hash A (mid) + Shield B (staggered) + Hash B (bottom-left)
const PATTERN_TILE = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="140"><g transform="translate(11,9) scale(0.17)" stroke="#D4B949" fill="none" stroke-width="4.396" stroke-miterlimit="10"><path d="M2.2 2.333C20.661 2.038 39.803 2.32 58.344 2.321V2.322L155.272 2.366C155.062 11.605 155.24 21.96 155.293 31.382L155.307 35.678L155.305 76.006L155.307 100.211C155.304 105.775 155.478 111.692 154.985 116.943C152.578 142.643 141.649 163.296 123.023 179.774C115.814 185.647 108.118 191.346 100.356 197.065C93.084 202.424 85.748 207.802 78.769 213.315C76.791 211.719 74.343 209.922 72.21 208.354L69.755 206.54L47.435 189.709C40.381 184.387 34.346 180.172 28.321 174.091L27.738 173.496C16.984 162.211 9.235 148.171 5.26 132.774L4.887 131.28C1.697 117.881 2.232 108.711 2.234 94.696L2.242 66.684V66.682L2.2 2.333Z"/><path d="M2.931 102.966L169.419 73.658"/><path d="M108.331 102.234L93.891 87.794"/><path d="M97.77 102.234L84.884 89.344"/><path d="M87.213 102.234L75.97 90.99"/><path d="M76.653 102.234L66.925 92.505"/><path d="M66.095 102.234L57.946 94.088"/><path d="M55.535 102.234L49.092 95.79"/></g><g transform="translate(11,9) scale(0.17)" fill="#D4B949"><path d="M82.955 63.554V35.604L84.813 33.746H92.378L94.235 35.604V42.806H90.747V37.552L90.43 37.234H86.715L86.398 37.552V61.652L86.715 61.969H90.43L90.747 61.652V56.397H94.235V63.599L92.378 65.457H84.813L82.955 63.554Z"/><path d="M74.941 33.747H78.429V65.457H74.941V53.906L67.376 39.228V65.457H63.888V33.747H68.327L74.941 46.657V33.747Z"/><path d="M81.612 156.577V125.298L83.69 123.22H92.156L94.235 125.298V133.359H90.331V127.478L89.976 127.123H85.819L85.464 127.478V154.448L85.819 154.803H89.976L90.331 154.448V148.568H94.235V156.628L92.156 158.707H83.69L81.612 156.577Z"/><path d="M63.888 156.629V148.569H67.792V154.45L68.147 154.804H72.304L72.658 154.45V143.296L72.304 142.942H66.017L63.939 140.863V125.35L66.017 123.272H74.484L76.562 125.35V133.411H72.658V127.53L72.304 127.175H68.147L67.792 127.53V138.683L68.147 139.038H74.433L76.511 141.117V156.629L74.433 158.708H65.967L63.888 156.629Z"/></g><g transform="translate(62,37) scale(0.22)" stroke="#D4B949" fill="none" stroke-width="5" stroke-miterlimit="10"><path d="M0.447 32.151L163.75 2.46"/><path d="M129.65 34.827L109.209 14.387"/><path d="M114.7 34.827L96.459 16.582"/><path d="M99.756 34.827L83.84 18.911"/><path d="M84.807 34.827L71.036 21.056"/><path d="M69.862 34.827L58.327 23.296"/><path d="M54.913 34.827L45.793 25.707"/></g><g transform="translate(100,76) scale(0.17)" stroke="#D4B949" fill="none" stroke-width="4.396" stroke-miterlimit="10"><path d="M2.2 2.333C20.661 2.038 39.803 2.32 58.344 2.321V2.322L155.272 2.366C155.062 11.605 155.24 21.96 155.293 31.382L155.307 35.678L155.305 76.006L155.307 100.211C155.304 105.775 155.478 111.692 154.985 116.943C152.578 142.643 141.649 163.296 123.023 179.774C115.814 185.647 108.118 191.346 100.356 197.065C93.084 202.424 85.748 207.802 78.769 213.315C76.791 211.719 74.343 209.922 72.21 208.354L69.755 206.54L47.435 189.709C40.381 184.387 34.346 180.172 28.321 174.091L27.738 173.496C16.984 162.211 9.235 148.171 5.26 132.774L4.887 131.28C1.697 117.881 2.232 108.711 2.234 94.696L2.242 66.684V66.682L2.2 2.333Z"/><path d="M2.931 102.966L169.419 73.658"/><path d="M108.331 102.234L93.891 87.794"/><path d="M97.77 102.234L84.884 89.344"/><path d="M87.213 102.234L75.97 90.99"/><path d="M76.653 102.234L66.925 92.505"/><path d="M66.095 102.234L57.946 94.088"/><path d="M55.535 102.234L49.092 95.79"/></g><g transform="translate(100,76) scale(0.17)" fill="#D4B949"><path d="M82.955 63.554V35.604L84.813 33.746H92.378L94.235 35.604V42.806H90.747V37.552L90.43 37.234H86.715L86.398 37.552V61.652L86.715 61.969H90.43L90.747 61.652V56.397H94.235V63.599L92.378 65.457H84.813L82.955 63.554Z"/><path d="M74.941 33.747H78.429V65.457H74.941V53.906L67.376 39.228V65.457H63.888V33.747H68.327L74.941 46.657V33.747Z"/><path d="M81.612 156.577V125.298L83.69 123.22H92.156L94.235 125.298V133.359H90.331V127.478L89.976 127.123H85.819L85.464 127.478V154.448L85.819 154.803H89.976L90.331 154.448V148.568H94.235V156.628L92.156 158.707H83.69L81.612 156.577Z"/><path d="M63.888 156.629V148.569H67.792V154.45L68.147 154.804H72.304L72.658 154.45V143.296L72.304 142.942H66.017L63.939 140.863V125.35L66.017 123.272H74.484L76.562 125.35V133.411H72.658V127.53L72.304 127.175H68.147L67.792 127.53V138.683L68.147 139.038H74.433L76.511 141.117V156.629L74.433 158.708H65.967L63.888 156.629Z"/></g><g transform="translate(6,104) scale(0.18)" stroke="#D4B949" fill="none" stroke-width="5" stroke-miterlimit="10"><path d="M0.447 32.151L163.75 2.46"/><path d="M129.65 34.827L109.209 14.387"/><path d="M114.7 34.827L96.459 16.582"/><path d="M99.756 34.827L83.84 18.911"/><path d="M84.807 34.827L71.036 21.056"/><path d="M69.862 34.827L58.327 23.296"/><path d="M54.913 34.827L45.793 25.707"/></g></svg>`;

const patternBg = `url("data:image/svg+xml,${encodeURIComponent(PATTERN_TILE)}")`;

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
          : "#041124",
      }}
    >
      {/* Brand pattern — shield + hash motif tiled at low opacity */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: patternBg,
          backgroundSize: "180px 140px",
          backgroundRepeat: "repeat",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {/* Gold diagonal accent line — echoes the NC/SC border motif */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "#D4B949",
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
              background: "#D4B949",
              color: "#041124",
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
