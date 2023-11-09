import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        indigo: '#4B0082',
        cherryBlossom: '#FFC0CB',
        jade: '#00A36C',
        charcoal: '#36454F',
        lightGrey: '#F5F5F5',
        offWhite: '#FAFAFA',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Lato', 'Arial', 'sans-serif'],
        serif: ['Noto Serif', 'Georgia', 'serif'],
        body: ['Noto Sans JP', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        lg: '24px',
        xl: '32px',
      },
    },
  },
  plugins: [],
}
export default config