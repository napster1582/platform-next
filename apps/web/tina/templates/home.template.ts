import { Template } from 'tinacms';

export const HomeTemplate: Template = {
    name: 'home',
    label: 'Inicio',
    fields: [
        {
            type: 'object',
            name: 'hero',
            label: 'Hero',
            list: true,
            ui: {
                itemProps: (item) => ({ label: `[${item.school}] ${item.title}` }),
            },
            fields: [
                {
                    type: 'string',
                    name: 'school',
                    label: 'Escuela',
                    required: true,
                    isTitle: true,
                },
                {
                    type: 'string',
                    name: 'title',
                    label: 'Título',
                    required: true,
                },
                {
                    type: 'rich-text',
                    name: 'description',
                    label: 'Descripción',
                    required: true,
                },
                {
                    type: 'image',
                    name: 'background',
                    label: 'Imagen de fondo',
                    required: true,
                },
                {
                    type: 'object',
                    name: 'gallery',
                    label: 'Galería',
                    required: true,
                    list: true,
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            label: 'Título',
                            required: true,
                        },
                        {
                            type: 'image',
                            name: 'background',
                            label: 'Imagen de fondo',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            type: 'object',
            name: 'menu',
            label: 'Menú',
            list: true,
            ui: {
                itemProps: (item) => ({ label: item.title || item.description }),
            },
            fields: [
                {
                    type: 'string',
                    name: 'title',
                    label: 'Título',
                },
                {
                    type: 'image',
                    name: 'background',
                    label: 'Ícono',
                },
                {
                    type: 'string',
                    name: 'description',
                    label: 'Descripción',
                    required: true,
                    isTitle: true,
                },
            ],
        },
        {
            type: 'object',
            name: 'sectionDimensions',
            label: '[Sección] Dimensiones de la educación',
            fields: [
                {
                    type: 'string',
                    name: 'title',
                    label: 'Título',
                    required: true,
                },
                {
                    type: 'object',
                    name: 'alert',
                    label: 'Alerta',
                    ui: {
                        visualSelector: true,
                    },
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            label: 'Título',
                        },
                        {
                            type: 'rich-text',
                            name: 'description',
                            label: 'Descripción',
                        },
                    ],
                },
                {
                    type: 'image',
                    name: 'image',
                    label: 'Imagen',
                },
                {
                    type: 'string',
                    name: 'videoUrl',
                    label: 'Video (URL)',
                },
            ],
        },
        {
            type: 'object',
            name: 'sectionSchools',
            label: '[Sección] Escuelas de capacitación',
            fields: [
                {
                    type: 'string',
                    name: 'title',
                    label: 'Título',
                    required: true,
                },
                {
                    type: 'object',
                    name: 'cta',
                    label: 'CTA',
                    list: true,
                    ui: {
                        itemProps: (item) => ({
                            label: `[${item.label}] ${item.caption}`,
                        }),
                    },
                    fields: [
                        {
                            type: 'string',
                            name: 'label',
                            label: 'Etiqueta',
                        },
                        {
                            type: 'string',
                            name: 'caption',
                            label: 'Texto',
                            required: true,
                        },
                        {
                            type: 'string',
                            name: 'href',
                            label: 'Link',
                            required: true,
                        },
                    ],
                },
                {
                    type: 'object',
                    name: 'videos',
                    label: 'Videos',
                    list: true,
                    ui: {
                        itemProps: (item) => ({ label: item.videoUrl }),
                    },
                    fields: [
                        {
                            type: 'string',
                            name: 'videoUrl',
                            label: 'Video (URL)',
                        },
                    ],
                },
            ],
        },
        {
            type: 'object',
            name: 'sectionSchedule',
            label: '[Sección] Agenda de eventos académicos y científicos',
            fields: [
                {
                    type: 'string',
                    name: 'title',
                    label: 'Título',
                    required: true,
                },
                {
                    type: 'object',
                    name: 'events',
                    label: 'Eventos',
                    list: true,
                    ui: {
                        itemProps: (item) => ({
                            label: `${item.year} (${item.events?.length} ${
                                item.events?.length === 1 ? 'evento' : 'eventos'
                            })`,
                        }),
                    },
                    fields: [
                        {
                            type: 'number',
                            name: 'year',
                            label: 'Año',
                            required: true,
                        },
                        {
                            type: 'object',
                            name: 'events',
                            label: 'Eventos',
                            list: true,
                            ui: {
                                defaultItem: {
                                    href: {
                                        caption: 'Conocer más',
                                    },
                                },
                                itemProps: (item) => ({
                                    label: `[${item.month}] ${item.title} - ${item.status}`,
                                }),
                            },
                            fields: [
                                {
                                    type: 'string',
                                    name: 'title',
                                    label: 'Título',
                                    required: true,
                                },
                                {
                                    type: 'rich-text',
                                    name: 'description',
                                    label: 'Descripción',
                                    required: true,
                                },
                                {
                                    type: 'string',
                                    name: 'month',
                                    label: 'Mes',
                                    required: true,
                                    ui: {
                                        component: 'select',
                                    },
                                    options: [
                                        'Enero',
                                        'Febrero',
                                        'Marzo',
                                        'Abril',
                                        'Mayo',
                                        'Junio',
                                        'Julio',
                                        'Agosto',
                                        'Septiembre',
                                        'Octubre',
                                        'Noviembre',
                                        'Diciembre',
                                    ],
                                },
                                {
                                    type: 'string',
                                    name: 'status',
                                    label: 'Estado',
                                    required: true,
                                    ui: {
                                        component: 'radio-group',
                                    },
                                    options: [
                                        'Pendiente',
                                        'En Progreso',
                                        'Finalizado',
                                        'No Finalizado',
                                    ],
                                },
                                {
                                    type: 'object',
                                    name: 'href',
                                    label: 'Link',
                                    fields: [
                                        {
                                            type: 'string',
                                            name: 'caption',
                                            label: 'Texto',
                                            required: true,
                                        },
                                        {
                                            type: 'string',
                                            name: 'href',
                                            label: 'Link',
                                            required: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
