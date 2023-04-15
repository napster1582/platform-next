import { sveltekit } from '@sveltejs/kit/vite';
import {
    extractorSvelte,
    presetIcons,
    presetTagify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss';
import UnoCss from 'unocss/vite';
import { defineConfig } from 'vitest/config';
import { alias } from '../../alias';

export default defineConfig({
    resolve: {
        alias,
    },
    plugins: [
        sveltekit(),
        UnoCss({
            extractors: [extractorSvelte],
            shortcuts: [
                ['flex-normal', 'flex items-center justify-normal'],
                ['flex-start', 'flex items-center justify-start'],
                ['flex-end', 'flex items-center justify-end'],
                ['flex-center', 'flex items-center justify-center'],
                ['flex-between', 'flex items-center justify-between'],
                ['flex-around', 'flex items-center justify-around'],
                ['flex-evenly', 'flex items-center justify-evenly'],
                ['flex-stretch', 'flex items-center justify-stretch'],
            ],
            theme: {
                container: {
                    center: true,
                    padding: '0.5rem',
                },
            },
            presets: [
                presetUno(),
                presetIcons({
                    prefix: 'icon-',
                    extraProperties: {
                        display: 'inline-block',
                        'vertical-align': 'middle',
                        'font-size': '24px',
                    },
                }),
                presetTagify(),
                presetTypography(),
                presetWebFonts({
                    provider: 'google',
                    fonts: {
                        sans: 'Raleway',
                        display: 'Raleway',
                        mono: ['Fira Code'],
                    },
                }),
            ],
            transformers: [transformerDirectives(), transformerVariantGroup()],
        }),
    ],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
});
