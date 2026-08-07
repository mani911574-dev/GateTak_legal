import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="container">
      {!submitted ? (
        <div className="form-card" id="form-container">
          <div className="form-header">
            <h2>Contact Support</h2>
            <p>Submit a help request ticket and our operations agent team will contact you back shortly.</p>
          </div>

          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Full Name *</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                placeholder="Enter your name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
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
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                className="form-control" 
                placeholder="e.g. +923001234567" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userType">I am a *</label>
              <select 
                id="userType" 
                className="form-control" 
                required 
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="" disabled>Select profile category</option>
                <option value="customer">Customer</option>
                <option value="rider">Rider Partner</option>
                <option value="vendor">Vendor Merchant</option>
                <option value="other">General Inquirer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message Details *</label>
              <textarea 
                id="message" 
                className="form-control" 
                rows="5" 
                placeholder="Detail your issue or question here..." 
                required 
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-submit">Submit Support Ticket</button>
          </form>
        </div>
      ) : (
        <div className="form-card success-screen" id="success-container">
          <div className="success-icon">&check;</div>
          <h2>Message Received</h2>
          <p style={{ marginTop: '10px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Thank you for reaching out. We have registered your support ticket under review number #GT-2608. One of our support agents will respond to your email address within 24 hours.
          </p>
          <Link to="/" className="cta-button">Return to Home</Link>
        </div>
      )}
    </main>
  );
}
