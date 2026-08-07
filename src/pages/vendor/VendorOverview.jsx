import React from 'react';
import { Link } from 'react-router-dom';

export default function VendorOverview() {
  return (
    <div style={{ padding: '60px 0 20px' }}>
      <div className="overview-grid">
        
        <div className="overview-section">
          <h2>Privacy Policy</h2>
          <p>Explains store coordinate listings, secure bank settlements, menu catalog retention rules, and storefront closures.</p>
          <Link to="/vendor/privacy" className="overview-link">Read our Privacy Policy</Link>
        </div>

        <div className="overview-section">
          <h2>Terms of Service</h2>
          <p>Describes merchant agreement rules, prepared order standards, commission rates, and bi-weekly payouts cycles.</p>
          <Link to="/vendor/terms" className="overview-link">Read our Terms of Service</Link>
        </div>

        <div className="overview-section">
          <h2>GateTak Safety Center</h2>
          <p>Making services safe for everyone means protecting everyone who uses them. Request to permanently delete your GateTak account and all associated profile details safely.</p>
          <Link to="/delete-account" className="overview-link">Request Account Deletion</Link>
        </div>

        <div className="overview-section">
          <h2>GateTak Account Support</h2>
          <p>Control, protect, and secure your account and data. Read our compliance FAQs to understand prepared packaging, missing items charges, and refund disputes.</p>
          <Link to="/vendor/faq" className="overview-link">View compliance FAQs</Link>
        </div>

      </div>
    </div>
  );
}
