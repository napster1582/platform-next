import { CollectionConfig } from 'payload/types';
import { populateAuthor } from './hooks/populate-author';

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Página',
        plural: 'Páginas',
    },
    admin: {
        group: 'Contenido',
    },
    access: {
        read: () => true,
    },
    versions: {
        drafts: {
            autosave: true,
        },
    },
    fields: [
        {
            name: 'title',
            label: 'Título',
            type: 'text',
            required: true,
        },
        {
            name: 'author',
            label: 'Autor',
            relationTo: 'users',
            type: 'relationship',
            hooks: {
                beforeChange: [populateAuthor],
            },
            admin: {
                readOnly: true,
                position: 'sidebar',
            },
        },
        {
            name: 'home',
            label: 'Inicio',
            type: 'group',
            fields: [],
        },
        // {
        //     name: 'about',
        //     label: 'Función',
        //     type: 'group',
        //     fields: [],
        // },
        // {
        //     name: 'dicyt',
        //     label: 'DICYT',
        //     type: 'group',
        //     fields: [],
        // },
    ],
};
