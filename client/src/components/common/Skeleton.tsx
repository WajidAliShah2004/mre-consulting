interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton = ({ 
  variant = 'rectangular', 
  width = '100%', 
  height = '20px',
  className = '' 
}: SkeletonProps) => {
  const baseClasses = 'bg-gray-200 animate-pulse';
  
  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};

// Pre-built skeleton components
export const SkeletonCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
    <Skeleton variant="circular" width="60px" height="60px" />
    <Skeleton variant="text" width="80%" height="24px" />
    <Skeleton variant="text" width="100%" height="16px" />
    <Skeleton variant="text" width="90%" height="16px" />
    <Skeleton variant="rectangular" width="100%" height="40px" className="mt-4" />
  </div>
);

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        variant="text" 
        width={i === lines - 1 ? '70%' : '100%'} 
      />
    ))}
  </div>
);

export const SkeletonAvatar = ({ size = '48px' }: { size?: string }) => (
  <Skeleton variant="circular" width={size} height={size} />
);

export default Skeleton;
