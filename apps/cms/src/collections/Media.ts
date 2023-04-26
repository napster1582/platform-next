import path from 'path';
import type { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: path.resolve(__dirname, '../../media'),
        // Specify the size name that you'd like to use as admin thumbnail
        adminThumbnail: 'thumbnail',
        imageSizes: [
            {
                height: 300,
                width: 300,
                crop: 'center',
                name: 'squareSmall',
            },
            {
                height: 400,
                width: 400,
                crop: 'center',
                name: 'thumbnail',
            },
            {
                height: 450,
                width: 900,
                crop: 'center',
                name: 'sixteenByNineMedium',
            },
            {
                height: 800,
                width: 800,
                crop: 'center',
                name: 'squareLarge',
            },
            {
                height: 1080,
                width: 1920,
                crop: 'center',
                name: 'fullHD',
            },
        ],
    },
    fields: [],
};

export default Media;
