/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gold: {
          100: '#FFFBF4',
          500: '#8C6418',
        },
      },
      fontFamily: {
        sweetsans: ['SweetSansPro', 'sans-serif'], // Using a generic name for the font family
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
