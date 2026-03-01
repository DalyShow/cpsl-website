import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#020B1A" }}
    >
      {/* Background diagonal motif */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden
        style={{ opacity: 0.04 }}
      >
        {/* Large ghost shield */}
        <svg
          viewBox="0 0 600 680"
          className="absolute"
          style={{ width: 700, right: -120, top: "50%", transform: "translateY(-50%)" }}
          fill="none"
        >
          <path
            d="M60 20L540 20L540 380C540 560 300 640 300 640C300 640 60 560 60 380Z"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M60 20L540 380" stroke="white" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Gold top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "#BFA05A" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{ color: "#BFA05A", borderColor: "#BFA05A33", background: "#BFA05A11" }}
            >
              2025–26 Season
            </span>
            <span className="text-xs" style={{ color: "#475569" }}>Matchweek 22 · 8 matches live</span>
          </div>

          {/* Main headline */}
          <h1
            className="text-[80px] md:text-[112px] font-black leading-none uppercase mb-6"
            style={{ fontFamily: "var(--font-display)", color: "white", letterSpacing: "-2px" }}
          >
            Carolina<br />
            <span style={{ color: "#4A78E8" }}>Premier</span><br />
            Soccer
          </h1>

          {/* Subhead */}
          <p
            className="text-lg md:text-xl mb-10 max-w-xl"
            style={{ color: "#94A3B8", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
          >
            The elite soccer league spanning North and South Carolina.
            22 clubs, 2 states, one championship.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#schedule"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#4A78E8", fontFamily: "var(--font-body)" }}
            >
              View Schedule
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#standings"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-bold transition-all hover:opacity-90"
              style={{ background: "#1E2D45", color: "white", fontFamily: "var(--font-body)" }}
            >
              Standings
            </Link>
          </div>
        </div>

        {/* Live ticker */}
        <div
          className="mt-20 flex items-center gap-4 py-4 px-5 rounded-2xl border overflow-x-auto"
          style={{ background: "#0A0E1A", borderColor: "#1E2D45" }}
        >
          <span
            className="flex items-center gap-1.5 text-xs font-bold flex-shrink-0"
            style={{ color: "#FF1744" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            LIVE
          </span>
          <div className="flex items-center gap-6 text-sm overflow-x-auto">
            {[
              { home: "Charlotte FC", away: "Raleigh AC",      score: "2–1", min: "67'" },
              { home: "Durham Utd",   away: "Triangle FC",     score: "0–0", min: "34'" },
              { home: "Greensboro",   away: "Asheville City",  score: "1–2", min: "81'" },
            ].map((m) => (
              <div key={m.home} className="flex items-center gap-2 flex-shrink-0">
                <span style={{ color: "#94A3B8" }}>{m.home}</span>
                <span className="font-bold px-2 py-0.5 rounded-lg text-xs" style={{ background: "#1E2D45", color: "white" }}>
                  {m.score}
                </span>
                <span style={{ color: "#94A3B8" }}>{m.away}</span>
                <span className="text-xs" style={{ color: "#475569" }}>{m.min}</span>
                <span className="w-px h-4 ml-2" style={{ background: "#1E2D45" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "22",  label: "Clubs" },
            { value: "2",   label: "States" },
            { value: "264", label: "Matches" },
            { value: "1.2M", label: "Fans" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl p-5 border"
              style={{ background: "#0A0E1A", borderColor: "#1E2D45" }}
            >
              <div
                className="text-4xl font-black leading-none mb-1"
                style={{ fontFamily: "var(--font-display)", color: "#4A78E8" }}
              >
                {value}
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "#475569" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
