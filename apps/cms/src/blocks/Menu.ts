import { Block } from 'payload/types';

const MenuBlock: Block = {
    slug: 'menu',
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
            ],
        },
    ],
};

export default MenuBlock;
