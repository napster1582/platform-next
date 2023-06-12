import { Block } from 'payload/types';

export const BlockContent = {
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
} satisfies Block;

export type BlockContentType = typeof BlockContent;
