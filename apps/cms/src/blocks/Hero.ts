import { Block } from 'payload/types';

const HeroPreviewBlock: Block = {
    slug: 'Preview',
    fields: [
        {
            name: 'title',
            label: 'título',
            type: 'text',
            maxLength: 20,
            required: true,
        },
        {
            name: 'background',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
    ],
};

const HeroBlock: Block = {
    slug: 'hero',
    fields: [
        {
            name: 'items',
            label: 'elementos',
            type: 'array',
            fields: [
                {
                    name: 'school',
                    label: 'escuela',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    label: 'título',
                    type: 'text',
                    required: true,
                    maxLength: 60,
                },
                {
                    name: 'description',
                    label: 'descripción',
                    type: 'text',
                    maxLength: 300,
                },
                {
                    name: 'background',
                    label: 'fondo',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
                {
                    name: 'previews',
                    label: 'previsualizaciones',
                    type: 'blocks',
                    blocks: [HeroPreviewBlock],
                },
            ],
        },
    ],
};

export default HeroBlock;
