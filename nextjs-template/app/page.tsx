'use client'
import React from 'react';
import Alert from './components/feedback/Alert';
import HomePage from './components/pages/Home';
import AppBar from './components/navigation/AppBar';
import Footer from './components/navigation/Footer';


export default function Home() {

  const [alert, setAlert] = React.useState({ show: false, type: '', message: '' });
  

  const showAlert = (type: 'error' | 'success' | 'warning' | 'info', message: string) => {
    setAlert({ show: true, type, message });
  };

  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  const handlePrimaryAction = () => {
    showAlert('success', 'You clicked the primary action button!');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {alert.show && (
        <Alert
          type={alert.type as "error" | "success" | "warning" | "info"}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
      <AppBar/>
      <HomePage />
      <Footer />
    </main>
  )
}
