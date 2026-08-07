import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DeleteAccount from './pages/DeleteAccount';

import CustomerOverview from './pages/customer/CustomerOverview';
import CustomerTerms from './pages/customer/CustomerTerms';
import CustomerPrivacy from './pages/customer/CustomerPrivacy';
import CustomerRefund from './pages/customer/CustomerRefund';
import CustomerFaq from './pages/customer/CustomerFaq';

import RiderOverview from './pages/rider/RiderOverview';
import RiderTerms from './pages/rider/RiderTerms';
import RiderPrivacy from './pages/rider/RiderPrivacy';
import RiderFaq from './pages/rider/RiderFaq';

import VendorOverview from './pages/vendor/VendorOverview';
import VendorTerms from './pages/vendor/VendorTerms';
import VendorPrivacy from './pages/vendor/VendorPrivacy';
import VendorFaq from './pages/vendor/VendorFaq';

export default function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            
            <Route path="/customer" element={<CustomerOverview />} />
            <Route path="/customer/overview" element={<CustomerOverview />} />
            <Route path="/customer/terms" element={<CustomerTerms />} />
            <Route path="/customer/privacy" element={<CustomerPrivacy />} />
            <Route path="/customer/refund" element={<CustomerRefund />} />
            <Route path="/customer/faq" element={<CustomerFaq />} />

            <Route path="/rider" element={<RiderOverview />} />
            <Route path="/rider/overview" element={<RiderOverview />} />
            <Route path="/rider/terms" element={<RiderTerms />} />
            <Route path="/rider/privacy" element={<RiderPrivacy />} />
            <Route path="/rider/faq" element={<RiderFaq />} />

            <Route path="/vendor" element={<VendorOverview />} />
            <Route path="/vendor/overview" element={<VendorOverview />} />
            <Route path="/vendor/terms" element={<VendorTerms />} />
            <Route path="/vendor/privacy" element={<VendorPrivacy />} />
            <Route path="/vendor/faq" element={<VendorFaq />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
