import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../collections/access';

export const Footer: GlobalConfig = {
    slug: 'footer',
    label: 'Pie de página',
    admin: {
        group: 'Contenido global',
    },
    access: {
        read: () => true,
        update: isAdmin,
    },
    fields: [
        {
            name: 'logos',
            label: 'Logos',
            labels: {
                singular: 'Logo',
                plural: 'Logos',
            },
            type: 'array',
            fields: [
                {
                    name: 'logo',
                    label: 'Logo',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
            ],
        },
        {
            name: 'sections',
            label: 'Secciones',
            labels: {
                singular: 'Sección',
                plural: 'Secciones',
            },
            type: 'array',
            fields: [
                {
                    name: 'section',
                    label: 'Sección',
                    type: 'group',
                    fields: [
                        {
                            name: 'title',
                            label: 'Título',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'links',
                            label: 'Enlaces',
                            type: 'array',
                            required: true,
                            fields: [
                                {
                                    name: 'caption',
                                    label: 'Texto',
                                    type: 'text',
                                },
                                {
                                    name: 'href',
                                    label: 'Enlace',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
