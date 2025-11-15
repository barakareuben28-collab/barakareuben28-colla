import React from 'react';

/**
 * SectionWrapper Component for consistent section styling
 * @param {string} className - Additional classes
 * @param {string} bgColor - Background color class
 * @param {boolean} bordered - Add border
 */
const SectionWrapper = React.forwardRef(({
  children,
  className = '',
  bgColor = 'bg-white',
  bordered = false,
  padding = 'section-padding',
  id = '',
}, ref) => {
  const borderClass = bordered ? 'border-t border-neutral-200' : '';

  return (
    <section
      id={id}
      ref={ref}
      className={`${bgColor} ${borderClass} ${padding} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
