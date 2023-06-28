import { GlobalConfig } from 'payload/types';
import { FieldLink } from '../fields/Link';

export const GlobalMenu = {
    slug: 'menu',
    label: 'Menú',
    admin: {
        group: 'Contenido global',
    },
    access: {
        read: () => true,
        // create: isAdmin,
        // update: isAdmin,
        // delete: isAdmin,
    },
    fields: [
        {
            name: 'items',
            label: 'Elementos',
            labels: {
                singular: 'Elemento',
                plural: 'Elementos',
            },
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
                FieldLink(),
            ],
        },
    ],
} satisfies GlobalConfig;
