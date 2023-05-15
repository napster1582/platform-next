import { Block } from 'payload/types';

const MenuBlock: Block = {
    slug: 'Menu',
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
                    relationTo: 'Media',
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
