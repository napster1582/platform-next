import { CollectionConfig } from 'payload/types';
import { isAdmin, isUser } from '../access';

export const CollectionUsers = {
    slug: 'users',
    labels: {
        singular: 'Usuario',
        plural: 'Usuarios',
    },
    admin: {
        group: 'Admin',
        useAsTitle: 'email',
    },
    auth: true,
    access: {
        read: isAdmin || isUser,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: 'names',
            label: 'Nombres',
            type: 'text',
            maxLength: 80,
            required: true,
        },
        {
            name: 'lastNames',
            label: 'Apellidos',
            type: 'text',
            maxLength: 80,
            required: true,
        },
        {
            name: 'role',
            label: 'Rol',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Administrador',
                    value: 'admin',
                },
                {
                    label: 'Usuario',
                    value: 'user',
                },
            ],
        },
    ],
} satisfies CollectionConfig;
