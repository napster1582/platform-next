import { Block } from 'payload/types';

const HeroPreviewBlock: Block = {
    slug: 'Preview',
    fields: [
        {
            name: 'title',
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
            type: 'array',
            fields: [
                {
                    name: 'school',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    maxLength: 60,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    maxLength: 300,
                },
                {
                    name: 'background',
                    type: 'upload',
                    relationTo: 'Media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
                {
                    name: 'previews',
                    type: 'blocks',
                    blocks: [HeroPreviewBlock],
                },
            ],
        },
    ],
};

export default HeroBlock;
