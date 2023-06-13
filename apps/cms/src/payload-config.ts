import PluginFormBuilder from '@payloadcms/plugin-form-builder';
import PluginNestedDocs from '@payloadcms/plugin-nested-docs';
import PluginSearch from '@payloadcms/plugin-search';
import PluginSeo from '@payloadcms/plugin-seo';
import { buildConfig } from 'payload/config';

import { CollectionEvents } from './collections/Events';
import { CollectionMedia } from './collections/Media';
import { CollectionPages } from './collections/Pages';
import { CollectionUsers } from './collections/Users';

import { GlobalFooter } from './globals/Footer';
import { GlobalHeader } from './globals/Header';
import { GlobalMenu } from './globals/Menu';
import { GlobalAppearance } from './globals/Settings';

import { Icon } from './components/Icon';
import { Logo } from './components/Logo';

import * as path from 'path';

export default buildConfig({
    serverURL: process.env.JINEN_SERVER_URL,
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
    globals: [GlobalAppearance, GlobalHeader, GlobalMenu, GlobalFooter],
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
    cors: process.env.JINEN_CLIENT_URLS?.split(',') ?? [],
    csrf: process.env.JINEN_CLIENT_URLS?.split(',') ?? [],
    typescript: {
        outputFile: path.resolve(
            process.cwd(),
            `../../packages/jinen-cms-generated-types/src/index.ts`,
        ),
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
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            generateTitle: ({ doc }: any) => `jinen.com — ${doc['title']?.value}: [Descripción]`,
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            generateURL: ({ doc }: any) => `https://jinen.com/${doc['fields']['slug']?.value}`,
        }),
    ],
});
