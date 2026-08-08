import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerTerms() {
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
        <h4 className="sidebar-title">Terms Outline</h4>
        <ul className="sidebar-menu">
          <li><a href="#agreement" className="active">1. Agreement to Terms</a></li>
          <li><a href="#services">2. Description of Services</a></li>
          <li><a href="#registration">3. Account Safety</a></li>
          <li><a href="#location">4. Location & Privacy</a></li>
          <li><a href="#payment">5. Ordering & Payments</a></li>
          <li><a href="#conduct">6. User Conduct</a></li>
          <li><a href="#liability">7. Liability Limits</a></li>
          <li><a href="#governing">8. Governing Law</a></li>
          <li><a href="#contact">9. Contact Us</a></li>
        </ul>
      </aside>

      <article className="legal-content">
        <div className="doc-header">
          <h1>Customer Terms of Service</h1>
          <p className="doc-date">Last Updated: August 7, 2026</p>
        </div>

        <div className="doc-body">
          <p>Welcome to GateTak! These Terms of Service govern your use of the GateTak mobile application, website, and related services (collectively, the "Platform") operated by GateTak delivery network.</p>

          <h2 id="agreement">1. Agreement to Terms</h2>
          <p>By creating an account, downloading, or using the Platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use or access the Platform.</p>

          <h2 id="services">2. Description of Services</h2>
          <p>GateTak provides an on-demand marketplace connecting customers with local merchants/stores (Vendors) to order food, grocery items, sweets, and request custom packaging deliveries. All deliveries are carried out by independent third-party delivery partners (Riders).</p>

          <h2 id="registration">3. Account Registration & Safety</h2>
          <p>You must register for an account using authentic and current information, including your full name, email address, and active phone number. You are solely responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized access or security breach of your account.</p>

          <h2 id="location">4. User Location and Privacy</h2>
          <p>To determine delivery address coordinates, calculate accurate delivery distance fees, and map nearby riders, the Platform requires access to your device's geographical location. Please review our <Link to="/customer/privacy">Privacy Policy</Link> to understand how we collect, store, and process this information.</p>

          <h2 id="payment">5. Ordering & Payment</h2>
          <ul>
            <li><strong>Order Placement:</strong> When you place an order, you agree to pay the total purchase amount, including product price, applicable sales taxes, and distance-based delivery fees.</li>
            <li><strong>Pricing:</strong> Product prices are set directly by registered vendors and are subject to change. Delivery fees are dynamically generated based on coordinates.</li>
            <li><strong>Payment Methods:</strong> We currently support Cash on Delivery (COD) and other secure platform payment gateways.</li>
          </ul>

          <h2 id="conduct">6. Platform Code of Conduct</h2>
          <p>Users must not engage in any activity that is fraudulent, abusive, or harmful to vendors, riders, or platform integrity. Making false delivery claims or placing fraudulent COD orders will lead to immediate account suspension.</p>

          <h2 id="liability">7. Limitation of Liability</h2>
          <p>GateTak serves as a delivery marketplace platform. We do not prepare, package, or quality-control merchant items, nor are we directly responsible for rider traffic delays. GateTak is not liable for merchant food standard issues or third-party rider actions.</p>

          <h2 id="governing">8. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Pakistan. Any legal disputes arising from Platform usage will fall under the jurisdiction of local courts.</p>

          <h2 id="contact">9. Contact Us</h2>
          <p>If you have any questions or feedback regarding these terms, please contact us via our <Link to="/contact">Support Form</Link>.</p>
        </div>
      </article>
      </div>
    </div>
  );
}
