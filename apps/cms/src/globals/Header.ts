import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../collections/access';
import { FieldLink, FieldLinkGroup } from '../fields';

export const GlobalHeader = {
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
                    RowLabel: ({ data }: { data: any }) => {
                        return data?.link?.text || data?.link?.icon;
                    },
                },
            },
            fields: [FieldLink(), FieldLinkGroup()],
        },
    ],
} satisfies GlobalConfig;
