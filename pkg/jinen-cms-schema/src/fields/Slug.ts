import deepmerge from 'deepmerge';
import { Field, FieldHook } from 'payload/types';

type CustomField = (options: { fieldToUse: string; overrides?: Partial<Field> }) => Field;

export const FieldSlug: CustomField = (options) =>
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

const format = (val: string): string =>
    val
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .toLowerCase();

export const formatSlug =
    (fallback: string): FieldHook =>
    ({ value, originalDoc, data }) => {
        if (typeof value === 'string') {
            return format(value);
        }

        const fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

        if (fallbackData && typeof fallbackData === 'string') {
            return format(fallbackData);
        }

        return value;
    };
