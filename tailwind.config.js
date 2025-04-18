/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx,css}",
	],
	theme: {
	  extend: {
		colors: {
		  'dolo-blue': '#4D5DFB',
		  'dolo-purple': '#BC3EFF',
		  'dolo-navy': '#0a1a2f',
		},
		fontFamily: {
		  montserrat: ['Montserrat', 'sans-serif'],
		  poppins: ['Poppins', 'sans-serif'],
		},
		borderColor: {
		  border: 'hsl(var(--border))',
		},
		backgroundColor: {
		  background: 'hsl(var(--background))',
		  card: 'hsl(var(--card))',
		  popover: 'hsl(var(--popover))',
		  primary: 'hsl(var(--primary))',
		  secondary: 'hsl(var(--secondary))',
		  muted: 'hsl(var(--muted))',
		  accent: 'hsl(var(--accent))',
		  destructive: 'hsl(var(--destructive))',
		},
		textColor: {
		  foreground: 'hsl(var(--foreground))',
		  'card-foreground': 'hsl(var(--card-foreground))',
		  'popover-foreground': 'hsl(var(--popover-foreground))',
		  'primary-foreground': 'hsl(var(--primary-foreground))',
		  'secondary-foreground': 'hsl(var(--secondary-foreground))',
		  'muted-foreground': 'hsl(var(--muted-foreground))',
		  'accent-foreground': 'hsl(var(--accent-foreground))',
		  'destructive-foreground': 'hsl(var(--destructive-foreground))',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  