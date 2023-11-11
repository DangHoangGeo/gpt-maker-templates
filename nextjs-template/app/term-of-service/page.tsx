'use client'
import React from 'react';
import { SideBar } from '../components/navigation/TestSideNav';
import Footer from '../components/navigation/Footer';
import Hero from '../components/sections/Hero';

const TermsOfService: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-8">
		  <SideBar/>
      <Hero/>
      <div className="container bg-gradient-to-r from-jade to-darkGreen text-white my-4 rounded-lg shadow-lg py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-2">Last updated: 2023-11-10 23:59</p>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>Welcome to LangLift, an AI-powered language learning system designed to offer personalized and interactive language learning experiences. These Terms of Service govern your use of our services and platforms, including but not limited to our AI-driven language learning modules, user interfaces, and content provided by BaoAnJP.</p>

        {/* Use of Service */}
        <h2 className="text-2xl font-semibold mt-4">2. Use of Service</h2>
        <p>Our Service allows you to engage in language learning activities through interactive AI-driven conversations, access to educational content, and personalized learning paths. You agree to use our Service for your personal, non-commercial use and not to redistribute any portion of our content without our permission.</p>

        {/* User Responsibilities */}
        <h2 className="text-2xl font-semibold mt-4">3. User Responsibilities</h2>
        <p>As a user, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to use our Service in compliance with all applicable laws and not to conduct any unauthorized or illegal activities.</p>

        {/* ... Other Sections ... */}

        <h2 className="text-2xl font-semibold mt-4">[Other Sections]</h2>
        {/* ... */}

      </div>
      <Footer />
    </main>
  );
};

export default TermsOfService;

