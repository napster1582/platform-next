import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { FieldLink } from './Link';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldMediaNestedSlides: CustomField = (options) =>
	deepmerge(
		{
			name: 'mediaNestedSlides',
			label: false,
			type: 'group',
			fields: [
				{
					name: 'items',
					label: 'Elementos',
					labels: {
						singular: 'Elemento',
						plural: 'Elementos',
					},
					type: 'array',
					minRows: 1,
					admin: {
						initCollapsed: true,
						components: {
							/* eslint-disable  @typescript-eslint/no-explicit-any */
							RowLabel: ({ data }: any) => {
								return `[${data?.indicator}] ${data?.title}`;
							},
						},
					},
					fields: [
						{
							name: 'indicator',
							label: 'Indicador',
							type: 'text',
							required: true,
							maxLength: 10,
						},
						{
							name: 'title',
							label: 'Título',
							type: 'text',
							required: true,
							maxLength: 60,
						},
						{
							name: 'description',
							label: 'Descripción',
							type: 'textarea',
						},
						{
							name: 'background',
							label: 'Imagen de fondo',
							type: 'upload',
							relationTo: 'media',
							filterOptions: {
								mimeType: { contains: 'image' },
							},
						},
						{
							name: 'show',
							label: 'Mostrar enlace',
							type: 'checkbox',
							defaultValue: false,
						},
						FieldLink({
							overrides: {
								admin: {
									condition: (_, siblingData) => siblingData?.show,
								},
							},
						}),
						{
							type: 'array',
							name: 'previews',
							label: 'Vistas previas',
							labels: {
								singular: 'Vista previa',
								plural: 'Vistas previas',
							},
							fields: [
								{
									name: 'title',
									label: 'Título',
									type: 'text',
									maxLength: 40,
									required: true,
								},
								{
									name: 'background',
									label: 'Imagen de fondo',
									type: 'upload',
									relationTo: 'media',
									filterOptions: {
										mimeType: { contains: 'image' },
									},
									required: true,
								},
							],
						},
					],
				},
			],
		},
		options?.overrides ?? {},
	);
