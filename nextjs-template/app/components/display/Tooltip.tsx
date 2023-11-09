import React, { useState } from 'react';

interface TooltipProps {
  content: string; // Text to display in the tooltip
  children: React.ReactNode; // The element that the tooltip is attached to
  position?: 'top' | 'bottom' | 'left' | 'right'; // Tooltip position relative to the child element
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipPositionClass = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  }[position];

  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        tabIndex={0} // Make the div focusable
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className={`absolute ${tooltipPositionClass} z-10 w-auto p-2 bg-charcoal text-white text-sm rounded-md shadow-lg`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
