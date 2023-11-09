import React from 'react';

const AppBar: React.FC = () => {
  return (
    <nav className="bg-indigo text-offWhite flex justify-between p-4 items-center">
      <div className="text-xl font-bold">
        {/* Logo and Home link */}
        <a href="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="mr-2" />
          Learn Japanese
        </a>
      </div>
      <div>
        {/* Navigation links */}
        <a href="/lessons" className="text-lg p-2">Lessons</a>
        <a href="/chatbot" className="text-lg p-2">Chatbot</a>
        {/* Other links */}
      </div>
      <div>
        {/* User account access */}
        <a href="/account" className="text-lg p-2">Account</a>
      </div>
    </nav>
  );
};

export default AppBar;
