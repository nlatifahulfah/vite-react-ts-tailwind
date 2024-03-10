/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif']
    },
    fontSize: {
      xs: '0.625rem', // font-size: 10px
      sm: '0.875rem', // font-size: 14px
      base: '1rem', // font-size: 16px
      xl: '1.25rem', // font-size: 20px
      '2xl': '1.5rem' // font-size: 24px
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700
    },
    extend: {
      colors: {
        primary: '#066666',
        secondary: '#789906',
        gray: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529'
        }
      }
    }
  },
  plugins: []
}
