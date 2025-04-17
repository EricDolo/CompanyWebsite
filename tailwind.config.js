/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  'dolo-blue': '#4D5DFB',
		  'dolo-purple': '#BC3EFF',
		},
		fontFamily: {
		  montserrat: ['Montserrat', 'sans-serif'],
		  poppins: ['Poppins', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  }
  