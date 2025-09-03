/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app//*.{ts,tsx}",
    "./components//*.{ts,tsx}",
    "./pages//*.{ts,tsx}", // Include pages if you're using Next.js routing
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette inspired by your solar + tech vibe
        solarYellow: '#facc15',
        deepSlate: '#1e293b',
        softGray: '#94a3b8',
        accentBlue: '#3b82f6',
      },
      fontFamily: {
        // Add clean, modern fonts
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 10px rgba(250, 204, 21, 0.5)', // soft yellow glow
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For clean form styling
    require('@tailwindcss/typography'), // For blog or text-heavy sections
  ],
};