import { Block } from 'payload/types';

const RichtextBlock: Block = {
    slug: 'Richtext',
    labels: {
        singular: 'Richtext',
        plural: 'Richtexts',
    },
    fields: [
        {
            name: 'text',
            type: 'richText',
            required: true,
        },
    ],
};

export default RichtextBlock;
