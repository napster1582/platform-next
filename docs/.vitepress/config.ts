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
    ignoreDeadLinks: [/^https?:\/\/localhost/],

    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
    },

    themeConfig: {
        // layout
        nav: nav(),
        sidebar: sidebarGuide(),
        socialLinks: socialLinks(),
        footer: footer(),

        // outline
        editLink: editLink(),
        outline: outline(),
        docFooter: docFooter(),
        lastUpdatedText: lastUpdatedText(),
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
                {
                    text: 'Guía de contribución',
                    link: 'https://github.com/JinenGroup/platform-v2/blob/main/CONTRIBUTING.md',
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
                { text: 'Primeros pasos', link: '/guide/getting-started' },
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
                { text: 'SemVer', link: '/guide/infrastructure/semver' },
                { text: 'Git', link: '/guide/infrastructure/git' },
                { text: 'Docker', link: '/guide/infrastructure/docker' },
                { text: 'K8S', link: '/guide/infrastructure/k8s' },
                {
                    text: 'K8S en Linux (Debian)',
                    link: '/guide/infrastructure/k8s-on-linux-deb',
                },
                {
                    text: 'K8S en Windows',
                    link: '/guide/infrastructure/k8s-on-win-server-2022',
                },
                {
                    text: 'K8S en Windows (WSL2)',
                    link: '/guide/infrastructure/k8s-on-win-server-2022-wsl2',
                },
                { text: 'CI/CD', link: '/guide/infrastructure/ci-cd' },
                { text: 'Devcontainers', link: '/guide/infrastructure/devcontainers' },
                { text: 'NGINX', link: '/guide/infrastructure/nginx' },
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
        {
            icon: 'discord',
            link: 'https://github.com/JinenGroup/platform-v2',
        },
        {
            icon: 'twitter',
            link: 'https://github.com/JinenGroup/platform-v2',
        },
        {
            icon: 'linkedin',
            link: 'https://github.com/JinenGroup/platform-v2',
        },
        {
            icon: 'facebook',
            link: 'https://github.com/JinenGroup/platform-v2',
        },
        {
            icon: 'instagram',
            link: 'https://github.com/JinenGroup/platform-v2',
        },
    ];
}

function footer(): DefaultTheme.Footer {
    return {
        message: 'Jinen',
        copyright: 'Copyright © 2023-presente',
    };
}

function outline(): DefaultTheme.Outline {
    return {
        label: 'En esta página',
        level: 'deep',
    };
}

function docFooter(): DefaultTheme.DocFooter {
    return {
        prev: 'Anterior',
        next: 'Siguiente',
    };
}

function lastUpdatedText(): string {
    return 'Última actualización';
}
