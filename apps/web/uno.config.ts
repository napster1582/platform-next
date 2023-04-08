import {
    defineConfig,
    extractorSvelte,
    presetIcons,
    presetTagify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss';

export default defineConfig({
    extractors: [extractorSvelte],
    shortcuts: [],
    theme: {},
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
});
