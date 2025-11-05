import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'gradient' | 'particles' | 'waves' | 'orbs';
  className?: string;
}

export const AnimatedBackground = ({ 
  variant = 'gradient',
  className = '' 
}: AnimatedBackgroundProps) => {
  if (variant === 'gradient') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-400/10 to-primary-600/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        />
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent, rgba(0, 168, 232, 0.1), transparent)',
            backgroundSize: '200% 100%'
          }}
        />
      </div>
    );
  }

  if (variant === 'orbs') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-primary-600/25 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4
          }}
        />
      </div>
    );
  }

  return null;
};

export default AnimatedBackground;
