// Ported from CPSL Design System — components/cpsl/modules/ContentSectionCentered.tsx

interface ContentSectionCenteredProps {
  eyebrow?:    string;
  heading?:    string;
  /** Optional image from Sanity — asset is pre-dereferenced via GROQ */
  image?:      { asset?: { url?: string }; alt?: string };
  lead?:       string;
  paragraphs?: string[];
  background?: "white" | "surface" | "cream" | "navy" | "gold";
  /** 1 = single centered column, 2 = two columns at lg (default) */
  columns?:    number;
}

export function ContentSectionCentered({
  eyebrow    = "About the League",
  heading    = "Competitive Soccer Across the Carolinas",
  image,
  lead       = "From the Piedmont to the coast, CPSL brings together the best clubs in North and South Carolina under one banner — raising the standard for competitive soccer at every level.",
  paragraphs = [],
  background = "cream",
  columns    = 2,
}: ContentSectionCenteredProps) {
  const bgColor   = background === "navy"    ? "#091628"
                  : background === "surface" ? "#F4F6FA"
                  : background === "cream"   ? "#F4EFE6"
                  : background === "gold"    ? "#C9A74C"
                  : "#FFFFFF";
  const headColor = background === "navy"    ? "#F4EFE6" : "#091628";
  const leadColor = background === "navy"    ? "#94A3B8"
                  : background === "gold"    ? "#3D2400"
                  : "#475569";
  const bodyColor = background === "navy"    ? "#64748B"
                  : background === "gold"    ? "#4A2E00"
                  : "#64748B";

  const imageUrl  = image?.asset?.url;
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
                color: background === "gold" ? "#1A3D2B" : "#C9A74C",
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
              marginBottom: imageUrl ? "32px" : "24px",
            }}
          >
            {heading}
          </h2>

          {/* Optional image — between heading and lead */}
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={image?.alt ?? ""}
              style={{
                display: "block",
                width: "auto",
                maxWidth: "100%",
                maxHeight: "450px",
                margin: "0 auto 32px",
              }}
            />
          )}

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
      </div>
    </section>
  );
}
