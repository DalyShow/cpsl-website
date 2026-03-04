"use client";

import { useState } from "react";
import { CompactMatchCard, type CompactMatchCardProps } from "@/components/ds/CompactMatchCard";
import { conferenceFor } from "@/lib/clubConferences";

// ─── Types ────────────────────────────────────────────────────────────────────

type MatchData = CompactMatchCardProps & { conference?: string };

// ─── Mock data ────────────────────────────────────────────────────────────────

const ALL_MATCHES: MatchData[] = [
  // Northwest
  { kickoff: "13:00", status: "upcoming", matchday: 18, venue: "Asheville Park",        home: { name: "Asheville FC",      }, away: { name: "Blue Ridge United" }, competition: conferenceFor("Asheville FC") },
  { kickoff: "15:00", status: "upcoming", matchday: 18, venue: "Boone Stadium",          home: { name: "Boone Valley SC",   }, away: { name: "High Country FC"    }, competition: conferenceFor("Boone Valley SC") },
  { kickoff: "17:00", status: "upcoming", matchday: 18, venue: "Hickory Sports Complex", home: { name: "Piedmont Hills SC", }, away: { name: "Foothills United"   }, competition: conferenceFor("Piedmont Hills SC") },

  // West
  { kickoff: "12:00", status: "live",     matchday: 18, venue: "Memorial Stadium",       home: { name: "Charlotte Athletic", score: 2 }, away: { name: "Lake Norman SC",  score: 1 }, competition: conferenceFor("Charlotte Athletic"), minute: 67 },
  { kickoff: "14:00", status: "upcoming", matchday: 18, venue: "Gastonia SC Field",      home: { name: "Gastonia FC",       }, away: { name: "Cabarrus United"    }, competition: conferenceFor("Gastonia FC") },
  { kickoff: "16:00", status: "upcoming", matchday: 18, venue: "Belmont Rec Center",     home: { name: "Gaston Rangers",    }, away: { name: "Steel City SC"      }, competition: conferenceFor("Gaston Rangers") },

  // Central
  { kickoff: "12:30", status: "fulltime", matchday: 18, venue: "Cornelius Fields",       home: { name: "Carolina Fusion",   score: 3 }, away: { name: "Queen City United", score: 0 }, competition: conferenceFor("Carolina Fusion") },
  { kickoff: "14:30", status: "fulltime", matchday: 18, venue: "Huntersville Park",      home: { name: "Mecklenburg SC",    score: 1 }, away: { name: "Rowan County FC",   score: 1 }, competition: conferenceFor("Mecklenburg SC") },
  { kickoff: "16:30", status: "upcoming", matchday: 18, venue: "Albemarle Stadium",      home: { name: "Stanly Athletic",   }, away: { name: "Davidson Stars"    }, competition: conferenceFor("Stanly Athletic") },

  // South
  { kickoff: "13:00", status: "upcoming", matchday: 18, venue: "Lexington Sports Park",  home: { name: "Palmetto SC",       }, away: { name: "Midlands United"   }, competition: conferenceFor("Palmetto SC") },
  { kickoff: "15:00", status: "upcoming", matchday: 18, venue: "Elgin Athletic Complex", home: { name: "Richland FC",       }, away: { name: "Newberry United"   }, competition: conferenceFor("Richland FC") },
  { kickoff: "17:00", status: "upcoming", matchday: 18, venue: "Sumter Sportsplex",      home: { name: "Sumter Rangers",    }, away: { name: "Orangeburg City SC" }, competition: conferenceFor("Sumter Rangers") },

  // Midwest
  { kickoff: "12:00", status: "live",     matchday: 18, venue: "Bryan Park",             home: { name: "Triad FC",          score: 1 }, away: { name: "High Point United", score: 0 }, competition: conferenceFor("Triad FC"), minute: 44 },
  { kickoff: "14:00", status: "upcoming", matchday: 18, venue: "Truist Stadium",         home: { name: "Winston Athletic",  }, away: { name: "Alamance SC"       }, competition: conferenceFor("Winston Athletic") },
  { kickoff: "16:00", status: "upcoming", matchday: 18, venue: "Reidsville Park",        home: { name: "Rockingham FC",     }, away: { name: "Forsyth United"    }, competition: conferenceFor("Rockingham FC") },

  // Northeast
  { kickoff: "13:00", status: "fulltime", matchday: 18, venue: "WakeMed Soccer Park",    home: { name: "Triangle SC",       score: 2 }, away: { name: "Durham United",   score: 2 }, competition: conferenceFor("Triangle SC") },
  { kickoff: "15:00", status: "upcoming", matchday: 18, venue: "Dix Park Fields",        home: { name: "Wake Forest FC",    }, away: { name: "Cary Athletic"     }, competition: conferenceFor("Wake Forest FC") },
  { kickoff: "17:00", status: "upcoming", matchday: 18, venue: "Chapel Hill Complex",    home: { name: "Chapel Hill SC",    }, away: { name: "Johnston County FC" }, competition: conferenceFor("Chapel Hill SC") },

  // Mid-Atlantic
  { kickoff: "12:00", status: "upcoming", matchday: 18, venue: "Wilmington Sports Park", home: { name: "Coastal Pines FC",  }, away: { name: "Cape Fear SC"      }, competition: conferenceFor("Coastal Pines FC") },
  { kickoff: "14:00", status: "upcoming", matchday: 18, venue: "Leland Athletic",        home: { name: "Brunswick FC",      }, away: { name: "Onslow United"     }, competition: conferenceFor("Brunswick FC") },
  { kickoff: "16:00", status: "upcoming", matchday: 18, venue: "Crystal Coast Stadium",  home: { name: "Crystal Coast SC",  }, away: { name: "Outer Banks FC"    }, competition: conferenceFor("Crystal Coast SC") },

  // Southeast
  { kickoff: "13:00", status: "upcoming", matchday: 18, venue: "Patriots Point",         home: { name: "Low Country FC",    }, away: { name: "Grand Strand SC"   }, competition: conferenceFor("Low Country FC") },
  { kickoff: "15:00", status: "upcoming", matchday: 18, venue: "Beaufort Stadium",       home: { name: "Lowcountry United", }, away: { name: "Waccamaw FC"       }, competition: conferenceFor("Lowcountry United") },
  { kickoff: "17:00", status: "upcoming", matchday: 18, venue: "Hilton Head Park",       home: { name: "Hilton Head SC",    }, away: { name: "Colleton County FC" }, competition: conferenceFor("Hilton Head SC") },
];

