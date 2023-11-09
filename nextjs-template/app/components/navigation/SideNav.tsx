import React from 'react';

const SideNav: React.FC = () => {
  return (
    <aside className="w-64 h-full bg-charcoal text-offWhite">
      <div className="flex flex-col p-4">
        {/* Links */}
        <a href="/dashboard" className="py-2">Dashboard</a>
        <a href="/lessons" className="py-2">Lessons</a>
        <a href="/practice" className="py-2">Practice</a>
        {/* Other section links */}
      </div>
    </aside>
  );
};

export default SideNav;
