'use client'
import React from 'react';
import SideNav from './SideNav';
import { SideBar } from './TestSideNav';

const AppBar: React.FC = () => {
  return (
    <div className="bg-indigo text-offWhite min-w-full bg-gradient-to-l flex justify-between p-4 items-center shadow-lg rounded-md">
      
      <div className="md:hidden">
        <SideBar/>
      </div>

      <div>
        {/* Logo and Home link */}
        <a href="/" className="flex items-center">
          <img src="/Jchatly.png" alt="Logo" className="mr-2 w-10 h-10 rounded-full" />
          <p className="font-serif text-lg">JChatly</p>
        </a>
      </div>
      <div className="hidden sm:flex">
        {/* Navigation links */}
        <a href="/lessons" className="text-lg p-2">Lessons</a>
        <a href="/chatbot" className="text-lg p-2">Chatbot</a>
        {/* Other links */}
      </div>
      <div>
        {/* User account access */}
        <a href="/account" className="text-lg p-2">Account</a>
      </div>
    </div>
  );
};

export default AppBar;
