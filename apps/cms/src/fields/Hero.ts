import { HeroVariant } from '@jinen/cms-annotations';
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
                    options: [
                        {
                            label: 'Presentaciones',
                            value: HeroVariant.MediaNestedSlides,
                        },
                    ],
                },
                FieldMediaNestedSlides({
                    overrides: {
                        admin: {
                            condition: (_, siblingData) =>
                                siblingData?.variant === HeroVariant.MediaNestedSlides,
                        },
                    },
                }),
            ],
        },
        options?.overrides ?? {},
    );
