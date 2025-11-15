import React, { useState } from 'react';

/**
 * ResponsiveImage Component with lazy loading and optimization
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional classes
 * @param {number} aspectRatio - Aspect ratio (e.g., 16/9)
 */
const ResponsiveImage = React.memo(({
  src,
  alt,
  className = '',
  aspectRatio = 16 / 9,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const paddingBottom = `${(1 / aspectRatio) * 100}%`;

  if (hasError) {
    return (
      <div
        className={`bg-neutral-200 flex items-center justify-center ${className}`}
        style={{ paddingBottom }}
      >
        <span className="text-neutral-500">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ paddingBottom }}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
      )}
    </div>
  );
});

ResponsiveImage.displayName = 'ResponsiveImage';

export default ResponsiveImage;
