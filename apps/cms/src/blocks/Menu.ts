import { Block } from 'payload/types';

const MenuBlock: Block = {
    slug: 'menu',
    fields: [
        {
            name: 'items',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    maxLength: 10,
                },
                {
                    name: 'icon',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
                {
                    name: 'description',
                    type: 'text',
                    maxLength: 40,
                },
                {
                    name: 'href',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
};

export default MenuBlock;
