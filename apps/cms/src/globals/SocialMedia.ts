import { GlobalConfig } from 'payload/types';

export const SocialMedia: GlobalConfig = {
    slug: 'SocialMedia',
    label: '>_ Redes sociales',
    admin: {
        group: 'Admin',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'socialMedia',
            label: 'Redes sociales',
            type: 'group',
            fields: [
                {
                    name: 'facebook',
                    label: 'Facebook (URL)',
                    type: 'text',
                },
                {
                    name: 'instagram',
                    label: 'Instagram (URL)',
                    type: 'text',
                },
                {
                    name: 'twitter',
                    label: 'Twitter (URL)',
                    type: 'text',
                },
                {
                    name: 'linkedin',
                    label: 'LinkedIn (URL)',
                    type: 'text',
                },
            ],
        },
    ],
};
