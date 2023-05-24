import { Block } from 'payload/types';

const AlertBlock: Block = {
    slug: 'Alert',
    labels: {
        singular: 'Alert',
        plural: 'Alerts',
    },
    fields: [
        {
            name: 'group',
            label: 'Grupos',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    maxLength: 20,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                    maxLength: 200,
                },
            ],
        },
    ],
};

export default AlertBlock;
