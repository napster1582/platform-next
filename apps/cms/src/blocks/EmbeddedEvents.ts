import { Block } from 'payload/types';

export const EmbeddedEvents: Block = {
    slug: 'embedded-events',
    labels: {
        singular: 'Evento embebido',
        plural: 'Eventos embebidos',
    },
    fields: [
        {
            type: 'relationship',
            name: 'events',
            label: 'Eventos',
            relationTo: 'events',
            required: true,
            hasMany: true,
        },
    ],
};
