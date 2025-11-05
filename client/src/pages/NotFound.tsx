import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | MRECAI"
        description="The page you're looking for doesn't exist. Return to MRECAI homepage for business consulting, insurance services, and more."
        canonical="/404"
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
