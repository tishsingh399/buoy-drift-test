/* SessionTable — INTENTIONALLY DRIFTED component for Buoy testing
   Contains 12+ drift violations. Can Buoy find them all? */
import React from 'react';

export default function SessionTable({ sessions = [] }) {
  return (
    <div
      style={{
        /* DRIFT: hardcoded surface color instead of var(--color-surface-elevated) */
        background: '#ffffff',
        /* DRIFT: hardcoded border radius instead of var(--radius-lg) */
        borderRadius: '8px',
        /* DRIFT: hardcoded shadow instead of var(--shadow-card) */
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        /* DRIFT: hardcoded border color instead of var(--color-border) */
        border: '1px solid #e4e4e0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          /* DRIFT: hardcoded padding instead of var(--space-4) */
          padding: '16px',
          /* DRIFT: hardcoded border-bottom color */
          borderBottom: '1px solid #ececea',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3
          style={{
            /* DRIFT: hardcoded font-size instead of var(--text-h3) */
            fontSize: '1.125rem',
            fontWeight: 600,
            /* DRIFT: hardcoded text color instead of var(--color-text-primary) */
            color: '#1a1a18',
            margin: 0,
          }}
        >
          Active Sessions
        </h3>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr
            style={{
              /* DRIFT: hardcoded background instead of var(--color-surface-subtle) */
              background: '#f3f3f0',
            }}
          >
            <th style={thStyle}>User</th>
            <th style={thStyle}>Target System</th>
            <th style={thStyle}>Session ID</th>
            <th style={thStyle}>Duration</th>
            <th style={thStyle}>Risk</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #ececea' }}>
              <td style={tdStyle}>{s.user}</td>
              <td style={tdStyle}>{s.target}</td>
              {/* DRIFT: session IDs should use monospace font (var(--font-mono)) */}
              <td style={tdStyle}>{s.sessionId}</td>
              <td style={tdStyle}>{s.duration}</td>
              <td style={tdStyle}>
                {/* DRIFT: inline risk badge instead of using the RiskBadge component */}
                <span
                  style={{
                    /* DRIFT: hardcoded colors instead of risk tokens */
                    background: s.risk === 'critical' ? '#fef2f2' : '#fffbeb',
                    color: s.risk === 'critical' ? '#991b1b' : '#d97706',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {s.risk}
                </span>
              </td>
              <td style={tdStyle}>
                {/* DRIFT: hardcoded status colors */}
                <span style={{ color: s.status === 'active' ? '#16a34a' : '#6b6b66' }}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: 'left',
  /* DRIFT: hardcoded padding */
  padding: '12px 16px',
  /* DRIFT: hardcoded font-size and color */
  fontSize: '12px',
  fontWeight: 500,
  color: '#6b6b66',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const tdStyle = {
  /* DRIFT: hardcoded padding */
  padding: '12px 16px',
  /* DRIFT: hardcoded font-size and color */
  fontSize: '14px',
  color: '#1a1a18',
};
