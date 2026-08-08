import React from 'react';
import { Link } from 'react-router-dom';

export default function RiderOverview() {
  return (
    <div className="container" style={{ padding: '60px 0 20px' }}>
      <div className="overview-grid">
        
        <div className="overview-section">
          <h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heading-icon">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Privacy Policy
          </h2>
          <p>Explains background location tracking rules, customer coordinate sharing, and how we safeguard rider information.</p>
          <Link to="/rider/privacy" className="overview-link">Read our Privacy Policy</Link>
        </div>

        <div className="overview-section">
          <h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heading-icon">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Terms of Service
          </h2>
          <p>Describes driver agreement details, independent contractor rules, earnings structures, and conduct standards.</p>
          <Link to="/rider/terms" className="overview-link">Read our Terms of Service</Link>
        </div>

        <div className="overview-section">
          <h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heading-icon danger-icon">
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            GateTak Safety Center
          </h2>
          <p>Making services safe for everyone means protecting everyone who uses them. Request to permanently delete your GateTak account and all associated profile details safely.</p>
          <Link to="/delete-account" className="overview-link">Request Account Deletion</Link>
        </div>

        <div className="overview-section">
          <h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heading-icon">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            GateTak Account Support
          </h2>
          <p>Control, protect, and secure your account and data. Read our compliance FAQs to understand vehicle verification, weekly payout schedules, and settlement limits.</p>
          <Link to="/rider/faq" className="overview-link">View compliance FAQs</Link>
        </div>

      </div>
    </div>
  );
}
