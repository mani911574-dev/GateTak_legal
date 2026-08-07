import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setDropdownActive(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const path = location.pathname;

  // Determine section role (customer, rider, vendor, or general)
  let logoText = 'GateTak <span>Legal Portal</span>';
  let navItems = null;

  if (path.startsWith('/customer')) {
    logoText = 'GateTak <span>Privacy & Terms</span>';
    navItems = [
      { name: 'Overview', path: '/customer' },
      { name: 'Privacy Policy', path: '/customer/privacy' },
      { name: 'Terms of Service', path: '/customer/terms' },
      { name: 'Refund Policy', path: '/customer/refund' },
      { name: 'FAQ', path: '/customer/faq' }
    ];
  } else if (path.startsWith('/rider')) {
    logoText = 'GateTak <span>Rider</span>';
    navItems = [
      { name: 'Overview', path: '/rider' },
      { name: 'Privacy Policy', path: '/rider/privacy' },
      { name: 'Terms of Service', path: '/rider/terms' },
      { name: 'FAQ', path: '/rider/faq' }
    ];
  } else if (path.startsWith('/vendor')) {
    logoText = 'GateTak <span>Vendor</span>';
    navItems = [
      { name: 'Overview', path: '/vendor' },
      { name: 'Privacy Policy', path: '/vendor/privacy' },
      { name: 'Terms of Service', path: '/vendor/terms' },
      { name: 'FAQ', path: '/vendor/faq' }
    ];
  } else if (path === '/contact') {
    logoText = 'GateTak <span>Support</span>';
  } else if (path === '/delete-account') {
    logoText = 'GateTak <span>Safety Center</span>';
  }

  // Helper to check if a tab path is active
  const isActive = (itemPath) => {
    // If the path is exact match or overview home
    if (itemPath === '/customer' || itemPath === '/rider' || itemPath === '/vendor') {
      return path === itemPath || path === `${itemPath}/` || path === `${itemPath}/overview`;
    }
    return path === itemPath;
  };

  return (
    <header>
      <div class="container header-inner">
        <Link to="/" className="logo" onClick={() => setDropdownActive(false)}>
          <div className="logo-icon">G</div>
          <span dangerouslySetInnerHTML={{ __html: logoText }} />
        </Link>

        {navItems && (
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className={isActive(item.path) ? 'active' : ''}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="header-right">
          <button 
            ref={toggleRef}
            className="grid-toggle" 
            aria-label="Portals list"
            onClick={() => setDropdownActive(!dropdownActive)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
            </svg>
          </button>
          
          <div ref={dropdownRef} className={`apps-dropdown ${dropdownActive ? 'active' : ''}`}>
            <Link to="/" className="apps-item" onClick={() => setDropdownActive(false)}>
              <div className="apps-item-icon">H</div>
              <span>Home</span>
            </Link>
            <Link to="/customer" className="apps-item" onClick={() => setDropdownActive(false)}>
              <div className="apps-item-icon">C</div>
              <span>Customer Portal</span>
            </Link>
            <Link to="/rider" className="apps-item" onClick={() => setDropdownActive(false)}>
              <div className="apps-item-icon">R</div>
              <span>Rider Portal</span>
            </Link>
            <Link to="/vendor" className="apps-item" onClick={() => setDropdownActive(false)}>
              <div className="apps-item-icon">V</div>
              <span>Vendor Portal</span>
            </Link>
            <Link to="/contact" className="apps-item" onClick={() => setDropdownActive(false)}>
              <div className="apps-item-icon">S</div>
              <span>Contact Support</span>
            </Link>
            <Link to="/delete-account" className="apps-item" onClick={() => setDropdownActive(false)}>
              <div className="apps-item-icon">D</div>
              <span>Delete Account</span>
            </Link>
          </div>
          
          <div className="user-profile">G</div>
        </div>
      </div>
    </header>
  );
}
