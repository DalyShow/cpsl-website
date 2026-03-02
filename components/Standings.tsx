// Uses design system StandingsList pattern

const ROWS = [
  { pos: 1,  team: "Charlotte FC",     abbr: "CFC", color: "#3B82F6", p: 22, w: 17, d: 3, l: 2,  gd: "+31", pts: 54, form: ["W","W","W","D","W"] },
  { pos: 2,  team: "Raleigh Athletic", abbr: "RAC", color: "#7C3AEC", p: 22, w: 14, d: 4, l: 4,  gd: "+18", pts: 46, form: ["W","L","W","W","D"] },
  { pos: 3,  team: "Durham United",    abbr: "DUR", color: "#C9A74C", p: 22, w: 12, d: 5, l: 5,  gd: "+12", pts: 41, form: ["D","W","W","L","W"] },
  { pos: 4,  team: "Triangle FC",      abbr: "TRI", color: "#00C853", p: 22, w: 11, d: 4, l: 7,  gd: "+7",  pts: 37, form: ["L","W","D","W","L"] },
  { pos: 5,  team: "Greensboro SC",    abbr: "GSB", color: "#FF1744", p: 22, w: 10, d: 3, l: 9,  gd: "+2",  pts: 33, form: ["W","L","L","W","W"] },
  { pos: 6,  team: "Asheville City",   abbr: "AVL", color: "#0288D1", p: 22, w: 9,  d: 4, l: 9,  gd: "-4",  pts: 31, form: ["D","D","W","L","D"] },
];

const FORM_COLOR: Record<string, string> = {
  W: "#00C853", D: "#C9A74C", L: "#FF1744",
};

function FormDot({ result }: { result: string }) {
  return (
    <span
      className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
      style={{ background: FORM_COLOR[result] ?? "#475569" }}
    >
      {result}
    </span>
  );
}

export function Standings() {
  return (
    <section id="standings" style={{ background: "#F4EFE6", borderTop: "1px solid #D9D0BF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#C9A74C" }}>
              2025–26
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase"
              style={{ fontFamily: "var(--font-display)", color: "#091628", letterSpacing: "-1px" }}
            >
              Standings
            </h2>
          </div>
          <span className="text-xs hidden sm:block" style={{ color: "#475569" }}>Matchweek 22</span>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#D9D0BF" }}>
          {/* Column headers */}
          <div
            className="hidden sm:grid items-center px-5 py-3 text-[10px] font-bold uppercase tracking-widest"
            style={{
              gridTemplateColumns: "32px 1fr 40px 40px 40px 40px 52px 60px 96px",
              background: "#EDE8DC",
              borderBottom: "1px solid #D9D0BF",
              color: "#475569",
            }}
          >
            <span>#</span>
            <span>Club</span>
            <span className="text-center">P</span>
            <span className="text-center">W</span>
            <span className="text-center">D</span>
            <span className="text-center">L</span>
            <span className="text-center">GD</span>
            <span className="text-center">Pts</span>
            <span className="text-center">Form</span>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row.team}
              className="border-b last:border-b-0"
              style={{
                background: i === 0 ? "#E8E1D5" : i % 2 === 0 ? "#FFFFFF" : "#F4EFE6",
                borderColor: "#D9D0BF",
              }}
            >
              {/* Desktop row */}
              <div
                className="hidden sm:grid items-center px-5 py-4"
                style={{ gridTemplateColumns: "32px 1fr 40px 40px 40px 40px 52px 60px 96px" }}
              >
                <span className="text-xs font-mono" style={{ color: "#475569" }}>{row.pos}</span>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
                    style={{ background: row.color }}
                  >
                    {row.abbr}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#091628" }}>{row.team}</span>
                </div>
                {[row.p, row.w, row.d, row.l].map((v, j) => (
                  <span key={j} className="text-center text-sm" style={{ color: "#94A3B8" }}>{v}</span>
                ))}
                <span className="text-center text-sm font-semibold" style={{ color: Number(row.gd) > 0 ? "#00C853" : Number(row.gd) < 0 ? "#FF1744" : "#94A3B8" }}>
                  {row.gd}
                </span>
                <span className="text-center text-sm font-black" style={{ color: "#3B82F6" }}>{row.pts}</span>
                <div className="flex justify-center gap-1">
                  {row.form.map((r, j) => <FormDot key={j} result={r} />)}
                </div>
              </div>

              {/* Mobile row */}
              <div className="sm:hidden flex items-center gap-3 px-4 py-4">
                <span className="text-xs font-mono w-5 text-center flex-shrink-0" style={{ color: "#475569" }}>{row.pos}</span>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black text-white flex-shrink-0" style={{ background: row.color }}>
                  {row.abbr}
                </div>
                <span className="text-sm font-semibold flex-1" style={{ color: "#091628" }}>{row.team}</span>
                <div className="flex items-center gap-3 text-xs">
                  <span style={{ color: "#94A3B8" }}>{row.p}P</span>
                  <span className="font-black" style={{ color: "#3B82F6" }}>{row.pts}pts</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promotion/relegation legend */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs" style={{ color: "#475569" }}>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm" style={{ background: "#3B82F622", border: "1px solid #3B82F6" }} />
            Champions League qualification
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm" style={{ background: "#00C85322", border: "1px solid #00C853" }} />
            Playoff qualification
          </span>
        </div>
      </div>
    </section>
  );
}
