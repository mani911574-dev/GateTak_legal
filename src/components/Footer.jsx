import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <Link to="/" className="logo">
              <div className="logo-icon">G</div>
              GateTak <span>Legal</span>
            </Link>
            <p>GateTak is a smart on-demand delivery network delivering foods, grocery items, and sweets to your doorstep with speed and security.</p>
          </div>
          <div className="footer-col">
            <h4>Customer Docs</h4>
            <ul>
              <li><Link to="/customer/terms">Terms of Service</Link></li>
              <li><Link to="/customer/privacy">Privacy Policy</Link></li>
              <li><Link to="/customer/refund">Refund Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Rider Docs</h4>
            <ul>
              <li><Link to="/rider/terms">Rider Agreement</Link></li>
              <li><Link to="/rider/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Vendor Docs</h4>
            <ul>
              <li><Link to="/vendor/terms">Merchant Agreement</Link></li>
              <li><Link to="/vendor/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 GateTak. All rights reserved.</p>
          <p>Built for Google Play & App Store Compliance</p>
        </div>
      </div>
    </footer>
  );
}
