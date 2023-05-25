import PluginFormBuilder from '@payloadcms/plugin-form-builder';
import PluginNestedDocs from '@payloadcms/plugin-nested-docs';
import PluginSearch from '@payloadcms/plugin-search';
import PluginSeo from '@payloadcms/plugin-seo';
import PluginPasswordProtection from 'payload-plugin-password-protection';

import { resolve } from 'path';
import { buildConfig } from 'payload/config';
import { Media, Pages, Users } from './collections';
import { Events, Footer, Header, Menu, Socials } from './globals';

import { Icon, Logo } from './graphics';

const CLIENT_URLS = ['http://localhost:3002'];

export default buildConfig({
    serverURL: 'http://localhost:3001',
    admin: {
        meta: {
            titleSuffix: '- Jinen CMS',
        },
        components: {
            graphics: {
                Logo,
                Icon,
            },
        },
    },
    collections: [Users, Media, Pages],
    globals: [Events, Header, Menu, Footer, Socials],
    rateLimit: {
        trustProxy: true,
        window: 2 * 60 * 1000, // 2 minutes,
        max: 2400, // limit each IP per windowMS
    },
    cors: CLIENT_URLS,
    csrf: CLIENT_URLS,
    typescript: {
        outputFile: resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        disablePlaygroundInProduction: true,
        disable: true,
    },
    plugins: [
        PluginPasswordProtection({
            collections: ['pages'],
        }),
        PluginNestedDocs({
            collections: ['pages'],
            generateLabel: (_, doc) => doc.title as string,
            generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
        }),
        PluginSearch({
            collections: ['pages'],
            searchOverrides: {
                labels: {
                    singular: 'Resultado de búsqueda',
                    plural: 'Resultados de búsqueda',
                },
            },
            defaultPriorities: {
                pages: 10,
            },
        }),
        PluginFormBuilder({
            formOverrides: {
                labels: {
                    singular: 'Formulario',
                    plural: 'Formularios',
                },
                admin: {
                    group: 'Contenido',
                },
            },
            formSubmissionOverrides: {
                labels: {
                    singular: 'Envío de formulario',
                    plural: 'Envíos de formulario',
                },
                admin: {
                    group: 'Admin',
                },
            },
            redirectRelationships: ['pages'],
        }),
        PluginSeo({
            collections: ['pages'],
        }),
    ],
});
