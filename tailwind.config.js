/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',  // for 2K monitors
        '4xl': '2560px',  // for 4K monitors
      },
    },
  },
  plugins: [],
};
