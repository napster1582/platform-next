import { Block } from 'payload/types';

const VideoBlock: Block = {
    slug: 'Video',
    labels: {
        singular: 'Video',
        plural: 'Videos',
    },
    fields: [
        {
            name: 'video',
            type: 'upload',
            relationTo: 'Media',
            filterOptions: {
                mimeType: { contains: 'video' },
            },
        },
    ],
};

export default VideoBlock;
