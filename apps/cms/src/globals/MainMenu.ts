import { GlobalConfig } from 'payload/types';

export const MainMenu: GlobalConfig = {
    slug: 'Menu',
    label: '>_ Menú principal',
    admin: {
        group: 'Admin',
    },
    access: {
        read: () => true,
    },
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
