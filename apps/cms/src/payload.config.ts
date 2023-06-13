import PluginFormBuilder from '@payloadcms/plugin-form-builder';
import PluginNestedDocs from '@payloadcms/plugin-nested-docs';
import PluginSearch from '@payloadcms/plugin-search';
import PluginSeo from '@payloadcms/plugin-seo';
import path from 'path';
import { buildConfig } from 'payload/config';
import { CollectionEvents, CollectionMedia, CollectionPages, CollectionUsers } from './collections';
import { GlobalFooter, GlobalHeader, GlobalMenu } from './globals';
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
    collections: [CollectionUsers, CollectionMedia, CollectionPages, CollectionEvents],
    globals: [GlobalHeader, GlobalMenu, GlobalFooter],
    upload: {
        limits: {
            fileSize: 12_000_000, // 12MB, written in bytes
        },
    },
    rateLimit: {
        trustProxy: true,
        window: 2 * 60 * 1000, // 2 minutes,
        max: 2400, // limit each IP per windowMS
    },
    cors: CLIENT_URLS,
    csrf: CLIENT_URLS,
    typescript: {
        outputFile: path.resolve(path.dirname(''), `../../pkg/jinen-cms-types/src/index.ts`),
    },
    graphQL: {
        disablePlaygroundInProduction: true,
        disable: true,
    },
    plugins: [
        PluginNestedDocs({
            collections: ['pages'],
            generateLabel: (_, doc) => doc.title as string,
            generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
        }),
        PluginSearch({
            collections: ['users', 'pages', 'events'],
            searchOverrides: {
                labels: {
                    singular: 'Resultado de búsqueda',
                    plural: 'Resultados de búsqueda',
                },
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
            generateTitle: ({ doc }: any) => `jinen.com — ${doc['title']?.value}: [Descripción]`,
            generateURL: ({ doc }: any) => `https://jinen.com/${doc['fields']['slug']?.value}`,
        }),
    ],
});
