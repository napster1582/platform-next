import { Block } from 'payload/types';

const MenuBlock: Block = {
    slug: 'Menu',
    fields: [
        {
            name: 'items',
            label: 'Elementos',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    label: 'Título',
                    type: 'text',
                    maxLength: 10,
                },
                {
                    name: 'icon',
                    label: 'Ícono',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
                {
                    name: 'description',
                    label: 'Descripción',
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
