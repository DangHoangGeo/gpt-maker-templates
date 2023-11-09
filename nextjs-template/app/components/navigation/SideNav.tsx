'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Button from '../form/Button';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

interface SideNavProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
        <motion.nav
        className="flex flex-col p-4 w-64 h-full bg-charcoal text-offWhite"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
        <button className="text-lg p-2" onClick={() => setIsOpen(!isOpen)}>Open</button>
        <a href="/dashboard" className="py-2">Dashboard</a>
        <a href="/lessons" className="py-2">Lessons</a>
        <a href="/practice" className="py-2">Practice</a>
        {/* Other section links */}
    </motion.nav>
  );
};

export default SideNav;
