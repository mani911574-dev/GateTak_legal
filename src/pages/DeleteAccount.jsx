import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DeleteAccount() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    reason: '',
    confirm: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.confirm) {
      setSubmitted(true);
    }
  };

  return (
    <main className="container">
      {!submitted ? (
        <div className="form-card" id="form-container">
          <div className="form-header">
            <h2 style={{ color: 'var(--danger)' }}>Delete My Account</h2>
            <p>Submit a request to permanently delete your GateTak account and all associated profile details.</p>
          </div>

          <form id="deletion-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                placeholder="Enter your full name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Registered Email Address *</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="yourname@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Registered Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                className="form-control" 
                placeholder="e.g. +923001234567" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Account Type *</label>
              <select 
                id="role" 
                className="form-control" 
                required 
                value={formData.role}
                onChange={handleChange}
              >
                <option value="" disabled>Select your profile role</option>
                <option value="customer">Customer</option>
                <option value="rider">Delivery Rider Partner</option>
                <option value="vendor">Merchant Vendor Store</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason for Deletion (Optional)</label>
              <textarea 
                id="reason" 
                className="form-control" 
                rows="3" 
                placeholder="Please let us know how we can improve our services..." 
                value={formData.reason}
                onChange={handleChange}
              />
            </div>

            <div className="form-group" style={{ marginTop: '24px', marginBottom: '24px' }}>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  id="confirm" 
                  required 
                  checked={formData.confirm}
                  onChange={handleChange}
                />
                <span>I confirm that I want to delete my GateTak account. I understand that account deletion is permanent, non-reversible, and will erase my order history, balances, and login access.</span>
              </label>
            </div>

            <button type="submit" className="btn-submit" style={{ backgroundColor: 'var(--danger)' }}>
              Submit Deletion Request
            </button>
          </form>
        </div>
      ) : (
        <div className="form-card success-screen" id="success-container">
          <div className="success-icon">&check;</div>
          <h2>Request Submitted Successfully</h2>
          <p style={{ marginTop: '10px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
            We have received your account deletion request. For security reasons, we will send a confirmation link to your registered email address or phone number to verify ownership. Your data will be permanently purged within 7 business days.
          </p>
          <Link to="/" className="cta-button">Return to Home</Link>
        </div>
      )}
    </main>
  );
}
