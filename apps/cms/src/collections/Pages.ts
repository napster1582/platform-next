import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';
import { BlockSection } from '../blocks/Section';
import { FieldHero } from '../fields/Hero';
import { FieldSlug } from '../fields/Slug';
import { populateAuthor } from '../hooks';

export const CollectionPages = {
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
        read: () => true,
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
            defaultValue: false,
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
                            defaultValue: false,
                        },
                        FieldHero({
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
                            blocks: [BlockSection],
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
        FieldSlug({
            fieldToUse: 'title',
        }),
    ],
} satisfies CollectionConfig;
