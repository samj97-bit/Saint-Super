import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SiteDataProvider } from './context/SiteDataContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Newsletter } from './components/Newsletter';
import { Home } from './pages/Home';
import { Leadership } from './pages/Leadership';
import { AboutUs } from './pages/AboutUs';
import { Support } from './pages/Support';
import { JoinUs } from './pages/JoinUs';
import { Initiatives } from './pages/Initiatives';
import { OurStory } from './pages/OurStory';
import { Blog } from './pages/Blog';
import { Report } from './pages/Report';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

function ScrollToTopAndObserve() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      let elements = document.querySelectorAll('.reveal, .blur-reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname, location.hash]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <div className="global-wave-bg">
        <div className="global-wave-bg-extra"></div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/support" element={<Support />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/report" element={<Report />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  return (
    <>
      <ScrollToTopAndObserve />
      {isAdmin ? (
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      ) : (
        <SiteLayout />
      )}
    </>
  );
}

function App() {
  return (
    <SiteDataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SiteDataProvider>
  );
}

export default App;

