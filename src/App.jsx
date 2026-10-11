import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Eager load primary landing page for instant FCP and LCP
import Home from './pages/Home';

// Code-split secondary routes with React.lazy
const About = lazy(() => import('./pages/About'));
const TripDetails = lazy(() => import('./pages/TripDetails'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FFFCF6] text-[#303D32] selection:bg-[#F3F5EC] selection:text-[#42634B]">
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content with Code Splitting */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/trip-details" element={<TripDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Utilities */}
        <BackToTop />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
