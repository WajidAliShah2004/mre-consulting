import { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { COMPANY_INFO } from '../../utils/constants';

interface CalendlyButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const CalendlyButton = ({ 
  text = 'Schedule Consultation', 
  className = '',
  variant = 'primary'
}: CalendlyButtonProps) => {
  useEffect(() => {
    // Load Calendly popup widget script if not already loaded
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Load Calendly CSS if not already loaded
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore - Calendly is loaded externally
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: COMPANY_INFO.calendlyUrl });
    } else {
      // Fallback to Book Now page if Calendly not loaded
      window.location.href = '/book-now';
    }
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl',
    secondary: 'bg-white text-navy-900 hover:shadow-xl',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center px-6 py-3 font-bold rounded-xl transition-all ${variantClasses[variant]} ${className}`}
    >
      <FaCalendarAlt className="mr-2" />
      {text}
    </button>
  );
};

export default CalendlyButton;
