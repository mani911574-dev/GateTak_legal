import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

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
      { name: 'Home', path: '/' },
      { name: 'Overview', path: '/customer' },
      { name: 'Privacy Policy', path: '/customer/privacy' },
      { name: 'Terms of Service', path: '/customer/terms' },
      { name: 'Refund Policy', path: '/customer/refund' },
      { name: 'FAQ', path: '/customer/faq' }
    ];
  } else if (path.startsWith('/rider')) {
    logoText = 'GateTak <span>Rider</span>';
    navItems = [
      { name: 'Home', path: '/' },
      { name: 'Overview', path: '/rider' },
      { name: 'Privacy Policy', path: '/rider/privacy' },
      { name: 'Terms of Service', path: '/rider/terms' },
      { name: 'FAQ', path: '/rider/faq' }
    ];
  } else if (path.startsWith('/vendor')) {
    logoText = 'GateTak <span>Vendor</span>';
    navItems = [
      { name: 'Home', path: '/' },
      { name: 'Overview', path: '/vendor' },
      { name: 'Privacy Policy', path: '/vendor/privacy' },
      { name: 'Terms of Service', path: '/vendor/terms' },
      { name: 'FAQ', path: '/vendor/faq' }
    ];
  } else {
    logoText = 'GateTak <span>Legal Portal</span>';
    navItems = [
      { name: 'Home', path: '/' },
      { name: 'Customer Portal', path: '/customer' },
      { name: 'Rider Portal', path: '/rider' },
      { name: 'Vendor Portal', path: '/vendor' },
      { name: 'About Us', path: '/about' }
    ];
    if (path === '/contact') {
      logoText = 'GateTak <span>Support</span>';
    } else if (path === '/delete-account') {
      logoText = 'GateTak <span>Safety Center</span>';
    } else if (path === '/about') {
      logoText = 'GateTak <span>About Us</span>';
    }
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
          <img src={logoImg} className="logo-img" alt="GateTak Logo" />
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

        <div className="header-right"></div>
      </div>
    </header>
  );
}
