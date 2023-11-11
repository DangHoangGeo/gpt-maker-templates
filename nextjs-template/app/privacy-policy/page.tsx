'use client'
import React from 'react';
import { SideBar } from '../components/navigation/TestSideNav';
import Footer from '../components/navigation/Footer';
import Hero from '../components/sections/Hero';

const PrivacyPolicy: React.FC = () => {
  return (
	<main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-8">
		<SideBar/>
		<Hero/>
		<div className="container bg-gradient-to-r from-jade to-darkGreen text-white my-4 rounded-lg shadow-lg py-12 px-4 md:px-8">
		<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
		<p className="mb-2">Last updated: 2023-11-10 23:59</p>

		{/* Introduction */}
		<h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
		<p>At [Your Company Name], we respect your privacy and are committed to protecting the personal information you share with us through [Your App Name]. This Privacy Policy explains how we collect, use, and share information in relation to our AI-powered language learning system and its associated services.</p>

		{/* Information Collection */}
		<h2 className="text-2xl font-semibold mt-4">2. Information Collection</h2>
		<p>We collect information that you provide directly to us, such as when you create an account, participate in interactive features of our service, or communicate with us. We also collect information automatically as you navigate through the system, including usage details, IP addresses, and information collected through cookies and other tracking technologies.</p>

		{/* Use of Information */}
		<h2 className="text-2xl font-semibold mt-4">3. Use of Information</h2>
		<p>{"The information we collect helps us to improve our service and to deliver a personalized language learning experience. This includes managing your account, providing customer support, analyzing and improving our service's functionality, and conducting research and analysis on the effectiveness of our educational content."}</p>

		{/* ... Other Sections ... */}

		<h2 className="text-2xl font-semibold mt-4">[Other Sections]</h2>
		{/* ... */}

		</div>
		<Footer />
	</main>
  );
};

export default PrivacyPolicy;

