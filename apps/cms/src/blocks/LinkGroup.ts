import { Block } from 'payload/types';
import { FieldLinkGroup } from '../fields';

export const BlockLinkGroup = {
    slug: 'link-group',
    labels: {
        singular: 'Grupo de links',
        plural: 'Grupos de links',
    },
    fields: [FieldLinkGroup()],
} satisfies Block;
