import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout
import Layout from './layouts/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutFounder from './pages/AboutFounder';
import AboutPartners from './pages/AboutPartners';
import Services from './pages/Services';
import AIConsulting from './pages/AIConsulting';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';
import IntakeForms from './pages/IntakeForms';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import BlogManager from './pages/admin/BlogManager';
import BlogEditor from './pages/admin/BlogEditor';
import WhitePaperManager from './pages/admin/WhitePaperManager';
import WhitePaperEditor from './pages/admin/WhitePaperEditor';

// Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Resources & Tools
import Resources from './pages/Resources';
import ROICalculator from './pages/tools/ROICalculator';
import ReadinessAssessment from './pages/tools/ReadinessAssessment';
import AdviceEducation from './pages/AdviceEducation';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 0,
      anchorPlacement: 'top-bottom',
      disable: false,
      startEvent: 'DOMContentLoaded',
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
    });

    // Refresh AOS on route change
    return () => {
      AOS.refresh();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/company" element={<AboutCompany />} />
        <Route path="about/founder" element={<AboutFounder />} />
        <Route path="about/partners" element={<AboutPartners />} />
        <Route path="services" element={<Services />} />
        <Route path="ai-consulting" element={<AIConsulting />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="advice-education" element={<AdviceEducation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-now" element={<BookNow />} />
        <Route path="intake-forms" element={<IntakeForms />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="resources" element={<Resources />} />
        <Route path="tools/roi-calculator" element={<ROICalculator />} />
        <Route path="tools/readiness-assessment" element={<ReadinessAssessment />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/blogs" element={<BlogManager />} />
      <Route path="/admin/blogs/new" element={<BlogEditor />} />
      <Route path="/admin/blogs/edit/:id" element={<BlogEditor />} />
      <Route path="/admin/white-papers" element={<WhitePaperManager />} />
      <Route path="/admin/white-papers/new" element={<WhitePaperEditor />} />
      <Route path="/admin/white-papers/edit/:id" element={<WhitePaperEditor />} />
    </Routes>
    </AnimatePresence>
  );
}

export default App;
