import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-charcoal">{title}</h3>
          <button onClick={onClose} className="text-charcoal">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <div className="mt-2">
          {children}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-jade text-white text-sm font-medium rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
