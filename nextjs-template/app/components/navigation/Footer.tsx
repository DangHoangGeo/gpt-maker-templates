import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal container text-offWhite rounded-lg p-4 text-center">
      <div className="text-sm">
        © {new Date().getFullYear()} Learn Japanese. All rights reserved.
      </div>
      <div className="mt-2">
        <a href="/term-of-service" className="hover:text-jade text-sm p-1">Terms of Service</a>
        <a href="/privacy-policy" className="hover:text-jade text-sm p-1">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
