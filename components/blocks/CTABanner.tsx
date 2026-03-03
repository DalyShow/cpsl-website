// Ported from CPSL Design System — components/cpsl/modules/CTABanner.tsx

type Background = "white" | "cream" | "surface" | "navy" | "gold"

interface CTABannerProps {
  eyebrow?:             string;
  headline?:            string;
  headlineAccent?:      string;
  description?:         string;
  primaryCtaLabel?:     string;
  primaryCtaHref?:      string;
  /** When true, renders the secondary (ghost) button alongside the primary CTA */
  showSecondaryButton?: boolean;
  secondaryCtaLabel?:   string;
  secondaryCtaHref?:    string;
  background?:          Background;
}

// Navy and gold are fixed editorial colours; light variants adapt to the active theme
const outerBgMap: Record<Background, string> = {
  white:   "var(--bg-page)",   // was #FFFFFF
  cream:   "var(--bg-page)",   // was #F4EFE6
  surface: "var(--bg-page)",   // was #F4F6FA
  navy:    "#091628",
  gold:    "#C9A74C",
};

const cardBgMap: Record<Background, string> = {
  white:   "#091628",
  cream:   "#091628",
  surface: "#091628",
  navy:    "#0D1B3E",
  gold:    "#091628",
};

export function CTABanner({
  eyebrow             = "2025–26 Season",
  headline            = "REGISTER YOUR CLUB",
  headlineAccent      = "BEFORE APRIL 30",
  description         = "Applications for the 2025–26 CPSL Premiership and Development League are now open. Secure your spot for next season before the deadline closes.",
  primaryCtaLabel     = "Apply Now",
  primaryCtaHref      = "#",
  showSecondaryButton = false,
  secondaryCtaLabel   = "Learn More",
  secondaryCtaHref    = "#",
  background          = "cream",
}: CTABannerProps) {
  const outerBg = outerBgMap[background] ?? outerBgMap.cream;
  const cardBg  = cardBgMap[background]  ?? cardBgMap.cream;

  return (
    <section style={{ background: outerBg, padding: "64px 24px" }}>
      <div
        className="mx-auto max-w-7xl rounded-2xl overflow-hidden border"
        style={{ background: cardBg, borderColor: "#1E2D45" }}
      >
        <div className="px-6 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Left — copy */}
          <div>
            {eyebrow && (
              <div style={{ color: "#E74552", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                {eyebrow}
              </div>
            )}
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 800, color: "white", lineHeight: 0.95, letterSpacing: "-1.5px", marginBottom: "16px", textTransform: "uppercase" }}>
              {headline}
              {headlineAccent && (
                <><br /><span style={{ color: "#C9A74C" }}>{headlineAccent}</span></>
              )}
            </h2>
            {description && (
              <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.65, maxWidth: "520px" }}>
                {description}
              </p>
            )}
          </div>

          {/* Right — CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href={primaryCtaHref}
              style={{
                display: "inline-block",
                background: "#C9A74C",
                color: "#091628",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "14px 32px",
                textDecoration: "none",
                textAlign: "center",
                minWidth: "180px",
              }}
            >
              {primaryCtaLabel}
            </a>

            {showSecondaryButton && (
              <a
                href={secondaryCtaHref}
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#C9A74C",
                  border: "2px solid #C9A74C",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  padding: "12px 32px",
                  textDecoration: "none",
                  textAlign: "center",
                  minWidth: "180px",
                }}
              >
                {secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
