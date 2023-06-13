import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,html,svelte}',
        './node_modules/flowbite-svelte/**/*.{js,ts,html,svelte}',
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Castoro', 'serif'],
            mono: ['JetBrains Mono', 'monospace'],
            display: ['Instrument Sans', 'sans-serif'],
            handwriting: ['Indie Flower', 'cursive'],
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {
            backgroundColor: {
                'color-base': 'var(--color-background)',
                'color-base-accent': 'var(--color-background-accent)',
            },
            textColor: {
                'color-base': 'var(--color-foreground)',
                'color-base-accent': 'var(--color-foreground-accent)',
            },
            borderColor: {
                'color-base': 'var(--color-border)',
            },
            borderRadius: {
                base: 'var(--rounded)',
            },
            colors: {
                'primary-50': 'var(--color-primary-50)',
                'primary-100': 'var(--color-primary-100)',
                'primary-200': 'var(--color-primary-200)',
                'primary-300': 'var(--color-primary-300)',
                'primary-400': 'var(--color-primary-400)',
                'primary-500': 'var(--color-primary-500)',
                'primary-600': 'var(--color-primary-600)',
                'primary-700': 'var(--color-primary-700)',
                'primary-800': 'var(--color-primary-800)',
                'primary-900': 'var(--color-primary-900)',
                'primary-950': 'var(--color-primary-950)',
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
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('flowbite/plugin'),
        addDynamicIconSelectors(),
    ],
};
