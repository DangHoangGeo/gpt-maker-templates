import React from 'react';

interface BadgeProps {
  label: string;
  iconName: string; // Assuming you're using an icon library like FontAwesome, Heroicons, etc.
  colorClass: string; // Tailwind color utility class for badge background
}

const Badge: React.FC<BadgeProps> = ({ label, iconName, colorClass }) => {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white ${colorClass}`}>
      <i className={`${iconName} mr-2`}></i> {label}
    </div>
  );
};

export default Badge;
