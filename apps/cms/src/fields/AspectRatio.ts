import deepmerge from 'deepmerge';
import { Field } from 'payload/types';

type FieldAspectRatio = (options?: { overrides?: Partial<Field> }) => Field;

export const AspectRatio: FieldAspectRatio = (options) =>
    deepmerge(
        {
            name: 'aspectRatio',
            label: 'Relación de aspecto',
            type: 'select',
            defaultValue: '56.25',
            options: [
                {
                    label: '16:9',
                    value: '56.25',
                },
                {
                    label: '4:5',
                    value: '75',
                },
            ],
        },
        options?.overrides ?? {},
    );
