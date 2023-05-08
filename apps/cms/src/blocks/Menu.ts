import { Block } from 'payload/types';

const MenuBlock: Block = {
    slug: 'menu',
    fields: [
        {
            name: 'items',
            label: 'elementos',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    label: 'título',
                    type: 'text',
                    maxLength: 10,
                },
                {
                    name: 'icon',
                    label: 'ícono',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
                {
                    name: 'description',
                    label: 'descripción',
                    type: 'text',
                    maxLength: 40,
                },
            ],
        },
    ],
};

export default MenuBlock;
