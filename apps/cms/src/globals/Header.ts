import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../collections/access';
import { Link, LinkGroup } from '../fields';

export const Header: GlobalConfig = {
    slug: 'header',
    label: 'Encabezado',
    admin: {
        group: 'Contenido global',
    },
    access: {
        read: () => true,
        update: isAdmin,
    },
    fields: [
        {
            type: 'upload',
            name: 'logo',
            label: 'Logo',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
        {
            type: 'array',
            name: 'navbar',
            label: 'Elementos de navegación',
            labels: {
                singular: 'elemento de navegación',
                plural: 'elementos de navegación',
            },
            admin: {
                components: {
                    RowLabel: ({ data }) => {
                        return data?.link?.text || data?.link?.icon;
                    },
                },
            },
            fields: [Link(), LinkGroup()],
        },
    ],
};
