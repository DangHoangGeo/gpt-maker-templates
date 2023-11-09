import React from 'react';

interface AvatarProps {
  src?: string; // Optional image source URL
  alt: string; // Alternative text for the image
  size?: number; // Optional size to allow for different avatar sizes
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 8 }) => {
  // Compute Tailwind size classes based on the provided size prop
  const sizeClass = `h-${size} w-${size}`;

  return (
    <div className={`inline-block rounded-full overflow-hidden bg-gray-100 ${sizeClass}`}>
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <span className="text-xs font-semibold uppercase text-gray-400 flex items-center justify-center h-full">
          {alt.charAt(0)} {/* Show the first letter of the alt text */}
        </span>
      )}
    </div>
  );
};

export default Avatar;
