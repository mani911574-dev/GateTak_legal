import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VendorPrivacy() {
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
          <li><a href="#location">2. Location Usage</a></li>
          <li><a href="#sharing">3. Data Sharing</a></li>
          <li><a href="#retention">4. Store Deletion</a></li>
          <li><a href="#contact">5. Contact Support</a></li>
        </ul>
      </aside>

      <article className="legal-content">
        <div className="doc-header">
          <h1>Vendor Privacy Policy</h1>
          <p className="doc-date">Last Updated: August 7, 2026</p>
        </div>

        <div className="doc-body">
          <p>This Vendor Privacy Policy explains how GateTak collects, processes, and protects business and personal data from our registered Merchant partners (Vendors).</p>

          <h2 id="collect">1. Information We Collect</h2>
          <p>To register your storefront and process settlements, we collect:</p>
          <ul>
            <li><strong>Store Profile Data:</strong> Store name, commercial address, business registry numbers, email address, owner phone number, and store display images.</li>
            <li><strong>Financial Details:</strong> Bank account numbers, routing numbers, and transactional settlement logs.</li>
            <li><strong>Catalogue Data:</strong> Product pricing, description texts, food ingredients, and listing photos.</li>
          </ul>

          <h2 id="location">2. Use of Location Information</h2>
          <p>We collect and publish your commercial location coordinates (GPS coordinates) to show your store to nearby customer map directions and track assigned riders approaching for order pickups.</p>

          <h2 id="sharing">3. Data Sharing</h2>
          <p>We share necessary storefront information with:</p>
          <ul>
            <li><strong>Customers:</strong> Store name, logo, address, phone number, catalog items, and reviews.</li>
            <li><strong>Riders:</strong> Store pickup coordinates, address notes, and telephone contact numbers.</li>
          </ul>

          <h2 id="retention">4. Data Retention and Store Deletion</h2>
          <p>Store profile details are retained for active operational status. To request store closure and removal of commercial database entries, please submit a request on our <Link to="/delete-account">Account Deletion Page</Link>.</p>

          <h2 id="contact">5. Contact Support</h2>
          <p>For questions about merchant privacy policies or financial data security, contact <Link to="/contact">Merchant Support</Link>.</p>
        </div>
      </article>
    </div>
  );
}
