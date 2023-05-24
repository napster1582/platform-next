import { Block } from 'payload/types';

const HeroPreviewBlock: Block = {
    slug: 'Preview',
    fields: [
        {
            name: 'title',
            label: 'Título',
            type: 'text',
            maxLength: 20,
            required: true,
        },
        {
            name: 'background',
            type: 'upload',
            relationTo: 'Media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
    ],
};

const HeroBlock: Block = {
    slug: 'Hero',
    fields: [
        {
            name: 'items',
            label: 'Elementos',
            type: 'array',
            fields: [
                {
                    name: 'school',
                    label: 'Escuela',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    label: 'Título',
                    type: 'text',
                    required: true,
                    maxLength: 60,
                },
                {
                    name: 'description',
                    label: 'Descripción',
                    type: 'textarea',
                    maxLength: 300,
                },
                {
                    name: 'background',
                    label: 'Fondo',
                    type: 'upload',
                    relationTo: 'Media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
                {
                    name: 'previews',
                    label: 'Previsualizaciones',
                    type: 'blocks',
                    blocks: [HeroPreviewBlock],
                },
            ],
        },
    ],
};

export default HeroBlock;
