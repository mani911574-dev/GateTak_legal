import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "1. Why does GateTak require my precise location data?",
      a: "GateTak collects precise location coordinates (via GPS) to enable core features of the platform. We use this data to calculate exact distance fees from the merchant store, locate nearby delivery riders, and show live delivery progress on your tracking map. You can disable permissions, but will have to input addresses manually."
    },
    {
      q: "2. Can I cancel my delivery order after placing it?",
      a: "Yes, you can cancel your order free of charge, but only before the merchant accepts and begins preparing it. Once a vendor accepts the order or a rider is dispatched to collect items, cancellations are no longer accepted, and you will be billed for the full transaction value."
    },
    {
      q: "3. How do I request a refund for incorrect or damaged orders?",
      a: "If you receive a package containing damaged goods, missing elements, or incorrect items, you must file a claim in the support center within 2 hours of receipt. Please provide your Order ID, a short description, and clear photos of the packaging as evidence. Approved refunds are processed to your payment source in 3 to 5 business days."
    },
    {
      q: "4. How do I delete my account and associated profile records?",
      a: "You can request permanent account deletion via our secure delete page. After submitting your details, we will send a confirmation link to verify ownership. Once verified, your credentials, order history, and location logs will be purged from our servers within 7 business days."
    },
    {
      q: "5. How is my payment information handled?",
      a: "GateTak uses secure third-party payment gateways for digital card processing, meaning we never store your raw credit card numbers or PINs on our servers. For Cash on Delivery orders, transactions are settled directly with the rider upon arrival."
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 0 20px' }}>
      <div className="doc-header">
        <h1>Frequently Asked Questions</h1>
        <p className="doc-date">Clear and simple answers to help you navigate our services and privacy policies.</p>
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
                    Go directly to the <Link to="/delete-account">Account Deletion Page</Link> to get started.
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
