import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-offWhite p-4 text-center">
      <div className="text-sm">
        © {new Date().getFullYear()} Learn Japanese. All rights reserved.
      </div>
      <div className="mt-2">
        <a href="/terms" className="hover:text-jade text-sm p-1">Terms of Service</a>
        <a href="/privacy" className="hover:text-jade text-sm p-1">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
