import { addDynamicIconSelectors } from '@iconify/tailwind';

const TAILWIND_PLUGINS = [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
];

const CUSTOM_PLUGINS = [require('flowbite/plugin'), addDynamicIconSelectors()];

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,html,svelte}',
        './node_modules/flowbite-svelte/**/*.{js,ts,html,svelte}',
    ],

    theme: {
        fontFamily: {
            sans: ['Raleway', 'sans-serif'],
            display: ['Raleway', 'sans-serif'],
            mono: ['Fira Code', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {},
    },

    plugins: [...TAILWIND_PLUGINS, ...CUSTOM_PLUGINS],
};
