import { CollectionConfig } from 'payload/types';
import { BlockSection } from '../blocks/Section';
import { FieldHero } from '../fields/Hero';
import { FieldSlug } from '../fields/Slug';

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
        create: () => true, // isAdmin,
        update: () => true, // isAdmin,
        delete: () => true, // isAdmin,
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
                    label: 'Secciones',
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
                {
                    label: 'Estilos',
                    fields: [
                        {
                            type: 'code',
                            name: 'customCss',
                            label: 'CSS',
                            admin: {
                                language: 'css',
                                description:
                                    'CSS personalizado para modificar los estilos predeterminados de la página.',
                            },
                        },
                    ],
                },
            ],
        },
        FieldSlug({
            fieldToUse: 'title',
        }),
    ],
} satisfies CollectionConfig;
