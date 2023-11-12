'use client'
import React from 'react';
import Alert from './components/feedback/Alert';
import Footer from './components/navigation/Footer';
import { motion } from 'framer-motion';
import FeaturesSection from './components/sections/Features';
import { SideBar } from './components/navigation/TestSideNav';
import Hero from './components/sections/Hero';

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
      <section className="container bg-gradient-to-r from-jade to-darkGreen text-white my-4 rounded-lg shadow-lg py-12 px-4 md:px-8">
        <div className="container mx-auto flex flex-col items-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <div className="flex flex-col items-center">
            <p className="text-lg mb-8">Our system provides an immersive language learning experience through:</p>
            <ul className="pl-8 list-disc">
              <li className="mb-2">Interactive AI-driven conversations</li>
              <li className="mb-2">Personalized learning paths</li>
              <li className="mb-2">Comprehensive modules covering vocabulary, grammar, and more</li>
            </ul>
          </div>
        </div>

        <FeaturesSection />

      </section>
      <Footer />
    </main>
  )
}
