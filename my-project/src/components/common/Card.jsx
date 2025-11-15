import React from 'react';

/**
 * Card Component for content display
 * @param {string} icon - Icon emoji or component
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {string} className - Additional classes
 * @param {string} variant - 'default' | 'featured'
 */
const Card = React.memo(({
  icon,
  title,
  description,
  className = '',
  variant = 'default',
  children,
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 ease-out overflow-hidden';

  const variants = {
    default: 'bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-lg p-8',
    featured: 'bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200 hover:shadow-xl p-8',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {title && <h3 className="text-lg font-semibold text-neutral-900 mb-3">{title}</h3>}
      {description && <p className="text-neutral-600 leading-relaxed text-sm">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
