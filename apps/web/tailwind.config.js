import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
			pattern: /(bg|text|grid-cols|col-span)-./,
		},
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Inter', ...fontFamily.sans],
			serif: ['Castoro', ...fontFamily.serif],
			mono: ['JetBrains Mono', ...fontFamily.mono],
			display: ['Inter', ...fontFamily.sans],
			handwriting: ['Indie Flower', 'cursive'],
		},
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			// TODO: temporal
			backgroundColor: {
				'token-primary': 'var(--color-bg-primary)',
				'token-secondary': 'var(--color-bg-secondary)',
				'token-tertiary': 'var(--color-bg-tertiary)',
			},
			textColor: {
				'token-primary': 'var(--color-fg-primary)',
				'token-secondary': 'var(--color-fg-secondary)',
			},
			borderColor: {
				token: 'var(--color-border)',
			},
			ringColor: {
				token: 'var(--color-border)',
			},
			fill: {
				'token-primary': 'var(--color-bg-primary)',
				'token-secondary': 'var(--color-bg-secondary)',
				'token-tertiary': 'var(--color-bg-tertiary)',
			},
			borderRadius: {
				token: 'var(--radius)',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				black: '#000000',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					// TODO: temporal
					50: 'rgb(var(--color-primary-50) / <alpha-value>)',
					100: 'rgb(var(--color-primary-100) / <alpha-value>)',
					200: 'rgb(var(--color-primary-200) / <alpha-value>)',
					300: 'rgb(var(--color-primary-300) / <alpha-value>)',
					400: 'rgb(var(--color-primary-400) / <alpha-value>)',
					500: 'rgb(var(--color-primary-500) / <alpha-value>)',
					600: 'rgb(var(--color-primary-600) / <alpha-value>)',
					700: 'rgb(var(--color-primary-700) / <alpha-value>)',
					800: 'rgb(var(--color-primary-800) / <alpha-value>)',
					900: 'rgb(var(--color-primary-900) / <alpha-value>)',
					950: 'rgb(var(--color-primary-950) / <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontSize: {
				h1: 'var(--font-size-h1)',
				h2: 'var(--font-size-h2)',
				h3: 'var(--font-size-h3)',
				h4: 'var(--font-size-h4)',
				h5: 'var(--font-size-h5)',
				h6: 'var(--font-size-h6)',
				body: 'var(--font-size-body)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
