import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { FieldMediaNestedSlides } from './MediaNestedSlides';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldHero: CustomField = (options) =>
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
                FieldMediaNestedSlides({
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
