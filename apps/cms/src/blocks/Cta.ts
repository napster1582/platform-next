import { Block } from 'payload/types';

const CtaBlock: Block = {
    slug: 'Cta',
    labels: {
        singular: 'Call to action',
        plural: 'Call to actions',
    },
    fields: [
        {
            name: 'group',
            label: 'Grupos',
            type: 'array',
            fields: [
                {
                    name: 'badge',
                    type: 'text',
                    maxLength: 15,
                },
                {
                    name: 'caption',
                    type: 'text',
                    required: true,
                    maxLength: 90,
                },
                {
                    name: 'href',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
};

export default CtaBlock;
