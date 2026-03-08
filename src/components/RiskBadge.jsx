/* RiskBadge — CLEAN component using tokens correctly */
import React from 'react';

const RISK_LEVELS = {
  critical: {
    bg: 'var(--color-risk-critical-subtle)',
    color: 'var(--color-risk-critical)',
    border: 'var(--color-risk-critical-border)',
    label: 'Critical',
  },
  high: {
    bg: 'var(--color-risk-high-subtle)',
    color: 'var(--color-risk-high)',
    border: 'var(--color-risk-high-border)',
    label: 'High',
  },
  medium: {
    bg: 'var(--color-risk-medium-subtle)',
    color: 'var(--color-risk-medium)',
    border: 'var(--color-risk-medium-border)',
    label: 'Medium',
  },
  low: {
    bg: 'var(--color-risk-low-subtle)',
    color: 'var(--color-risk-low)',
    border: 'var(--color-risk-low-border)',
    label: 'Low',
  },
};

export default function RiskBadge({ level = 'medium' }) {
  const config = RISK_LEVELS[level];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-1)',
        padding: '3px var(--space-2)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-label)',
        fontWeight: 500,
        fontFamily: 'var(--font-primary)',
        background: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: config.color }} />
      {config.label}
    </span>
  );
}
