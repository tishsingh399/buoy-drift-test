import React from 'react';

export default function AccessRequestCard({ requester = 'Avery Kim', role = 'Privileged Admin' }) {
  return (
    <div
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '12px',
        padding: '18px',
        background: '#ffffff',
        width: '420px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <h3 style={{ margin: 0, fontSize: '1.125rem', color: '#111827' }}>Access Request</h3>
      <p style={{ margin: '8px 0 12px', color: '#6b7280', fontSize: '14px' }}>
        {requester} is requesting elevated access.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span style={{ color: '#374151', fontWeight: 600 }}>Role</span>
        <span style={{ color: '#2563eb', fontWeight: 600 }}>{role}</span>
      </div>
      <button
        style={{
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 14px',
          cursor: 'pointer',
        }}
      >
        Review Request
      </button>
    </div>
  );
}
