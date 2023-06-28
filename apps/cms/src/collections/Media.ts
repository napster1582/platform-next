import path from 'path';
import type { CollectionConfig } from 'payload/types';

export const CollectionMedia = {
    slug: 'media',
    labels: {
        singular: 'Multimedia',
        plural: 'Multimedia',
    },
    admin: {
        group: 'Contenido',
    },
    access: {
        read: () => true,
        // create: isAdmin,
        // update: isAdmin,
        // delete: isAdmin,
    },
    upload: {
        staticURL: '/media',
        staticDir: path.resolve(__dirname, '../../media'),
        mimeTypes: ['image/*', 'audio/*', 'video/*', 'application/pdf'],
        imageSizes: [
            {
                name: 'thumbnail',
                width: 480,
                height: 320,
            },
            {
                name: 'portrait',
                width: 768,
                height: 1024,
            },
        ],
        adminThumbnail: 'thumbnail',
    },
    fields: [
        {
            name: 'alt',
            label: 'Texto alternativo',
            type: 'text',
            required: true,
            localized: true,
        },
    ],
} satisfies CollectionConfig;
