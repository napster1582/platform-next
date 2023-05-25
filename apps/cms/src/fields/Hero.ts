import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { MediaNestedSlides } from './MediaNestedSlides';

type FieldHero = (options?: { overrides?: Partial<Field> }) => Field;

export const Hero: FieldHero = (options) =>
    deepmerge(
        {
            name: 'hero',
            label: false,
            type: 'group',
            fields: [
                {
                    name: 'variant',
                    label: 'Variante',
                    type: 'select',
                    required: true,
                    defaultValue: 'mediaNestedSlides',
                    options: [
                        {
                            label: 'Presentaciones',
                            value: 'mediaNestedSlides',
                        },
                    ],
                },
                MediaNestedSlides({
                    overrides: {
                        admin: {
                            condition: (_, siblingData) =>
                                siblingData?.variant === 'mediaNestedSlides',
                        },
                    },
                }),
            ],
        },
        options?.overrides ?? {},
    );
