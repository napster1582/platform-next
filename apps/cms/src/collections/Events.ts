import { generateMonthsRange, generateYearsRange, titlecase } from '@jinen/helpers';
import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';
import { FieldLink } from '../fields/Link';
import { FieldSlug } from '../fields/Slug';
import { populateAuthor } from '../hooks';

const CURRENT_YEAR = new Date().getFullYear();

const START_YEAR_FOR_RANGE = 2023;

const END_YEAR_FOR_RANGE = new Date().getFullYear() + 1;

export const CollectionEvents = {
    slug: 'events',
    labels: {
        singular: 'Evento',
        plural: 'Eventos',
    },
    admin: {
        group: 'Contenido',
        useAsTitle: 'title',
        defaultColumns: ['title', 'description', 'year', 'month'],
        listSearchableFields: ['year'],
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
            name: 'title',
            label: 'Título',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Descripción',
            type: 'textarea',
            required: true,
            maxLength: 300,
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'year',
                    label: 'Año',
                    type: 'select',
                    required: true,
                    defaultValue: CURRENT_YEAR.toString(),
                    options: generateYearsRange(START_YEAR_FOR_RANGE, END_YEAR_FOR_RANGE).map(
                        (year) => ({
                            label: `${year}`,
                            value: `${year}`,
                        }),
                    ),
                },
                {
                    name: 'month',
                    label: 'Mes',
                    type: 'select',
                    required: true,
                    options: generateMonthsRange({ locales: 'es' }).map((month) => ({
                        label: titlecase(month),
                        value: `${month}`,
                    })),
                },
            ],
        },
        {
            type: 'group',
            name: 'linkGroup',
            label: 'Enlace',
            fields: [
                {
                    type: 'checkbox',
                    name: 'addLink',
                    label: 'Agregar enlace',
                    defaultValue: false,
                },
                FieldLink({
                    overrides: {
                        label: false,
                        admin: {
                            condition: (_, siblingData) => siblingData?.addLink,
                        },
                    },
                }),
            ],
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
        FieldSlug({
            fieldToUse: 'title',
        }),
    ],
} satisfies CollectionConfig;
