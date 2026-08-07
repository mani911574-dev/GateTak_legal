import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VendorFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "1. What are the product catalog listing rules for merchants?",
      a: "Merchants must list item prices, description details, and availability accurately. You are solely responsible for ensuring prepared foods, groceries, and sweets meet local hygiene regulations and retail pricing display laws. Expired or banned items will result in immediate store removal."
    },
    {
      q: "2. How are direct settlements processed and when?",
      a: "Non-COD merchant payouts are processed bi-weekly. Direct deposits are transferred automatically into your registered corporate bank account. Detailed payment statements showing order commission fee deductions are emailed to your account dashboard weekly."
    },
    {
      q: "3. Who pays for missing items or customer order refund claims?",
      a: "If a customer files a valid order refund claim (e.g., prepared wrong meal, missing catalog items) and support verifies the error, the cost of the disputed item is debited from your pending platform balance. If the dispute is caused by a rider delay or delivery transit spill, the merchant will not be charged."
    },
    {
      q: "4. How can I adjust store opening hours or close my listing?",
      a: "You can adjust operational hours, prep timings, and catalog listings directly inside the Merchant Portal dashboard. To permanently close your storefront and purge database records, please submit an inquiry on our account deletion page."
    }
  ];

  return (
    <div style={{ padding: '60px 0 20px' }}>
      <div className="doc-header">
        <h1>Merchant Vendor FAQs</h1>
        <p className="doc-date">Frequently asked questions regarding vendor commercial compliance, store orders, and payouts.</p>
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
                    To request storefront data purge and closure, go to the <Link to="/delete-account">Account Deletion Page</Link>.
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
