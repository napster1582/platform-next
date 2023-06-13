import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../access';
import { FieldLinkGroup } from '../fields/LinkGroup';

export const GlobalFooter = {
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
            type: 'array',
            name: 'logos',
            label: 'Logos',
            labels: {
                singular: 'Logo',
                plural: 'Logos',
            },
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
            type: 'array',
            name: 'sections',
            label: 'Secciones',
            labels: {
                singular: 'Sección',
                plural: 'Secciones',
            },
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
                        FieldLinkGroup(),
                    ],
                },
            ],
        },
        {
            type: 'group',
            name: 'contact',
            label: 'Contacto',
            fields: [
                {
                    name: 'content',
                    label: 'Contenido',
                    type: 'richText',
                    admin: {
                        elements: ['ol', 'ul', 'link'],
                    },
                },
            ],
        },
    ],
} satisfies GlobalConfig;
