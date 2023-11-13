'use client'
import React from 'react';
import Alert from './components/feedback/Alert';
import Footer from './components/navigation/Footer';
import { motion } from 'framer-motion';
import FeaturesSection from './components/sections/Features';
import { SideBar } from './components/navigation/TestSideNav';
import Hero from './components/sections/Hero';
import Link from 'next/link';
import QuestionCard from './components/display/QuestionCard';
import SkillsSection from './components/sections/SkillsSection';
import LearningPath from './components/sections/LearningPath';

export default function Home() {

  const [alert, setAlert] = React.useState({ show: false, type: '', message: '' });
  const showAlert = (type: 'error' | 'success' | 'warning' | 'info', message: string) => {
    setAlert({ show: true, type, message });
  };

  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-8">
      {alert.show && (
        <Alert
          type={alert.type as "error" | "success" | "warning" | "info"}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
      <SideBar/>
      <Hero/>
      <section className="container bg-gradient-to-r from-jade to-darkGreen text-white my-4 rounded-lg shadow-lg py-8 px-4 md:py-12 md:px-8">
        <div className="container mx-auto flex flex-col items-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <Link href="/"><img src={'/book-learning-japanese.png'} alt={'LangLift'} className="object-cover rounded-full w-24 h-24" /></Link>
          <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-4">What We Offer</h2>
          <div className="flex flex-col items-center">
            <p className="text-md md:text-lg text-center mb-4 md:mb-8">Our system provides an immersive language learning experience through:</p>
            <ul className="pl-8 text-sm md:text-md list-disc">
              <li className="mb-2">Interactive AI-driven conversations</li>
              <li className="mb-2">Personalized learning paths</li>
              <li className="mb-2">Comprehensive modules covering vocabulary, grammar, and more</li>
            </ul>
          </div>
        </div>

        <FeaturesSection />

      </section>

      <LearningPath/>
      
      <SkillsSection />
      
      <div className="bg-gray-100 dark:bg-slate-800 container p-10 md:my-8 my-4 rounded-lg shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Built for Everyone</h2>
          <p className="mb-4">{"Helping you measure and develop the skills that matter most to your organization's success through ongoing strategic partnership."}</p>
          <p>Highly configurable and enterprise-ready, the LangLift is optimized to help you meet your specific business goals.</p>
          {/* Learn More Link */}
          <a href="/learn-more" className="text-indigo-600 hover:text-indigo-500">Learn more →</a>
          {/* Testimonial */}
          <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
            <p className="mb-2">{"\"Partnering with LangLift was easy. They made our tool implementation seamless, including kickoff communications and tools. They were hands-on at every turn!\""}</p>
            <cite>- Global IT Program Delivery Senior Manager</cite>
          </blockquote>
        </div>
      </div>
      <Footer />
    </main>
  )
}
