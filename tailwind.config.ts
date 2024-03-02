import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eco': {
          50: '#DEF7F1',
          100: '#BDEFE3',
          200: '#80E0CA',
          300: '#3ED0AE',
          400: '#269C80',
          500: '#165A4A',
          600: '#124A3D',
          700: '#0D352C',
          800: '#09251E',
          900: '#04100E',
          950: '#020807',
        },
      },
    },
  },
  plugins: [],
};
export default config;
