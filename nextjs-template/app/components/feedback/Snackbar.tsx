'use client'
import React, { useEffect } from 'react';

interface SnackbarProps {
  message: string;
  show: boolean;
  duration?: number;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  show,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (show) {
      timer = setTimeout(() => {
        onClose();
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  const snackbarStyles = `fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50 mb-2 text-sm py-2 px-4 ${
    show ? 'block' : 'hidden'
  }`;

  return (
    <div className={snackbarStyles + " bg-gray-900 text-white rounded-lg shadow"}>
      {message}
    </div>
  );
};

export default Snackbar;
