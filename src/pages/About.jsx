import React, { useRef } from 'react';

export default function About() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const teamMembers = [
    {
      name: "Mani Shah",
      role: "Founder & CEO",
      initials: "MS",
      bio: "Leads GateTak's core vision, expansion plans, and coordinates strategic growth across on-demand delivery markets."
    },
    {
      name: "Ayesha Khan",
      role: "Co-Founder & CTO",
      initials: "AK",
      bio: "Manages the automated routing architecture, dispatch database systems, and mobile application technology stack."
    },
    {
      name: "Zain Malik",
      role: "Head of Operations",
      initials: "ZM",
      bio: "Directs rider network onboarding, city logistics mapping, and weekly earnings reconciliation workflows."
    },
    {
      name: "Sara Ahmed",
      role: "Head of Product",
      initials: "SA",
      bio: "Oversees customer application interfaces, merchant portal dashboards, and checkout payment gateway funnels."
    },
    {
      name: "Bilal Dar",
      role: "Lead Dispatch Engineer",
      initials: "BD",
      bio: "Optimizes background location tracking models and algorithmic rider matching to lower average delivery times."
    },
    {
      name: "Nida Yousaf",
      role: "Customer Experience Lead",
      initials: "NY",
      bio: "Coordinates user support operations, ticket claims resolution, refund eligibility checks, and safety guidelines."
    }
  ];

  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <section className="about-hero">
        <h1>About GateTak</h1>
        <p>A smart, on-demand logistics network delivering food, groceries, and sweets with speed and security.</p>
      </section>

      <section className="about-content">
        <p>
          GateTak operates at the intersection of technology and local commerce. Our digital marketplace connects customers with their favorite local restaurants, sweets shops, and grocery vendors, providing instant fulfillment via an optimized, independent delivery fleet.
        </p>
        <p>
          By leveraging automated real-time dispatch algorithms and background location tracking systems, GateTak minimizes transit delays and ensures accurate order coordinates. We are committed to building fair, reliable, and compliant operations for customers, vendors, and rider partners alike.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet the Leadership Team</h2>
        
        {/* Desktop Helper Scroll Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          marginBottom: '20px' 
        }}>
          <button 
            className="cta-button" 
            onClick={() => handleScroll('left')}
            style={{ 
              padding: '8px 16px', 
              fontSize: '14px', 
              borderRadius: '20px',
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer'
            }}
          >
            &larr; Scroll Left
          </button>
          <button 
            className="cta-button" 
            onClick={() => handleScroll('right')}
            style={{ 
              padding: '8px 16px', 
              fontSize: '14px', 
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Scroll Right &rarr;
          </button>
        </div>

        <div className="team-scroll" ref={scrollRef}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                {member.initials}
              </div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <div className="team-bio">{member.bio}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
