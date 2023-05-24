import path from 'path';
import type { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'Multimedia',
        plural: 'Multimedia',
    },
    admin: {
        group: 'Contenido',
    },
    upload: {
        staticURL: '/media',
        staticDir: path.resolve(__dirname, '../../media'),
        mimeTypes: ['image/*', 'audio/*', 'video/*', 'application/pdf'],
        imageSizes: [
            {
                width: 300,
                height: 300,
                crop: 'center',
                name: 'squareSmall',
            },
            {
                width: 400,
                height: 400,
                crop: 'center',
                name: 'thumbnail',
            },
            {
                width: 900,
                height: 450,
                crop: 'center',
                name: 'sixteenByNineMedium',
            },
            {
                width: 800,
                height: 800,
                crop: 'center',
                name: 'squareLarge',
            },
            {
                width: 1920,
                height: 1080,
                crop: 'center',
                name: 'fullHD',
            },
        ],
    },
    fields: [],
};
