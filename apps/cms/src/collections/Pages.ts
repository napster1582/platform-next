import { CollectionConfig } from 'payload/types';
import { Section } from '../blocks';
import { Hero, Slug } from '../fields';
import { isAdmin, isAdminOrUser } from './access';
import { populateAuthor } from './hooks';

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Página',
        plural: 'Páginas',
    },
    admin: {
        group: 'Contenido',
        useAsTitle: 'title',
        defaultColumns: ['title'],
    },
    access: {
        read: isAdminOrUser,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    versions: {
        drafts: {
            autosave: true,
        },
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            label: 'Título',
            required: true,
            localized: true,
        },
        {
            type: 'checkbox',
            name: 'showHeader',
            label: 'Mostrar encabezado',
            defaultValue: true,
        },
        {
            type: 'checkbox',
            name: 'showMenu',
            label: 'Mostrar menú',
        },
        {
            type: 'checkbox',
            name: 'showFooter',
            label: 'Mostrar pie de página',
            defaultValue: true,
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [
                        {
                            type: 'checkbox',
                            name: 'showHero',
                            label: 'Mostrar sección Hero',
                        },
                        Hero({
                            overrides: {
                                admin: {
                                    condition: (_, siblingData) => siblingData?.showHero,
                                },
                            },
                        }),
                    ],
                },
                {
                    label: 'Secciones de la página',
                    fields: [
                        {
                            type: 'blocks',
                            name: 'sections',
                            label: 'Secciones',
                            labels: {
                                singular: 'Sección',
                                plural: 'Secciones',
                            },
                            minRows: 1,
                            blocks: [Section],
                        },
                    ],
                },
            ],
        },
        {
            type: 'relationship',
            name: 'author',
            label: 'Autor',
            relationTo: 'users',
            hooks: {
                beforeChange: [populateAuthor],
            },
            admin: {
                readOnly: true,
                position: 'sidebar',
            },
        },
        Slug({
            fieldToUse: 'title',
        }),
    ],
};
