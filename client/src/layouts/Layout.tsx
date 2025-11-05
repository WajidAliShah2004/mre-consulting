import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackToTop from '../components/common/BackToTop';
import ScrollProgress from '../components/common/ScrollProgress';
import AIChat from '../components/features/AIChat';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <BackToTop />
      <AIChat />
    </div>
  );
};

export default Layout;
