import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerPrivacy() {
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
      <aside class="sidebar">
        <h4 class="sidebar-title">Privacy Outline</h4>
        <ul class="sidebar-menu">
          <li><a href="#collect" class="active">1. Information We Collect</a></li>
          <li><a href="#location-req">2. Location Data Rules</a></li>
          <li><a href="#use">3. How We Use Data</a></li>
          <li><a href="#sharing">4. Data Sharing</a></li>
          <li><a href="#security">5. Data Security</a></li>
          <li><a href="#deletion">6. User Controls & Deletion</a></li>
          <li><a href="#contact-support">7. Contact Support</a></li>
        </ul>
      </aside>

      <article className="legal-content">
        <div className="doc-header">
          <h1>Customer Privacy Policy</h1>
          <p className="doc-date">Last Updated: August 7, 2026</p>
        </div>

        <div className="doc-body">
          <p>GateTak ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy details how we collect, store, share, and protect your personal information when you use the GateTak mobile application and online delivery platform.</p>

          <h2 id="collect">1. Information We Collect</h2>
          <p>We collect information to provide a seamless and secure delivery experience. This includes:</p>
          <ul>
            <li><strong>Personal Profile Data:</strong> Full name, email address, password credentials, and active phone number entered during user signup.</li>
            <li><strong>Transactional Information:</strong> Order details, purchase items, date/time of transactions, and cash values.</li>
            <li><strong>Device and Usage Information:</strong> IP address, device type, operating system version, and mobile app usage metrics.</li>
          </ul>

          <h2 id="location-req">2. Location Data (Play Store Core Requirement)</h2>
          <p>To enable core platform delivery services, <strong>GateTak collects precise location data (GPS coordinates) from your device</strong>. This data is collected:</p>
          <ul>
            <li>To identify your delivery address coordinates and fill coordinates on the checkout map.</li>
            <li>To calculate the precise distance fee between the merchant store and your selected delivery location.</li>
            <li>To match your active orders with delivery riders working nearby.</li>
            <li>To provide live real-time tracking of the delivery rider as they approach your address.</li>
          </ul>
          <p>Location data is collected when the GateTak app is running in the foreground. If you deny location access, you can still use the app by manually inputting address search coordinates, though auto-calculations will be limited.</p>

          <h2 id="use">3. How We Use Your Data</h2>
          <p>We process your personal information for purposes including:</p>
          <ul>
            <li>Setting up and managing your customer profile and account access.</li>
            <li>Processing, verifying, and delivering food and grocery orders.</li>
            <li>Sending order confirmations, transactional notices, and driver details.</li>
            <li>Improving app navigation flow, layout styles, and service performance.</li>
            <li>Preventing fraudulent cash-on-delivery placements and platform abuse.</li>
          </ul>

          <h2 id="sharing">4. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal data. We share necessary order components with:</p>
          <ul>
            <li><strong>Delivery Riders:</strong> Your delivery coordinates, address note, phone number, and name are shared with the assigned rider to facilitate delivery completion.</li>
            <li><strong>Registered Vendors:</strong> Order details are shared with the vendor preparing your meal or selecting your grocery packages.</li>
            <li><strong>Legal Authorities:</strong> We may share data when required by law or to protect safety, property, and platform integrity.</li>
          </ul>

          <h2 id="security">5. Data Security</h2>
          <p>We use industry-standard encryption, secure servers, and firewall measures to safeguard your credentials. However, no digital transmission is 100% secure. You are responsible for keeping your password private.</p>

          <h2 id="deletion">6. User Controls and Account Deletion</h2>
          <p>You have full rights to access, correct, or delete your account records. To request removal of your data permanently from our servers, you can use our <Link to="/delete-account">Account Deletion Page</Link>. We process requests within 7 business days.</p>

          <h2 id="contact-support">7. Contact Support</h2>
          <p>For privacy queries, data access requests, or policy updates, contact our privacy officer through our <Link to="/contact">Support Form</Link>.</p>
        </div>
      </article>
      </div>
    </div>
  );
}
