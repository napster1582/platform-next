import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../collections/access';
import { generateMonthsRange, generateYearsRange, titlecase } from '../utilities';

const START_YEAR_FOR_RANGE = 2022;

const END_YEAR_FOR_RANGE = new Date().getFullYear() + 1;

export const Events: GlobalConfig = {
    slug: 'events',
    label: 'Eventos',
    admin: {
        group: 'Contenido global',
        preview: () => 'http://localhost:3000',
    },
    access: {
        read: () => true,
        update: isAdmin,
    },
    versions: {
        drafts: {
            autosave: true,
        },
    },
    fields: [
        {
            type: 'tabs',
            label: 'Eventos',
            tabs: generateYearsRange(START_YEAR_FOR_RANGE, END_YEAR_FOR_RANGE).map((year) => ({
                name: `year${year}`,
                label: year.toString(),
                description: `Listado de eventos para el año ${year}`,
                fields: [
                    {
                        type: 'tabs',
                        label: 'Meses',
                        tabs: generateMonthsRange(year, {
                            locales: 'es',
                        }).map((month, i) => ({
                            name: `month${i + 1}`,
                            label: titlecase(month),
                            fields: [
                                {
                                    name: 'events',
                                    label: 'Agregar evento',
                                    type: 'blocks',
                                    blocks: [
                                        {
                                            slug: 'monthlyEvents',
                                            labels: {
                                                singular: 'Evento',
                                                plural: 'Eventos',
                                            },
                                            fields: [
                                                {
                                                    name: 'title',
                                                    label: 'Título',
                                                    type: 'text',
                                                    required: true,
                                                    maxLength: 60,
                                                },
                                                {
                                                    name: 'description',
                                                    label: 'Descripción',
                                                    type: 'textarea',
                                                    required: true,
                                                    maxLength: 300,
                                                },
                                                {
                                                    name: 'status',
                                                    label: 'Estado',
                                                    type: 'radio',
                                                    required: true,
                                                    options: [
                                                        {
                                                            label: 'En Progreso',
                                                            value: 'ongoing',
                                                        },
                                                        {
                                                            label: 'Pendiente',
                                                            value: 'pending',
                                                        },
                                                        {
                                                            label: 'Finalizado',
                                                            value: 'finished',
                                                        },
                                                        {
                                                            label: 'No Finalizado',
                                                            value: 'unfinished',
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: 'cta',
                                                    label: 'Acción',
                                                    type: 'group',
                                                    fields: [
                                                        {
                                                            name: 'text',
                                                            label: 'Texto',
                                                            type: 'text',
                                                            defaultValue: 'Conocer más',
                                                            required: true,
                                                            maxLength: 20,
                                                        },
                                                        {
                                                            name: 'href',
                                                            label: 'Link',
                                                            type: 'text',
                                                            required: true,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        })),
                    },
                ],
            })),
        },
    ],
};
