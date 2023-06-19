/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: "#e622a5",          //not working 
        
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

