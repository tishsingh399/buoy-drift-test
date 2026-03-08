/* VaultDashboard — Mixed drift: some tokens used, some hardcoded.
   This tests whether Buoy catches partial compliance. */
import React from 'react';
import RiskBadge from '../components/RiskBadge';

export default function VaultDashboard() {
  return (
    <div
      style={{
        background: 'var(--color-surface)',    /* CLEAN */
        padding: 'var(--space-8)',              /* CLEAN */
        minHeight: '100vh',
      }}
    >
      {/* Header — mostly clean */}
      <header style={{ marginBottom: 'var(--space-6)' }}>
        <h1 style={{
          fontSize: '1.75rem',                 /* DRIFT: should be var(--text-h1) if defined */
          fontWeight: 700,
          color: 'var(--color-text-primary)',   /* CLEAN */
          margin: 0,
        }}>
          Vault Overview
        </h1>
        <p style={{
          fontSize: 'var(--text-body)',         /* CLEAN */
          /* DRIFT: hardcoded secondary text color */
          color: '#6b6b66',
          marginTop: 'var(--space-2)',          /* CLEAN */
        }}>
          Last synced: 2024-03-07T14:23:00Z
        </p>
      </header>

      {/* Stats cards — heavy drift */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        /* DRIFT: hardcoded gap instead of var(--space-4) */
        gap: '16px',
        marginBottom: 'var(--space-8)',         /* CLEAN */
      }}>
        <StatCard label="Total Accounts" value="2,847" />
        <StatCard label="Active Sessions" value="23" accent />
        <StatCard label="Pending Requests" value="7" />
        <StatCard label="Policy Violations" value="3" danger />
      </div>

      {/* Quick access list — drift zone */}
      <div style={{
        /* DRIFT: hardcoded everything */
        background: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e4e4e0',
        padding: '24px',
      }}>
        <h2 style={{
          /* DRIFT: hardcoded font-size */
          fontSize: '1.375rem',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          marginBottom: '16px',                 /* DRIFT: hardcoded spacing */
        }}>
          Recent Vault Activity
        </h2>

        {/* Fake log entries with mono drift */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <LogEntry
            timestamp="2024-03-07T14:20:33Z"
            user="admin.jsmith"
            action="Checked out credentials"
            target="prod-db-01"
            risk="high"
          />
          <LogEntry
            timestamp="2024-03-07T14:18:11Z"
            user="svc.deploy"
            action="Rotated password"
            target="staging-api-key"
            risk="low"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, accent, danger }) {
  return (
    <div style={{
      background: 'var(--color-surface-elevated)',     /* CLEAN */
      borderRadius: 'var(--radius-lg)',                /* CLEAN */
      /* DRIFT: hardcoded padding */
      padding: '20px',
      /* DRIFT: hardcoded border */
      border: '1px solid #e4e4e0',
      boxShadow: 'var(--shadow-card)',                 /* CLEAN */
    }}>
      <div style={{
        fontSize: 'var(--text-label)',                 /* CLEAN */
        fontWeight: 500,
        color: 'var(--color-text-secondary)',           /* CLEAN */
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: '8px',                            /* DRIFT */
      }}>
        {label}
      </div>
      <div style={{
        /* DRIFT: hardcoded font-size for heading number */
        fontSize: '2rem',
        fontWeight: 700,
        /* DRIFT: hardcoded accent/danger colors */
        color: danger ? '#dc2626' : accent ? '#2563eb' : '#1a1a18',
        fontVariantNumeric: 'tabular-nums',             /* CLEAN — good practice */
      }}>
        {value}
      </div>
    </div>
  );
}

function LogEntry({ timestamp, user, action, target, risk }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',                            /* CLEAN */
      /* DRIFT: hardcoded padding and border */
      padding: '8px 12px',
      borderBottom: '1px solid #ececea',
    }}>
      {/* DRIFT: timestamp should use var(--font-mono) */}
      <span style={{
        fontSize: '0.8125rem',                          /* DRIFT: should be var(--text-mono) */
        color: 'var(--color-text-tertiary)',             /* CLEAN */
        minWidth: '180px',
      }}>
        {timestamp}
      </span>
      <span style={{
        /* DRIFT: user ID should arguably be mono too */
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        minWidth: '140px',
      }}>
        {user}
      </span>
      <span style={{ flex: 1, color: '#6b6b66' }}>     {/* DRIFT: hardcoded */}
        {action} → <strong>{target}</strong>
      </span>
      <RiskBadge level={risk} />                         {/* CLEAN — using component */}
    </div>
  );
}
