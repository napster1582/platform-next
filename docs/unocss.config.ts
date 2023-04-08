// eslint-disable-next-line no-restricted-imports
import { defineConfig, presetIcons, presetTagify, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
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
    ],
    transformers: [transformerDirectives()],
});
