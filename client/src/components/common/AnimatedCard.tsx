import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '../../utils/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  hover = true,
  gradient = false,
  onClick
}: AnimatedCardProps) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:border-primary-200' : '';
  const gradientClasses = gradient ? 'relative overflow-hidden' : '';
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ delay }}
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      onClick={onClick}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
