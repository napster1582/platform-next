import PluginFormBuilder from '@payloadcms/plugin-form-builder';
import PluginNestedDocs from '@payloadcms/plugin-nested-docs';
import PluginSeo from '@payloadcms/plugin-seo';
import { buildConfig } from 'payload/config';

import { CollectionEvents } from './collections/Events';
import { CollectionMedia } from './collections/Media';
import { CollectionPages } from './collections/Pages';
import { CollectionUsers } from './collections/Users';

import { GlobalFooter } from './globals/Footer';
import { GlobalHeader } from './globals/Header';
import { GlobalMenu } from './globals/Menu';

import { Icon } from './components/Icon';
import { Logo } from './components/Logo';

import * as path from 'path';

const CLIENTS = [process.env.PAYLOAD_CLIENT_URL || '*'];

export default buildConfig({
	serverURL: process.env.PAYLOAD_SERVER_URL,
	admin: {
		user: CollectionUsers.slug,
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
	cors: CLIENTS,
	csrf: CLIENTS,
	typescript: {
		outputFile: path.resolve(
			process.cwd(),
			`../../packages/jinen-cms-annotations/src/auto-generated.ts`,
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
			generateURL: ({ doc }: any) =>
				`${process.env.PAYLOAD_CLIENT_URL ?? ''}/${doc['fields']['slug']?.value}`,
		}),
	],
});
