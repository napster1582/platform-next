import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { formatSlug } from '../utilities';

type FieldSlug = (options: { fieldToUse: string; overrides?: Partial<Field> }) => Field;

export const Slug: FieldSlug = (options) =>
    deepmerge(
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
            hooks: {
                beforeValidate: [formatSlug(options.fieldToUse)],
            },
        },
        options?.overrides ?? {},
    );
