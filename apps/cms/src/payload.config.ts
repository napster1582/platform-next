import PluginFormBuilder from '@payloadcms/plugin-form-builder';
import PluginNestedDocs from '@payloadcms/plugin-nested-docs';
import PluginSearch from '@payloadcms/plugin-search';
import PluginSeo from '@payloadcms/plugin-seo';
import PluginPasswordProtection from 'payload-plugin-password-protection';

import { resolve } from 'path';
import { buildConfig } from 'payload/config';
import { Events, Media, Pages, Users } from './collections';
import { Footer, Header, MainMenu, SocialMedia } from './globals';

export default buildConfig({
    serverURL: 'http://localhost:3001', // process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [Users, Media, Pages, Events],
    globals: [Header, MainMenu, Footer, SocialMedia],
    rateLimit: {
        trustProxy: true,
        window: 2 * 60 * 1000, // 2 minutes,
        max: 2400, // limit each IP per windowMS
    },
    typescript: {
        outputFile: resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        disablePlaygroundInProduction: true,
        disable: true,
    },
    plugins: [
        PluginPasswordProtection({
            collections: ['pages', 'events'],
        }),
        PluginNestedDocs({
            collections: ['pages'],
            generateLabel: (_, doc) => doc.title as string,
            generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
        }),
        PluginSearch({
            collections: ['pages', 'events'],
            defaultPriorities: {
                pages: 10,
                events: 20,
            },
        }),
        PluginFormBuilder({
            formOverrides: {
                admin: {
                    group: 'Contenido',
                },
            },
            formSubmissionOverrides: {
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
