import { GlobalConfig } from 'payload/types';

const Footer: GlobalConfig = {
    slug: 'Footer',
    label: 'Pie de página',
    fields: [
        {
            name: 'logos',
            label: 'Logos',
            type: 'array',
            fields: [
                {
                    name: 'logo',
                    label: 'Logo',
                    type: 'upload',
                    relationTo: 'Media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
            ],
        },
        {
            name: 'sections',
            label: 'Secciones',
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
                                    label: 'Subtítulo',
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

export default Footer;
