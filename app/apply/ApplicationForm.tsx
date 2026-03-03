"use client";

import { useActionState } from "react";
import { submitApplication, type FormState } from "./actions";

const AGE_GROUPS = [
  ["U8 Boys",  "U8 Girls"],
  ["U9 Boys",  "U9 Girls"],
  ["U10 Boys", "U10 Girls"],
  ["U11 Boys", "U11 Girls"],
  ["U12 Boys", "U12 Girls"],
  ["U13 Boys", "U13 Girls"],
  ["U14 Boys", "U14 Girls"],
];

const initialState: FormState = {};

// ─── Shared input style ───────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#091628",
  border: "1px solid #1E2D45",
  padding: "12px 16px",
  fontFamily: "var(--font-body, Inter, sans-serif)",
  fontSize: "15px",
  color: "#F4EFE6",
  outline: "none",
  boxSizing: "border-box",
  borderRadius: 0,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
  fontWeight: 600,
  fontSize: "12px",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#94A3B8",
  marginBottom: "8px",
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export function ApplicationForm() {
  const [state, action, isPending] = useActionState(submitApplication, initialState);

  if (state.success) {
    return (
      <div style={{
        background: "#0D1B3E",
        border: "1px solid #1E2D45",
        padding: "48px 40px",
        textAlign: "center",
      }}>
        {/* Gold check */}
        <div style={{
          width: 56,
          height: 56,
          background: "#C9A74C",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#091628" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "3px",
          color: "#E74552",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}>Application Submitted</p>
        <h2 style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontWeight: 900,
          fontSize: "32px",
          color: "#F4EFE6",
          textTransform: "uppercase",
          margin: "0 0 16px",
          lineHeight: 1,
        }}>
          We&rsquo;ve Got Your Application
        </h2>
        <p style={{
          fontFamily: "var(--font-body, Inter, sans-serif)",
          fontSize: "15px",
          color: "#94A3B8",
          lineHeight: 1.7,
          maxWidth: 480,
          margin: "0 auto",
        }}>
          A confirmation has been sent to your email. Our team will review your
          application and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate>
      {/* ── Error banner ───────────────────────────────────────────────── */}
      {state.error && (
        <div style={{
          background: "#2D0A0E",
          border: "1px solid #BF1D2D",
          padding: "14px 20px",
          marginBottom: "32px",
          fontFamily: "var(--font-body, Inter, sans-serif)",
          fontSize: "14px",
          color: "#E74552",
        }}>
          {state.error}
        </div>
      )}

      {/* ── Section: Club Information ───────────────────────────────────── */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "3px",
          color: "#E74552",
          textTransform: "uppercase",
          marginBottom: "20px",
          paddingBottom: "12px",
          borderBottom: "1px solid #1E2D45",
        }}>Club Information</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={fieldStyle}>
            <label htmlFor="clubName" style={labelStyle}>Club Name <span style={{ color: "#E74552" }}>*</span></label>
            <input id="clubName" name="clubName" type="text" required placeholder="e.g. Charlotte FC Academy" style={inputStyle} />
          </div>
          <div style={fieldStyle}>
            <label htmlFor="location" style={labelStyle}>Location <span style={{ color: "#E74552" }}>*</span></label>
            <input id="location" name="location" type="text" required placeholder="City, State" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* ── Section: Primary Contact ────────────────────────────────────── */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "3px",
          color: "#E74552",
          textTransform: "uppercase",
          marginBottom: "20px",
          paddingBottom: "12px",
          borderBottom: "1px solid #1E2D45",
        }}>Primary Contact</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          <div style={fieldStyle}>
            <label htmlFor="contactName" style={labelStyle}>Contact Name <span style={{ color: "#E74552" }}>*</span></label>
            <input id="contactName" name="contactName" type="text" required placeholder="Full name" style={inputStyle} />
          </div>
          <div style={fieldStyle}>
            <label htmlFor="contactPhone" style={labelStyle}>Phone <span style={{ color: "#E74552" }}>*</span></label>
            <input id="contactPhone" name="contactPhone" type="tel" required placeholder="(555) 000-0000" style={inputStyle} />
          </div>
        </div>

        <div style={fieldStyle}>
          <label htmlFor="contactEmail" style={labelStyle}>Email Address <span style={{ color: "#E74552" }}>*</span></label>
          <input id="contactEmail" name="contactEmail" type="email" required placeholder="contact@yourclub.com" style={inputStyle} />
        </div>
      </div>

      {/* ── Section: Age Groups ─────────────────────────────────────────── */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "3px",
          color: "#E74552",
          textTransform: "uppercase",
          marginBottom: "6px",
          paddingBottom: "12px",
          borderBottom: "1px solid #1E2D45",
        }}>
          Age Groups <span style={{ color: "#E74552" }}>*</span>
        </p>
        <p style={{
          fontFamily: "var(--font-body, Inter, sans-serif)",
          fontSize: "13px",
          color: "#64748B",
          margin: "0 0 20px",
        }}>
          Select all age groups your club intends to register.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {AGE_GROUPS.flatMap((pair) =>
            pair.map((group) => (
              <label
                key={group}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#091628",
                  border: "1px solid #1E2D45",
                  padding: "11px 14px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  type="checkbox"
                  name="ageGroups"
                  value={group}
                  style={{
                    width: 16,
                    height: 16,
                    accentColor: "#C9A74C",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                />
                <span style={{
                  fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#F4EFE6",
                  letterSpacing: "0.03em",
                }}>
                  {group}
                </span>
              </label>
            ))
          )}
        </div>
      </div>

      {/* ── Submit ──────────────────────────────────────────────────────── */}
      <button
        type="submit"
        disabled={isPending}
        style={{
          width: "100%",
          background: isPending ? "#8A6E2E" : "#C9A74C",
          border: "none",
          padding: "16px 24px",
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontWeight: 700,
          fontSize: "16px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#091628",
          cursor: isPending ? "not-allowed" : "pointer",
          transition: "background 0.15s ease",
        }}
      >
        {isPending ? "Submitting…" : "Submit Application"}
      </button>

      <p style={{
        fontFamily: "var(--font-body, Inter, sans-serif)",
        fontSize: "12px",
        color: "#475569",
        textAlign: "center",
        marginTop: "16px",
      }}>
        A confirmation will be sent to your email address.
      </p>
    </form>
  );
}
