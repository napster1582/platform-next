import { Block } from 'payload/types';

const VideoBlock: Block = {
    slug: 'Video',
    labels: {
        singular: 'Video',
        plural: 'Videos',
    },
    fields: [
        {
            name: 'group',
            label: 'Grupos',
            type: 'array',
            fields: [
                {
                    name: 'video',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'video' },
                    },
                },
            ],
        },
    ],
};

export default VideoBlock;
