import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../collections/access';
import { FieldLink } from '../fields';

export const GlobalMenu = {
    slug: 'menu',
    label: 'Menú',
    admin: {
        group: 'Contenido global',
    },
    access: {
        read: () => true,
        update: isAdmin,
    },
    versions: {
        drafts: {
            autosave: true,
        },
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
