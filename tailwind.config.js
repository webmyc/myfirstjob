/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B', // Coral Red - Energetic & Fun
        secondary: '#4ECDC4', // Teal - Trustworthy & Calm
        accent: '#FFE66D', // Yellow - Playful
        dark: '#2D3436', // Dark Gray - Text
        light: '#F7FFF7', // Off White - Background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'], // For headers
      },
    },
  },
  plugins: [],
}
