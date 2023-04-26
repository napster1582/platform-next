import { GlobalConfig } from 'payload/types';

const Header: GlobalConfig = {
    slug: 'header',
    label: 'Encabezado',
    fields: [
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
        {
            name: 'title',
            type: 'text',
            maxLength: 60,
        },
        {
            name: 'navbar',
            type: 'group',
            fields: [
                {
                    name: 'navbarItem',
                    type: 'array',
                    fields: [
                        {
                            name: 'caption',
                            type: 'text',
                            required: true,
                            maxLength: 20,
                        },
                        {
                            name: 'href',
                            type: 'text',
                        },
                        {
                            name: 'style',
                            type: 'radio',
                            options: [
                                { label: 'Link', value: 'link' },
                                { label: 'Buttton', value: 'button' },
                            ],
                            defaultValue: 'link',
                        },
                        {
                            name: 'children',
                            type: 'array',
                            fields: [
                                {
                                    name: 'caption',
                                    type: 'text',
                                    required: true,
                                    maxLength: 20,
                                },
                                {
                                    name: 'href',
                                    type: 'text',
                                },
                                {
                                    name: 'isDisabled',
                                    type: 'checkbox',
                                    defaultValue: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default Header;
