'use client'
import React from 'react';

interface AlertProps {
  type: 'error' | 'success' | 'warning' | 'info';
  message: string;
  onClose: () => void;
}

const alertStyles = {
  error: 'bg-red-100 text-red-700 border-red-400',
  success: 'bg-green-100 text-green-700 border-green-400',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-400',
  info: 'bg-blue-100 text-blue-700 border-blue-400',
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
	return (
		<div className={`border-l-4 p-4 mb-4 text-sm ${alertStyles[type]}`} role="alert" style={{ position: 'absolute', right: 10, top: 10}}>
			<strong className="font-medium">{type.toUpperCase()}!</strong>
			<span className="block sm:inline"> {message}</span>
			<span className="absolute top-0 right-0 px-1 py-1" style={{ cursor: 'pointer' }} onClick={onClose}>
				<svg
					className="fill-current h-6 w-6 text-gray-700"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<title>Close</title>
					<path d="M14.348 14.849a.5.5 0 00.708 0l4.292-4.292a.5.5 0 000-.708l-4.292-4.292a.5.5 0 00-.708 0L10 9.293 5.708 5.001a.5.5 0 00-.708 0L.708 9.293a.5.5 0 000 .708l4.292 4.292a.5.5 0 00.708 0L10 10.707l4.348 4.142z" />
				</svg>
			</span>
		</div>
	);
}
export default Alert;
