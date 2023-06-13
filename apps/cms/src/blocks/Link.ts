import { Block } from 'payload/types';
import { FieldLink } from '../fields';

export const BlockLink = {
    slug: 'link',
    labels: {
        singular: 'Link',
        plural: 'Links',
    },
    fields: [FieldLink()],
} satisfies Block;
