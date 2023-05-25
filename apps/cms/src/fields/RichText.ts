import deepmerge from 'deepmerge';
import { Field } from 'payload/types';

type FieldRichText = (options?: { overrides?: Partial<Field> }) => Field;

export const RichText: FieldRichText = (options) =>
    deepmerge(
        {
            name: 'richText',
            label: 'Texto enriquecido',
            type: 'richText',
        },
        options?.overrides ?? {},
    );
