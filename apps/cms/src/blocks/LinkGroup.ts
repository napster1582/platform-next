import { Block } from 'payload/types';
import { LinkGroup as LinkGroupField } from '../fields';

export const LinkGroup: Block = {
    slug: 'link-group',
    labels: {
        singular: 'Grupo de links',
        plural: 'Grupos de links',
    },
    fields: [LinkGroupField()],
};
