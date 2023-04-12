import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
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

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        sveltekit(),
        UnoCss({
            extractors: [extractorSvelte],
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
