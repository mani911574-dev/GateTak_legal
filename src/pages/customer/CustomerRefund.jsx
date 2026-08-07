import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerRefund() {
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
    <div className="legal-layout">
      <aside class="sidebar">
        <h4 class="sidebar-title">Refund Outline</h4>
        <ul class="sidebar-menu">
          <li><a href="#cancellation" class="active">1. Cancellation Policy</a></li>
          <li><a href="#refund-elg">2. Refund Eligibility</a></li>
          <li><a href="#non-ref">3. Non-Refundable Cases</a></li>
          <li><a href="#claim">4. How to Claim</a></li>
        </ul>
      </aside>

      <article className="legal-content">
        <div className="doc-header">
          <h1>Refund & Cancellation Policy</h1>
          <p className="doc-date">Last Updated: August 7, 2026</p>
        </div>

        <div className="doc-body">
          <p>This Refund & Cancellation Policy outlines the guidelines, terms, and procedures regarding order cancellations and refund claims placed by customers on the GateTak Platform.</p>

          <h2 id="cancellation">1. Order Cancellation Policy</h2>
          <p>We work to process orders quickly. Your cancellation rights depend on the progress stage of your order:</p>
          <ul>
            <li><strong>Before Vendor Acceptance:</strong> You may cancel an order directly from the app without any fee or penalty before the status changes to "Accepted" by the Restaurant or Store.</li>
            <li><strong>After Vendor Acceptance:</strong> Once a Vendor accepts the order and begins preparing the items, cancellations are not permitted. If you choose to cancel after acceptance, you will be billed for the full order amount.</li>
            <li><strong>Rider Dispatched:</strong> Cancellations are strictly prohibited once a delivery Rider has picked up the packages from the merchant location.</li>
          </ul>

          <h2 id="refund-elg">2. Refund Eligibility Guidelines</h2>
          <p>Refunds are assessed on a case-by-case basis. You are eligible to file a refund claim if:</p>
          <ul>
            <li><strong>Missing or Incorrect Items:</strong> The delivered package is missing items you paid for, or contains incorrect items. You must provide a photo of the received order items.</li>
            <li><strong>Damaged Goods:</strong> Items arrived severely damaged due to Rider transit handling (e.g. spilled soup, open containers).</li>
            <li><strong>Non-Delivery:</strong> The rider marked the order as completed but failed to deliver the items, provided the delivery address and contact phone number were entered correctly.</li>
          </ul>

          <h2 id="non-ref">3. Non-Refundable Scenarios</h2>
          <p>No refunds will be issued in the following circumstances:</p>
          <ul>
            <li><strong>Incorrect Delivery Details:</strong> You entered an incorrect delivery address or phone number, leading to delivery failure.</li>
            <li><strong>Unreachable Contacts:</strong> The rider arrived at your location but could not contact you within 10 minutes.</li>
            <li><strong>Change of Mind:</strong> You cancel or refuse an order because you changed your mind after preparation started.</li>
          </ul>

          <h2 id="claim">4. How to Submit a Claim</h2>
          <p>To request a refund, please follow these steps within <strong>2 hours</strong> of order delivery:</p>
          <ol>
            <li>Go to the Support section in the app or visit our <Link to="/contact">Contact Page</Link>.</li>
            <li>Submit your Order ID, email address, and a clear description of the issue.</li>
            <li>Upload photographic evidence of the incorrect or damaged packaging.</li>
          </ol>
          <p>Approved claims will be refunded to your designated platform wallet or original payment source within 3–5 business days.</p>
        </div>
      </article>
    </div>
  );
}
