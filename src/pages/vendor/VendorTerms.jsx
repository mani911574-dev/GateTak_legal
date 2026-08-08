import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VendorTerms() {
  useEffect(() => {
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    const headings = document.querySelectorAll('.doc-body h2');

    if (sidebarLinks.length > 0 && headings.length > 0) {
      const clickHandler = (e) => {
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            sidebarLinks.forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
          }
        }
      };

      sidebarLinks.forEach(link => {
        link.addEventListener('click', clickHandler);
      });

      const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeId = '#' + entry.target.id;
            sidebarLinks.forEach(link => {
              if (link.getAttribute('href') === activeId) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, observerOptions);

      headings.forEach(heading => {
        if (heading.id) {
          observer.observe(heading);
        }
      });

      return () => {
        sidebarLinks.forEach(link => {
          link.removeEventListener('click', clickHandler);
        });
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="container">
      <div className="legal-layout">
      <aside className="sidebar">
        <h4 className="sidebar-title">Merchant Outline</h4>
        <ul className="sidebar-menu">
          <li><a href="#listings" className="active">1. Pricing & Listings</a></li>
          <li><a href="#prep">2. Order Preparation</a></li>
          <li><a href="#fees">3. Payouts & Fees</a></li>
          <li><a href="#refunds">4. Customer Refunds</a></li>
          <li><a href="#operations">5. Operations & Exit</a></li>
          <li><a href="#contact">6. Contact Support</a></li>
        </ul>
      </aside>

      <article className="legal-content">
        <div className="doc-header">
          <h1>Merchant Vendor Agreement</h1>
          <p className="doc-date">Last Updated: August 7, 2026</p>
        </div>

        <div className="doc-body">
          <p>This Merchant Vendor Agreement outlines the terms under which registered businesses (Vendors) list, sell, and prepare goods for distribution via the GateTak Platform.</p>

          <h2 id="listings">1. Merchant Listings & Pricing</h2>
          <p>Vendors are responsible for updating their digital storefront catalog on the GateTak Merchant Portal. This includes:</p>
          <ul>
            <li>Providing accurate product descriptions, price lists, photos, and availability status.</li>
            <li>Adhering to food hygiene, grocery safety standards, and pricing accuracy policies.</li>
            <li>Ensuring pricing complies with local retail display standards.</li>
          </ul>

          <h2 id="prep">2. Order Preparation and Quality Control</h2>
          <p>Upon receiving a digital order request, the Vendor agrees to accept and prepare items within estimated preparation times. You agree to prepare and seal all items securely to prevent spilling or contamination during Rider transport.</p>

          <h2 id="fees">3. Commission Fees & Payout Cycles</h2>
          <p>GateTak charges a service commission fee per completed transaction as defined in your merchant signup agreement. Settlement of non-COD merchant earnings will be processed bi-weekly to your registered business bank account.</p>

          <h2 id="refunds">4. Customer Refunds & Discrepancies</h2>
          <p>If a customer requests a refund due to missing items, incorrect preparations, or poor food quality, and the claim is verified, the cost of the item will be debited from the Vendor's pending platform balance.</p>

          <h2 id="operations">5. Store Operations and Termination</h2>
          <p>Vendors must keep active store operational hours updated. GateTak reserves the right to suspend or remove storefronts listing expired inventory, illegal goods, or receiving high customer complaint ratios.</p>

          <h2 id="contact">6. Contact Support</h2>
          <p>For store payout adjustments or support queries, contact us at <Link to="/contact">Merchant Support</Link>.</p>
        </div>
      </article>
      </div>
    </div>
  );
}
