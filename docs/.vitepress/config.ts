import { DefaultTheme, defineConfig } from 'vitepress';
import pkg from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'es-CO',
    title: 'Jinen',
    titleTemplate: ':title - Jinen',
    description: 'Portal de documentación',

    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
        nav: nav(),
        sidebar: sidebarGuide(),
        editLink: editLink(),
        socialLinks: socialLinks(),
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guía',
            link: '/guide/what-is-jinen',
        },
        {
            text: 'Open API',
            link: 'https://github.com/JinenGroup/platform-v2',
            target: '_blank',
        },
        {
            text: 'Postman',
            link: 'https://github.com/JinenGroup/platform-v2',
            target: '_blank',
        },
        {
            text: `v${pkg.version}`,
            items: [
                {
                    text: 'Notas de versión',
                    link: 'https://github.com/JinenGroup/platform-v2/releases',
                },
            ],
        },
    ];
}

function sidebarGuide(): DefaultTheme.Sidebar {
    return [
        {
            text: 'Introducción',
            items: [
                { text: 'Qué es Jinen?', link: '/guide/what-is-jinen' },
                { text: 'Comenzar', link: '/guide/getting-started' },
                { text: 'Guía de contribución', link: '/guide/contributing' },
            ],
        },
        {
            text: 'Arquitectura',
            items: [
                { text: 'Introducción', link: '/guide/architecture/intro' },
                { text: 'Capas de estilos', link: '/guide/architecture/styling-layers' },
                { text: 'Patrones de diseño', link: '/guide/architecture/design-patterns' },
            ],
        },
        {
            text: 'Infraestructura',
            items: [
                { text: 'Introducción', link: '/guide/infrastructure/intro' },
                { text: 'Git', link: '/guide/infrastructure/git' },
                { text: 'Docker', link: '/guide/infrastructure/docker' },
                { text: 'Kubernetes', link: '/guide/infrastructure/k8s' },
                { text: 'CI/CD', link: '/guide/infrastructure/ci-cd' },
                { text: 'Seguridad', link: '/guide/infrastructure/security' },
            ],
        },
    ];
}

function editLink(): DefaultTheme.EditLink {
    return {
        pattern: 'https://github.com/JinenGroup/platform-v2/edit/main/docs/:path',
        text: 'Sugerir cambios a esta página',
    };
}

function socialLinks(): DefaultTheme.SocialLink[] {
    return [
        {
            icon: 'github',
            link: 'https://github.com/JinenGroup/platform-v2',
        },
    ];
}
