import { Block } from 'payload/types';
import { FieldLink } from '../fields';

export const BlockLink: Block = {
    slug: 'link',
    labels: {
        singular: 'Link',
        plural: 'Links',
    },
    fields: [FieldLink()],
} satisfies Block;

export type BlockLinkType = typeof BlockLink;
