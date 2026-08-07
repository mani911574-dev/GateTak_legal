import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RiderTerms() {
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
      <aside className="sidebar">
        <h4 className="sidebar-title">Rider Outline</h4>
        <ul className="sidebar-menu">
          <li><a href="#contractor" className="active">1. Contractor Status</a></li>
          <li><a href="#conduct">2. Service Standards</a></li>
          <li><a href="#verification">3. Background Checks</a></li>
          <li><a href="#earnings">4. Payout Structure</a></li>
          <li><a href="#safety">5. Traffic & Safety</a></li>
          <li><a href="#suspension">6. Account Suspension</a></li>
          <li><a href="#contact">7. Contact Support</a></li>
        </ul>
      </aside>

      <article className="legal-content">
        <div className="doc-header">
          <h1>Rider Terms & Conditions</h1>
          <p class="doc-date">Last Updated: August 7, 2026</p>
        </div>

        <div className="doc-body">
          <p>These Rider Terms and Conditions govern the partnership, operational guidelines, and payment rules for all independent delivery riders (Riders) operating on the GateTak Platform.</p>

          <h2 id="contractor">1. Independent Contractor Status</h2>
          <p>As a Rider partner on the GateTak Platform, you acknowledge that you are an independent contractor. This relationship does not constitute an employment contract, joint venture, or agency between you and GateTak. You are free to choose your own hours of operation and are responsible for your own taxes and insurance.</p>

          <h2 id="conduct">2. Service Standards and Conduct</h2>
          <p>Riders agree to deliver orders with care and professionalism. You agree to:</p>
          <ul>
            <li>Maintain a valid driver's license, vehicle registration, and necessary third-party road insurance as required by local traffic laws.</li>
            <li>Maintain your delivery vehicle (bike, motorcycle, or car) in a safe and roadworthy operating condition.</li>
            <li>Handle packages with care, ensuring food items are kept clean, dry, and secure during transit.</li>
            <li>Interact with customers, merchant staff, and support agents with respect and professionalism.</li>
          </ul>

          <h2 id="verification">3. Background Verification</h2>
          <p>To register as a Rider on the GateTak Platform, you must submit to background verification. This includes proving your identity, vehicle documentation, and driving record. GateTak reserves the right to refuse platform access to any applicant based on safety record audits.</p>

          <h2 id="earnings">4. Earning and Payout Structures</h2>
          <p>Your delivery earnings are calculated per completed order, combining base transit rates and distance-based fees. Earning statements are compiled weekly. Cash collected on COD orders must be settled with the platform weekly according to billing procedures.</p>

          <h2 id="safety">5. Safety and Device Usage</h2>
          <p>Your safety is priority. You must comply with all traffic regulations, wear helmets, and avoid using your mobile device while operating your vehicle. Use of the GateTak Rider application must be handled safely when parked.</p>

          <h2 id="suspension">6. Platform Suspension</h2>
          <p>Failure to settle COD cash collections, high cancellation rates after package pickup, customer abuse, or traffic violations will result in immediate and permanent suspension of platform access.</p>

          <h2 id="contact">7. Contact Support</h2>
          <p>If you have questions about weekly settlements or terms compliance, reach out via the <Link to="/contact">Rider Support Form</Link>.</p>
        </div>
      </article>
    </div>
  );
}
