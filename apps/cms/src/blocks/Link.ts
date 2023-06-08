import { Block } from 'payload/types';
import { Link as LinkField } from '../fields';

export const Link: Block = {
    slug: 'link',
    labels: {
        singular: 'Link',
        plural: 'Links',
    },
    fields: [LinkField()],
};
