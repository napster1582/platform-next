import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
    slug: 'users',
    labels: {
        singular: 'Usuario',
        plural: 'Usuarios',
    },
    admin: {
        useAsTitle: 'email',
        group: 'Admin',
    },
    auth: true,
    access: {
        read: () => true,
        delete: () => false,
    },
    fields: [
        // Email added by default
        // Add more fields as needed
    ],
};
