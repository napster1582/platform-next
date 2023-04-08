import { DefaultTheme, defineConfig } from 'vitepress';
import { version } from '../../package.json';

const Nav: DefaultTheme.NavItem[] = [
    {
        text: 'Guías',
        items: [
            {
                text: 'Contribución',
                link: 'https://github.com/JinenGroup/contributing',
            },
            {
                text: 'Arquitectura',
                link: 'https://github.com/JinenGroup/contributing',
            },
            {
                text: 'Infraestructura',
                link: 'https://github.com/JinenGroup/contributing',
            },
        ],
    },
    {
        text: 'Integraciones',
        items: [
            {
                text: 'REST API',
                link: '/integrations/rest',
            },
            {
                text: 'GraphQL API',
                link: '/integrations/graphql',
            },
        ],
    },
    {
        text: 'Configuración',
        items: [
            {
                text: 'Archivo de configuración',
                link: '/config/file',
            },
            {
                text: 'Esquemas',
                items: [
                    { text: 'Vista general', link: '/config/schemas/overview' },
                    { text: 'Aplicación', link: '/config/schemas/app' },
                    { text: 'Autenticación', link: '/config/schemas/auth' },
                    { text: 'SQL', link: '/config/schemas/sql' },
                    { text: 'MongoDB', link: '/config/schemas/mongodb' },
                ],
            },
        ],
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
        text: `v${version}`,
        items: [
            {
                text: 'Notas de versión',
                link: 'https://github.com/JinenGroup/platform-v2/releases',
            },
        ],
    },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Jinen',
    description: 'Portal de documentación',

    cleanUrls: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: Nav,

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
        ],

        editLink: {
            pattern: 'https://github.com/JinenGroup/platform-v2/edit/main/docs/:path',
            text: 'Sugerir cambios a esta página',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/JinenGroup/platform-v2' },
            { icon: 'discord', link: 'https://chat.jinen.me' },
        ],
    },
});
