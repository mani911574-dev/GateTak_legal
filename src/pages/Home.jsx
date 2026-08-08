import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import burgerImg from '../../assets/images/burger.png';
import pizzaSliceImg from '../../assets/images/pizza_slice.png';
import chickenImg from '../../assets/images/chicken_leg.png';

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(1); // 0 when centered in screen, 1 when offscreen
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScrollAndResize = () => {
      // Update responsive state
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate distance from screen center
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        // Normalizing distance: 0 is centered, 1 is entering or leaving screen boundaries
        const maxDistance = windowHeight / 2 + rect.height / 2;
        const distance = sectionCenter - viewportCenter;
        
        const rawRatio = Math.abs(distance) / maxDistance;
        const ratio = Math.min(Math.max(rawRatio, 0), 1);
        setScrollRatio(ratio);

        // Standard fade trigger
        if (rect.top < windowHeight - 80 && rect.bottom > 80) {
          setIsRevealed(true);
        } else {
          setIsRevealed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);
    handleScrollAndResize(); // Run immediately to evaluate initial load

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  // Compute scroll-linked transform values for desktop (ratio: 0 centered, 1 offscreen)
  const burgerTransform = isMobile 
    ? undefined 
    : `translate3d(${-scrollRatio * 160}px, 0, 0) rotate(${-5 - scrollRatio * 10}deg) scale(${1 - scrollRatio * 0.1})`;

  const chickenTransform = isMobile 
    ? undefined 
    : `translate3d(${scrollRatio * 160}px, ${-scrollRatio * 40}px, 0) rotate(${5 + scrollRatio * 10}deg) scale(${1 - scrollRatio * 0.1})`;

  const pizzaTransform = isMobile 
    ? undefined 
    : `translate3d(${scrollRatio * 160}px, ${scrollRatio * 40}px, 0) rotate(${-8 - scrollRatio * 10}deg) scale(${1 - scrollRatio * 0.1})`;

  return (
    <div>

      {/* Scroll Reveal Animation Section with dynamic scroll parallax mapping */}
      <section className="scroll-animate-section" ref={sectionRef}>
        <div className="scroll-animate-container">
          {/* Left: Burger */}
          <div 
            className={`float-wrapper wrapper-burger ${isRevealed ? 'active' : ''}`}
            style={{ transform: burgerTransform }}
          >
            <img src={burgerImg} className="float-img" alt="Fresh Juicy Burger" />
          </div>
          
          {/* Center Slogan */}
          <h2 className={`reveal-text ${isRevealed ? 'active' : ''}`}>
            Delivering happiness at your doorstep
          </h2>

          {/* Right Top: Chicken Leg */}
          <div 
            className={`float-wrapper wrapper-chicken ${isRevealed ? 'active' : ''}`}
            style={{ transform: chickenTransform }}
          >
            <img src={chickenImg} className="float-img" alt="Crispy Chicken Leg" />
          </div>

          {/* Right Bottom: Pizza Slice */}
          <div 
            className={`float-wrapper wrapper-pizza ${isRevealed ? 'active' : ''}`}
            style={{ transform: pizzaTransform }}
          >
            <img src={pizzaSliceImg} className="float-img" alt="Hot Pizza Slice" />
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section className="custom-order-section">
        <div className="container">
          <div className="custom-order-inner">
            
            {/* Left: Info */}
            <div className="custom-order-content">
              <span className="custom-order-tag">Exclusive Feature</span>
              <h2 className="custom-order-title">
                Introducing GateTak Custom Orders
              </h2>
              <p className="custom-order-desc">
                Can't find a specific street food stall on the menu? Craving a particular gulab jamun from that traditional bazaar corner, or need specialized medicines from the local pharmacy? With GateTak's Custom Order feature, you aren't limited by standard restaurant listings. Simply type in what you need, and our riders will purchase and deliver it straight to you!
              </p>
              
              <div className="custom-order-features">
                <div className="feature-item">
                  <div className="feature-item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <div className="feature-item-text">
                    <h4>Write Anything</h4>
                    <p>Type custom requests, shopping list items, or specific street vendor instructions.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <div className="feature-item-text">
                    <h4>Unlimited Delivery</h4>
                    <p>From bakery sweets to hot street golgappay, we fetch it all from any location you specify.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Mockup Interactive Box */}
            <div className="custom-order-mockup">
              <div className="mockup-header">
                <div className="mockup-dot" style={{ backgroundColor: '#ff5f56' }} />
                <div className="mockup-dot" style={{ backgroundColor: '#ffbd2e' }} />
                <div className="mockup-dot" style={{ backgroundColor: '#27c93f' }} />
                <div className="mockup-title">GateTak Custom Order</div>
              </div>
              <div className="mockup-input-box">
                Get 1.5 kg fresh Gulab Jamun from the traditional sweets shop in Old Anarkali, and pick up 2 plates of spicy Gol Gappay from the corner stall on the way back.
                <span className="mockup-input-cursor" />
              </div>
              <div className="mockup-button">
                Place Custom Order
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance / Partner Gateways Banner */}
      <section className="container">
        <div className="compliance-banner">
          <div className="compliance-info">
            <h3>GateTak Partner & Legal Documentation Center</h3>
            <p>We are fully compliant with Google Play Store & App Store billing policies. Access terms of service, merchant vendor agreements, rider partner contracts, and privacy documentations.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/customer" className="cta-button" style={{ whiteSpace: 'nowrap' }}>Customer Docs</Link>
            <Link 
              to="/rider" 
              className="cta-button" 
              style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid var(--primary)', 
                color: 'var(--primary)',
                whiteSpace: 'nowrap'
              }}
            >
              Rider Agreement
            </Link>
            <Link 
              to="/vendor" 
              className="cta-button" 
              style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid var(--primary)', 
                color: 'var(--primary)',
                whiteSpace: 'nowrap'
              }}
            >
              Merchant Agreement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
