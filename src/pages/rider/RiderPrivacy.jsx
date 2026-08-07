import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RiderPrivacy() {
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
        <h4 class="sidebar-title">Privacy Outline</h4>
        <ul class="sidebar-menu">
          <li><a href="#collect" class="active">1. Info We Collect</a></li>
          <li><a href="#location-bg">2. Background Location</a></li>
          <li><a href="#sharing">3. Data Sharing</a></li>
          <li><a href="#retention">4. Storage & Retention</a></li>
          <li><a href="#contact">5. Contact Support</a></li>
        </ul>
      </aside>

      <article className="legal-content">
        <div className="doc-header">
          <h1>Rider Privacy Policy</h1>
          <p className="doc-date">Last Updated: August 7, 2026</p>
        </div>

        <div className="doc-body">
          <p>This Rider Privacy Policy explains how GateTak collects, processes, and protects personal data from our independent delivery partners (Riders) operating on our network.</p>

          <h2 id="collect">1. Information We Collect</h2>
          <p>To register and support your status as an independent delivery partner, we collect:</p>
          <ul>
            <li><strong>Profile Information:</strong> Full name, phone number, email address, password, home address, profile photo, and vehicle information.</li>
            <li><strong>Verification Records:</strong> National ID details, driver's license scans, and background check results.</li>
            <li><strong>Performance History:</strong> Delivery completion rates, customer ratings, acceptance stats, and earnings log.</li>
          </ul>

          <h2 id="location-bg">2. Background Location Tracking (Play Store Requirement)</h2>
          <p>To match riders with nearby order dispatch opportunities and ensure customer delivery tracking, <strong>GateTak collects precise location data (GPS coordinates) from your device</strong>.</p>
          
          <p><strong>This location data is collected in the background (even when the Rider application is closed or not actively in use on your screen) under the following conditions:</strong></p>
          <ul>
            <li><strong>Active Duty Dispatching:</strong> When your rider status is toggled to "Online" or "Active". We track coordinates in the background to automatically suggest and dispatch order requests close to your location, avoiding unnecessary travel distances.</li>
            <li><strong>In-Transit Route Tracking:</strong> Once you accept a delivery job, we track your location continuously in the background to calculate ETA updates and provide customers and support agents with real-time tracking of the order's transit route.</li>
            <li><strong>Rider Transit Safety:</strong> Continuous route tracking assists support agents in providing route guides and handling emergency safety alerts.</li>
          </ul>
          <p><strong>When is location tracking inactive?</strong> Location tracking is stopped when your status is set to "Offline", when you sign out of the Rider application, or when you revoke location permissions in your device settings.</p>

          <h2 id="sharing">3. Data Sharing and Disclosure</h2>
          <p>We restrict data sharing to required operational functions:</p>
          <ul>
            <li><strong>Customers:</strong> Your name, profile photo, real-time location coordinate, and phone number are shared with the customer waiting for their order.</li>
            <li><strong>Merchants/Vendors:</strong> Your name and pickup status are shown to the vendor preparing the order items.</li>
          </ul>

          <h2 id="retention">4. Data Storage and Retention</h2>
          <p>Rider profile records and transaction histories are stored on encrypted cloud databases. If you wish to stop driving and remove your personal documentation from our active storage, you can make a request on our <Link to="/delete-account">Account Deletion Page</Link>.</p>

          <h2 id="contact">5. Contact Support</h2>
          <p>For inquiries regarding background location access or data removal, contact our support team at <Link to="/contact">Rider Support</Link>.</p>
        </div>
      </article>
    </div>
  );
}
