const MATCHES = [
  {
    id: 1,
    competition: "CPSL Premiership",
    date: "Sat 8 Mar, 7:30pm",
    status: "upcoming",
    home: { name: "Charlotte FC",     abbr: "CFC", color: "#3B82F6" },
    away: { name: "Raleigh Athletic", abbr: "RAC", color: "#7C3AEC" },
    venue: "Bank of America Stadium",
  },
  {
    id: 2,
    competition: "CPSL Cup · QF",
    date: "Sun 9 Mar, 5:00pm",
    status: "upcoming",
    home: { name: "Durham United",   abbr: "DUR", color: "#C9A74C" },
    away: { name: "Triangle FC",     abbr: "TRI", color: "#00C853" },
    venue: "Durham Athletic Park",
  },
  {
    id: 3,
    competition: "CPSL Premiership",
    date: "Wed 12 Mar, 7:00pm",
    status: "upcoming",
    home: { name: "Greensboro SC",   abbr: "GSB", color: "#FF1744" },
    away: { name: "Asheville City",  abbr: "AVL", color: "#0288D1" },
    venue: "Truist Stadium",
  },
];

function MatchCard({ match }: { match: typeof MATCHES[0] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border hover:border-[#3B82F6] transition-colors group"
      style={{ background: "#FFFFFF", borderColor: "#D9D0BF" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "#D9D0BF" }}>
        <span className="text-xs font-semibold" style={{ color: "#475569" }}>{match.competition}</span>
        <span className="text-xs font-bold" style={{ color: "#C9A74C" }}>{match.date}</span>
      </div>

      {/* Teams */}
      <div className="px-5 py-6 flex items-center justify-between">
        {/* Home */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black text-white"
            style={{ background: match.home.color }}
          >
            {match.home.abbr}
          </div>
          <span className="text-xs font-semibold text-center" style={{ color: "#64748B" }}>
            {match.home.name}
          </span>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center gap-1 px-4">
          <span
            className="text-3xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#091628", letterSpacing: "-1px" }}
          >
            VS
          </span>
          <span className="text-[10px] tracking-widest uppercase" style={{ color: "#94A3B8" }}>
            {match.status}
          </span>
        </div>

        {/* Away */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black text-white"
            style={{ background: match.away.color }}
          >
            {match.away.abbr}
          </div>
          <span className="text-xs font-semibold text-center" style={{ color: "#64748B" }}>
            {match.away.name}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-5 py-3 border-t"
        style={{ borderColor: "#D9D0BF" }}
      >
        <span className="text-xs" style={{ color: "#64748B" }}>{match.venue}</span>
        <button
          className="text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
          style={{ color: "#3B82F6", background: "#3B82F622" }}
        >
          Tickets →
        </button>
      </div>
    </div>
  );
}

export function FeaturedMatches() {
  return (
    <section id="schedule" style={{ background: "#EDE8DC", borderTop: "1px solid #D9D0BF" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#3B82F6" }}>
              Upcoming
            </p>
            <h2
              className="text-5xl md:text-6xl font-black uppercase"
              style={{ fontFamily: "var(--font-display)", color: "#091628", letterSpacing: "-1px" }}
            >
              Next Matches
            </h2>
          </div>
          <button
            className="hidden md:flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "#475569" }}
          >
            Full schedule
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MATCHES.map((m) => <MatchCard key={m.id} match={m} />)}
        </div>
      </div>
    </section>
  );
}
