import path from 'path';
import type { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminOrUser } from './access';

export const CollectionMedia: CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'Multimedia',
        plural: 'Multimedia',
    },
    admin: {
        group: 'Contenido',
    },
    access: {
        read: isAdminOrUser,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
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
            {
                name: 'hero',
                width: 1920,
                height: 1080,
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

export type CollectionMediaType = typeof CollectionMedia;