const CONFERENCES = [
  "Northwest", "West", "Central", "South",
  "Midwest", "Northeast", "Mid-Atlantic", "Southeast",
];

const FONT = "'Barlow Condensed', sans-serif";
const INTER = "'Inter', sans-serif";

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  seasonLabel?: string;
}

export function ScheduleByConferenceBlock({ seasonLabel = "2026–2027 SEASON · MATCHDAY 18" }: Props) {
  const [activeConf, setActiveConf] = useState<string>("all");

  // Which conferences to display
  const visibleConferences = activeConf === "all" ? CONFERENCES : [activeConf];

  return (
    <div style={{ background: "#091628" }}>

      {/* ── Conference filter tabs ── */}
      <style>{`.cpsl-sched-tabs::-webkit-scrollbar{display:none}`}</style>
      <div
        className="cpsl-sched-tabs"
        style={{ borderBottom: "1px solid #1E2D45", overflowX: "auto", scrollbarWidth: "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {/* All tab */}
          {["all", ...CONFERENCES].map((conf) => {
            const isActive = conf === activeConf;
            return (
              <button
                key={conf}
                onClick={() => setActiveConf(conf)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: `3px solid ${isActive ? "#C9A74C" : "transparent"}`,
                  marginBottom: -1,
                  padding: "0 16px",
                  height: 48,
                  cursor: "pointer",
                  fontFamily: FONT,
                  fontWeight: isActive ? 700 : 600,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isActive ? "#C9A74C" : "#8899B0",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {conf === "all" ? "All Conferences" : conf}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Conference sections ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ paddingTop: 32, paddingBottom: 48 }}>
        {visibleConferences.map((conf) => {
          const confMatches = ALL_MATCHES.filter((m) => m.competition === conf);
          if (!confMatches.length) return null;

          const liveCount = confMatches.filter((m) => m.status === "live").length;

          return (
            <div key={conf} style={{ marginBottom: 36 }}>
              {/* Conference heading */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
                paddingBottom: 10,
                borderBottom: "1px solid #1E2D45",
              }}>
                <span style={{
                  fontFamily: FONT,
                  fontWeight: 900,
                  fontSize: 18,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#F4EFE6",
                }}>
                  {conf}
                </span>
                <span style={{
                  fontFamily: INTER,
                  fontSize: 10,
                  color: "#8899B0",
                  letterSpacing: "0.04em",
                }}>
                  CONFERENCE
                </span>
                {liveCount > 0 && (
                  <div style={{
                    display: "flex", alignItems: "center", gap: 4,
                    padding: "2px 7px",
                    borderRadius: 20,
                    background: "rgba(191,29,45,0.12)",
                    border: "1px solid rgba(191,29,45,0.3)",
                    marginLeft: 4,
                  }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#BF1D2D" }} />
                    <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 9, letterSpacing: "0.08em", color: "#F87171" }}>
                      {liveCount} LIVE
                    </span>
                  </div>
                )}
              </div>

              {/* Cards row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {confMatches.map((match, i) => (
                  <CompactMatchCard key={i} {...match} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Season footer */}
      {seasonLabel && (
        <div style={{ borderTop: "1px solid #1E2D45", padding: "12px 16px", textAlign: "right" }}>
          <span style={{
            fontFamily: FONT,
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#8899B0",
          }}>
            {seasonLabel}
          </span>
        </div>
      )}
    </div>
  );
}
