"use client";

export type CompactMatchStatus = "upcoming" | "live" | "fulltime" | "postponed";

export interface CompactMatchTeam {
  name: string;
  shortName?: string;  // e.g. "CHA" — auto-derived if omitted
  score?: number;
}

export interface CompactMatchCardProps {
  kickoff: string;            // "14:00"
  home: CompactMatchTeam;
  away: CompactMatchTeam;
  status: CompactMatchStatus;
  competition?: string;       // conference name or "cup"
  matchday?: number;
  venue?: string;
  minute?: number;            // live only
  onClick?: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const FONT  = "'Barlow Condensed', sans-serif";
const INTER = "'Inter', sans-serif";

function abbrev(name: string, short?: string): string {
  if (short) return short.toUpperCase();
  // Take first letter of each word, max 3 chars
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

function badgeColors(competition: string) {
  if (competition === "cup") {
    return { bg: "rgba(201,167,76,0.12)", border: "rgba(201,167,76,0.3)", text: "#D4B96E" };
  }
  return { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.3)", text: "#93C5FD" };
}

function statusLabel(status: CompactMatchStatus, minute?: number): string {
  if (status === "live") return minute != null ? `${minute}'` : "LIVE";
  if (status === "fulltime") return "FT";
  if (status === "postponed") return "PPD";
  return "";
}

function statusColor(status: CompactMatchStatus): string {
  if (status === "live") return "#F87171";
  if (status === "fulltime") return "#8899B0";
  if (status === "postponed") return "#8899B0";
  return "#8899B0";
}

// ─── Component ────────────────────────────────────────────────────────────────

export function CompactMatchCard({
  kickoff,
  home,
  away,
  status,
  competition = "CPSL",
  matchday,
  venue,
  minute,
  onClick,
}: CompactMatchCardProps) {
  const isLive      = status === "live";
  const isResult    = status === "fulltime";
  const isPostponed = status === "postponed";
  const showScore   = (isLive || isResult) && home.score != null && away.score != null;

  const cc = badgeColors(competition);
  const badgeLabel = competition === "cup" ? "CPSL CUP" : competition.toUpperCase();

  const borderColor = isLive ? "rgba(191,29,45,0.5)" : "#1E2D45";
  const shadow      = isLive ? "0 0 0 1px rgba(191,29,45,0.1), 0 2px 8px rgba(191,29,45,0.06)" : "none";

  return (
    <div
      onClick={onClick}
      style={{
        width: 200,
        flexShrink: 0,
        background: "#0D1B3E",
        border: `1px solid ${borderColor}`,
        borderRadius: 10,
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        boxShadow: shadow,
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Live accent — top edge */}
      {isLive && (
        <div style={{ height: 2, background: "#BF1D2D", flexShrink: 0 }} />
      )}

      {/* ── Top bar: badge + time/status ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 10px 6px",
        borderBottom: "1px solid #1E2D45",
      }}>
        {/* Conference badge */}
        <div style={{
          padding: "2px 6px",
          borderRadius: 3,
          background: isPostponed ? "rgba(100,116,139,0.1)" : cc.bg,
          border: `1px solid ${isPostponed ? "#1E2D45" : cc.border}`,
          maxWidth: 108,
          overflow: "hidden",
        }}>
          <span style={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 9,
            letterSpacing: "0.1em",
            color: isPostponed ? "#8899B0" : cc.text,
            whiteSpace: "nowrap",
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
            {badgeLabel}
          </span>
        </div>

        {/* Time + status */}
        <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
          {(isResult || isPostponed) && (
            <span style={{
              fontFamily: FONT,
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.08em",
              color: statusColor(status),
            }}>
              {statusLabel(status)}
            </span>
          )}
          {isLive && (
            <>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#BF1D2D" }} />
              <span style={{
                fontFamily: FONT, fontWeight: 700, fontSize: 10,
                letterSpacing: "0.08em", color: "#F87171",
              }}>
                {statusLabel(status, minute)}
              </span>
            </>
          )}
          {!isResult && !isPostponed && !isLive && (
            <span style={{
              fontFamily: FONT, fontWeight: 700, fontSize: 11,
              color: "white", letterSpacing: "-0.3px",
            }}>
              {kickoff}
            </span>
          )}
        </div>
      </div>

      {/* ── Teams block ── */}
      <div style={{ padding: "10px 10px 8px", flex: 1 }}>
        {/* Home */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
            {/* Monogram */}
            <div style={{
              width: 22, height: 22, borderRadius: 4,
              background: "#091628",
              border: "1px solid #1E2D45",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 9, color: "#C9A74C", letterSpacing: "0.02em" }}>
                {abbrev(home.name, home.shortName)}
              </span>
            </div>
            <span style={{
              fontFamily: FONT, fontWeight: 700, fontSize: 12,
              letterSpacing: "0.04em", textTransform: "uppercase",
              color: isPostponed ? "#8899B0" : "white",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {home.name}
            </span>
          </div>
          {showScore && (
            <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 18, color: "white", flexShrink: 0, marginLeft: 4 }}>
              {home.score}
            </span>
          )}
        </div>

        {/* Divider / VS */}
        {!showScore && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ flex: 1, height: 1, background: "#1E2D45" }} />
            <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, color: "#8899B0", letterSpacing: "0.06em" }}>
              VS
            </span>
            <div style={{ flex: 1, height: 1, background: "#1E2D45" }} />
          </div>
        )}
        {showScore && (
          <div style={{ height: 1, background: "#1E2D45", marginBottom: 6 }} />
        )}

        {/* Away */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
            <div style={{
              width: 22, height: 22, borderRadius: 4,
              background: "#091628",
              border: "1px solid #1E2D45",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 9, color: "#C9A74C", letterSpacing: "0.02em" }}>
                {abbrev(away.name, away.shortName)}
              </span>
            </div>
            <span style={{
              fontFamily: FONT, fontWeight: 700, fontSize: 12,
              letterSpacing: "0.04em", textTransform: "uppercase",
              color: isPostponed ? "#8899B0" : "#8899B0",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {away.name}
            </span>
          </div>
          {showScore && (
            <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 18, color: "#8899B0", flexShrink: 0, marginLeft: 4 }}>
              {away.score}
            </span>
          )}
        </div>
      </div>

      {/* ── Footer: matchday + venue ── */}
      {(matchday != null || venue) && (
        <div style={{
          padding: "6px 10px 8px",
          borderTop: "1px solid #1E2D45",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
          {matchday != null && (
            <span style={{ fontFamily: INTER, fontSize: 9, color: "#8899B0", letterSpacing: "0.04em" }}>
              Matchday {matchday}
            </span>
          )}
          {venue && (
            <span style={{
              fontFamily: INTER, fontSize: 9, color: "#8899B0",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {venue}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
