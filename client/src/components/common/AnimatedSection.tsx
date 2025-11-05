import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  stagger = false 
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger ? staggerContainer : fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedItem = ({ 
  children, 
  className = '',
  delay = 0 
}: AnimatedSectionProps) => {
  return (
    <motion.div
      variants={staggerItem}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
