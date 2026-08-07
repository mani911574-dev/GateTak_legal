import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="portal-hero">
        <div className="container">
          <h1>GateTak Legal & Support Portal</h1>
          <p>Select your user profile below to view the relevant terms of service, privacy policy, and account management tools required for platform usage.</p>
        </div>
      </section>

      <section className="container">
        <div className="portal-grid">
          
          {/* Customer Card */}
          <Link to="/customer" className="portal-card">
            <div className="portal-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Customer Portal</h3>
            <p>Read customer terms, privacy policies, refund and cancellation conditions, and access customer account management resources.</p>
            <div className="portal-btn">
              <span>Explore Terms</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

          {/* Rider Card */}
          <Link to="/rider" className="portal-card">
            <div className="portal-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3>Rider Partner Portal</h3>
            <p>Read Rider service agreements, background checks, road safety policies, and access rider partner support resources.</p>
            <div className="portal-btn">
              <span>Explore Terms</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

          {/* Vendor Card */}
          <Link to="/vendor" className="portal-card">
            <div className="portal-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3>Merchant Vendor Portal</h3>
            <p>Read vendor store terms, commercial fee structures, product listing policies, and merchant operational guidelines.</p>
            <div className="portal-btn">
              <span>Explore Terms</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

        </div>
      </section>

      {/* Support and Deletion Grid */}
      <section className="container" style={{ marginTop: '40px' }}>
        <div className="portal-grid-2">
          
          <Link to="/contact" className="portal-card portal-card-left">
            <h4 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>Need General Support?</h4>
            <p style={{ marginBottom: '16px' }}>Have questions about our services or need assistance with your active orders? Contact our support agents directly.</p>
            <div className="portal-btn" style={{ justifyContent: 'flex-start' }}>
              <span>Get Support</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

          <Link to="/delete-account" className="portal-card portal-card-left">
            <h4 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--danger)' }}>Request Account Deletion</h4>
            <p style={{ marginBottom: '16px' }}>Would you like to delete your account? You can submit your account deletion request securely using our portal form.</p>
            <div className="portal-btn" style={{ justifyContent: 'flex-start', color: 'var(--danger)' }}>
              <span>Delete Account</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
