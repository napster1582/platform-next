import { CollectionConfig } from 'payload/types';
import Content from '../blocks/Content';
import { EmbeddedForm } from '../blocks/EmbeddedForm';
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
            name: 'title',
            label: 'Título',
            type: 'text',
            required: true,
            localized: true,
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
        Slug({
            fieldToUse: 'title',
        }),
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [
                        {
                            name: 'showHero',
                            label: 'Mostrar sección Hero',
                            type: 'checkbox',
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
                    label: 'Diseño de la página',
                    fields: [
                        {
                            name: 'blocks',
                            label: 'Bloques',
                            labels: {
                                singular: 'Bloque',
                                plural: 'Bloques',
                            },
                            type: 'blocks',
                            minRows: 0,
                            blocks: [
                                // Accordion,
                                Content,
                                EmbeddedForm,
                                // Form,
                                // Media,
                                // MediaContent,
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
