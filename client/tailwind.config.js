/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#e63b2e',
          foreground: '#ffffff',
        },
        tertiary: {
          DEFAULT: '#0055ff',
          foreground: '#ffffff',
        },
        neutral: {
          DEFAULT: '#4a4a4a',
          light: '#f5f3f3',
        },
        background: {
          DEFAULT: '#fbf9f8',
          card: '#ffffff',
        },
        border: {
          DEFAULT: '#e4e2e2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '4px',
        'md': '4px',
        'lg': '8px',
      }
    },
  },
  plugins: [],
};