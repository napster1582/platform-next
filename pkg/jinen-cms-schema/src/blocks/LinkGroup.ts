import { Block } from 'payload/types';
import { FieldLinkGroup } from '../fields';

export const BlockLinkGroup: Block = {
    slug: 'link-group',
    labels: {
        singular: 'Grupo de links',
        plural: 'Grupos de links',
    },
    fields: [FieldLinkGroup()],
} satisfies Block;

export type BlockLinkGroupType = typeof BlockLinkGroup;
