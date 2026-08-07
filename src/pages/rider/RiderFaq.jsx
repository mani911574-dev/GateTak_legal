import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RiderFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "1. Why is background location tracking mandatory for riders?",
      a: "To operate on the GateTak network, we must track your device location in the background (when the application is closed or not in focus). This is necessary to auto-assign delivery orders close to your position, calculate real-time estimated arrival times (ETA), and allow customers to track transit routes. Tracking is immediately disabled when you set your status to \"Offline\" or sign out."
    },
    {
      q: "2. Am I an employee of GateTak?",
      a: "No, all rider partners operate on the platform as independent contractors. You are free to set your own working hours, choose when to log on or off, and manage your vehicle. You are solely responsible for filing your own income taxes and securing vehicle insurance."
    },
    {
      q: "3. How and when will I receive my earnings?",
      a: "Rider partner earnings are compiled weekly. Your payout combines the base delivery rates plus coordinates-calculated distance rewards. Payments are deposited directly to your registered bank account or digital mobile wallet. Any cash collected on Cash on Delivery orders must be reconciled according to weekly platform limits."
    },
    {
      q: "4. What criteria can result in rider account suspension?",
      a: "Rider accounts may be suspended due to policy breaches, including failure to reconcile weekly COD cash collections, cancellation of orders after package pickup, customer abuse, traffic violations, or failure to maintain vehicle roadworthiness."
    }
  ];

  return (
    <div style={{ padding: '60px 0 20px' }}>
      <div className="doc-header">
        <h1>Rider Partner FAQs</h1>
        <p className="doc-date">Frequently asked questions regarding rider compliance, background locations, and payouts.</p>
      </div>

      <div className="doc-body" style={{ maxWidth: '750px', margin: '0 auto' }}>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                <span>{item.q}</span>
                <span className="faq-icon" style={{
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  transform: activeIndex === index ? 'rotate(45deg)' : 'none',
                  fontWeight: 'bold',
                  color: 'var(--primary)'
                }}>+</span>
              </div>
              <div className="faq-answer" style={{
                maxHeight: activeIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease, padding 0.3s ease',
                padding: activeIndex === index ? '16px 20px' : '0 20px',
                borderTop: activeIndex === index ? '1px solid var(--border-color)' : 'none'
              }}>
                <p>{item.a}</p>
                {index === 3 && (
                  <p style={{ marginTop: '10px' }}>
                    If you wish to close your rider record, go to the <Link to="/delete-account">Account Deletion Page</Link>.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
