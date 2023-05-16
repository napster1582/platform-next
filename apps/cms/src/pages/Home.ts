import { Block } from 'payload/types';
import {
    AlertBlock,
    CtaBlock,
    HeroBlock,
    ImageBlock,
    MenuBlock,
    PdfBlock,
    RichtextBlock,
    TimelineBlock,
    VideoBlock,
} from '../blocks';

const SectionDimensionsBlock: Block = {
    slug: 'SectionDimensions',
    labels: {
        singular: 'Dimensiones de la educación',
        plural: 'Dimensiones de la educación',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            maxLength: 60,
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [RichtextBlock, AlertBlock, CtaBlock, ImageBlock, VideoBlock, PdfBlock],
        },
    ],
};

const SectionSchoolsBlock: Block = {
    slug: 'SectionSchools',
    labels: {
        singular: 'Escuelas de capacitación',
        plural: 'Escuelas de capacitación',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            maxLength: 60,
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [RichtextBlock, AlertBlock, CtaBlock, ImageBlock, VideoBlock, PdfBlock],
        },
    ],
};

const SectionScheduleBlock: Block = {
    slug: 'SectionSchedule',
    labels: {
        singular: 'Agenda de eventos académicos y científicos',
        plural: 'Agenda de eventos académicos y científicos',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            maxLength: 60,
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [RichtextBlock, AlertBlock, CtaBlock, TimelineBlock],
        },
    ],
};

const HomePage: Block = {
    slug: 'Home',
    labels: {
        singular: 'Inicio',
        plural: 'Inicio',
    },
    fields: [
        {
            type: 'tabs',
            label: 'Tabs',
            tabs: [
                {
                    label: 'Hero',
                    description:
                        'Este tab contiene un carrusel de imágenes que presenta las diferentes escuelas.',
                    fields: [
                        {
                            name: 'hero',
                            label: 'Hero',
                            type: 'blocks',
                            unique: true,
                            blocks: [HeroBlock],
                        },
                    ],
                },
                {
                    label: 'Menu',
                    description: 'Este tab contiene el menú de navegación principal del sitio.',
                    fields: [
                        {
                            name: 'menu',
                            label: 'Menu',
                            type: 'blocks',
                            unique: true,
                            blocks: [MenuBlock],
                        },
                    ],
                },
                {
                    label: 'Secciones',
                    description:
                        'Esta sección contiene múltiples bloques que conforman diferentes secciones de la página de inicio.',
                    fields: [
                        {
                            name: 'sections',
                            type: 'blocks',
                            unique: true,
                            blocks: [
                                SectionDimensionsBlock,
                                SectionSchoolsBlock,
                                SectionScheduleBlock,
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default HomePage;
