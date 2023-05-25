import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../collections/access';

export const Socials: GlobalConfig = {
    slug: 'socials',
    label: 'Redes sociales',
    admin: {
        group: 'Contenido global',
    },
    access: {
        read: () => true,
        update: isAdmin,
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
