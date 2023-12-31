import path from 'path';
import type { CollectionConfig } from 'payload/types';

export const CollectionMedia = {
	slug: 'media',
	labels: {
		singular: 'Multimedia',
		plural: 'Multimedia',
	},
	admin: {
		group: 'Contenido',
	},
	access: {
		read: () => true,
		create: () => true, // isAdmin,
		update: () => true, // isAdmin,
		delete: () => true, // isAdmin,
	},
	upload: {
		staticURL: '/media',
		staticDir: path.resolve(__dirname, '../../media'),
		mimeTypes: ['image/*', 'audio/*', 'video/*', 'application/pdf'],
		adminThumbnail: 'thumbnail',
	},
	fields: [
		{
			name: 'alt',
			label: 'Texto alternativo',
			type: 'text',
			required: true,
			localized: true,
		},
	],
} satisfies CollectionConfig;
