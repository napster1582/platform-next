import { GlobalConfig } from 'payload/types';

const Footer: GlobalConfig = {
    slug: 'footer',
    label: 'Pie de página',
    fields: [
        {
            name: 'logos',
            type: 'array',
            fields: [
                {
                    name: 'logo',
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
            type: 'array',
            fields: [
                {
                    name: 'section',
                    type: 'group',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'links',
                            type: 'array',
                            required: true,
                            fields: [
                                {
                                    name: 'caption',
                                    type: 'text',
                                },
                                {
                                    name: 'href',
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
