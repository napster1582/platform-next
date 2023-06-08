import { Block } from 'payload/types';

export const Content: Block = {
    slug: 'content',
    fields: [
        {
            type: 'group',
            name: 'content',
            label: 'Contenido',
            fields: [
                {
                    type: 'richText',
                    name: 'richText',
                    label: 'Texto enriquecido',
                },
            ],
        },
    ],
};
