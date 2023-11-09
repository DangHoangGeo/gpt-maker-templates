'use client'
import React from 'react';
import Image from 'next/image'
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('../components/form/Button'), { ssr: false });
import InputField from '../components/form/InputField';
import Textarea from '../components/form/Textarea';
import SelectDropdown from '../components/form/SelectDropdown';
import ToggleSwitch from '../components/form/ToggleSwitch';
import RadioButtonGroup from '../components/form/RadioButtonGroup';
import CheckboxGroup from '../components/form/CheckboxGroup';
import { CheckboxOption } from '../components/form/CheckboxGroup';
import DatePickerComponent from '../components/form/DatePickerComponent';
import Alert from '../components/feedback/Alert';
import LoadingSpinner from '../components/feedback/LoadingSpinner';
import Snackbar from '../components/feedback/Snackbar';
import ChatInterface from '../components/chatbot/ChatbBot';
import HomePage from '../components/pages/Motion';

export default function Home() {
  
  const [username, setUsername] = React.useState<string>('');
  const [bio, setBio] = React.useState<string>('');
  const [selectedCountry, setSelectedCountry] = React.useState<string>('japan');
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string>('option1');
  const [checkboxOptions, setCheckboxOptions] = React.useState<CheckboxOption[]>([
    { value: 'option1', label: 'Option 1', checked: false },
    { value: 'option2', label: 'Option 2', checked: false },
    // ... more options
  ]);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [alert, setAlert] = React.useState({ show: false, type: '', message: '' });
  const [snackbar, setSnackbar] = React.useState({ show: false, message: '' });

  const showSnackbar = (message: string, duration?: number) => {
    setSnackbar({ show: true, message });
    setTimeout(() => setSnackbar({ show: false, message: '' }), duration || 3000);
  };

  const closeSnackbar = () => {
    setSnackbar({ show: false, message: '' });
  };

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {alert.show && (
        <Alert
          type={alert.type as "error" | "success" | "warning" | "info"}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <LoadingSpinner size={12} />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <ChatInterface />

      <Textarea
        id="user-bio"
        label="Bio"
        placeholder="Tell us about yourself"
        value={bio}
        onChange={setBio} // setBio is a state setter function from a useState hook
        required={false}
        rows={5}
      />
      <InputField
            id="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={setUsername}
            required={true}
          />

        <SelectDropdown
          id="country-select"
          label="Country"
          selectedValue={selectedCountry}
          onChange={setSelectedCountry} // setSelectedCountry is a state setter function from a useState hook
          options={[
            { value: 'japan', label: 'Japan' },
            { value: 'usa', label: 'United States of America' },
            // ... more options
          ]}
        />
      
        <ToggleSwitch
          id="dark-mode-toggle"
          label="Dark Mode"
          checked={isDarkMode}
          onChange={setIsDarkMode} // setIsDarkMode is a state setter function from a useState hook
        />

        <RadioButtonGroup
          id="quiz-choices"
          name="quiz"
          legend="Choose the correct answer"
          selectedValue={selectedOption}
          direction='horizontal'
          onChange={setSelectedOption} // setSelectedOption is a state setter function from a useState hook
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            // ... more options
          ]}
        />

        <CheckboxGroup
          direction='vertical'
          options={checkboxOptions}
          setOptions={setCheckboxOptions}
        />
        
      <DatePickerComponent
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />
      <Button buttonType="primary" onClick={handlePrimaryAction}>Primary Action</Button>
      <Button buttonType='secondary' onClick={() => showSnackbar('Hello, this is a snackbar!')}>Show Snackbar</Button>
      <Snackbar message={snackbar.message} show={snackbar.show} onClose={closeSnackbar} />
      
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <HomePage />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
      </div>
    </main>
  )
}
