import deepmerge from 'deepmerge';
import { Field } from 'payload/types';
import { FieldLink } from './Link';

type CustomField = (options?: { overrides?: Partial<Field> }) => Field;

export const FieldSlides: CustomField = (options) =>
	deepmerge(
		{
			name: 'slides',
			label: false,
			type: 'group',
			fields: [
				{
					name: 'settings',
					label: 'Configuración de diapositivas',
					type: 'group',
					fields: [
						{
							name: 'rewind',
							label: 'Rebobinar',
							type: 'checkbox',
							defaultValue: true,
							admin: {
								description:
									'Si está activado, permite que el carrusel vuelva al principio cuando se alcanza el final.',
							},
						},
						{
							name: 'autoplay',
							label: 'Reproducción automática',
							type: 'checkbox',
							defaultValue: true,
							admin: {
								description:
									'Si está activado, las diapositivas se reproducirán automáticamente.',
							},
						},
						{
							name: 'resetProgress',
							label: 'Restablecer progreso',
							type: 'checkbox',
							defaultValue: true,
							admin: {
								description:
									'Si está activado, se restablecerá el progreso de las diapositivas después de pausarlas.',
							},
						},
						{
							name: 'interval',
							label: 'Intervalo (segundos)',
							type: 'number',
							min: 1,
							required: true,
							defaultValue: 8,
							admin: {
								description:
									'Determina el intervalo de tiempo en segundos entre el cambio de diapositivas.',
							},
						},
					],
				},
				{
					name: 'elements',
					label: 'Diapositivas',
					labels: {
						singular: 'Diapositiva',
						plural: 'Diapositivas',
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
							maxLength: 400,
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
							label: 'Configuración de enlace',
							type: 'collapsible',
							fields: [
								{
									name: 'hasLink',
									label: 'Agregar enlace',
									type: 'checkbox',
								},
								FieldLink({
									overrides: {
										admin: {
											condition: (_, siblingData) => siblingData?.hasLink,
										},
									},
								}),
							],
						},
						{
							label: 'Configuración de diapositivas anidadas',
							type: 'collapsible',
							fields: [
								{
									name: 'childrenSettings',
									label: false,
									type: 'group',
									fields: [
										{
											name: 'rewind',
											label: 'Rebobinar',
											type: 'checkbox',
											defaultValue: true,
											admin: {
												description:
													'Si está activado, permite que el carrusel vuelva al principio cuando se alcanza el final.',
											},
										},
										{
											name: 'drag',
											label: 'Arrastrar',
											type: 'checkbox',
											defaultValue: true,
											admin: {
												description:
													'Si está activado, permite que los usuarios arrastren las diapositivas.',
											},
										},
										{
											name: 'wheel',
											label: 'Rueda',
											type: 'checkbox',
											defaultValue: true,
											admin: {
												description:
													'Si está activado, permite que los usuarios usen la rueda del ratón para desplazarse por las diapositivas.',
											},
										},
										{
											name: 'autoScroll',
											label: 'Desplazamiento automático',
											type: 'checkbox',
											admin: {
												description:
													'Si está activado, las diapositivas se desplazan automáticamente.',
											},
										},
										{
											name: 'gap',
											label: 'Separación',
											type: 'number',
											min: 0,
											max: 100,
											required: true,
											defaultValue: 10,
											admin: {
												description:
													'Define la separación entre las diapositivas.',
											},
										},
										{
											name: 'perPage',
											label: 'Por página',
											type: 'number',
											min: 1,
											max: 4,
											defaultValue: 1,
											required: true,
											admin: {
												description:
													'Determina cuántas diapositivas se muestran en una página.',
											},
										},
										{
											name: 'perMove',
											label: 'Por movimiento',
											type: 'number',
											min: 1,
											max: 4,
											defaultValue: 1,
											required: true,
											admin: {
												description:
													'Determina cuántas diapositivas se mueven en un solo desplazamiento.',
											},
										},
										{
											name: 'grid',
											label: 'Sistema Grid',
											type: 'json',
											defaultValue: {
												gap: {
													row: '1rem',
													col: '1.5rem',
												},
												dimensions: [[1, 1]],
											},
											admin: {
												description:
													'Permite agrupar las diapositivas dentro de un sistema de cuadrículas.',
											},
										},
									],
								},
							],
						},
						{
							type: 'array',
							name: 'children',
							label: 'Diapositivas anidadas',
							labels: {
								singular: 'Diapositiva anidada',
								plural: 'Diapositivas anidadas',
							},
							fields: [
								{
									name: 'description',
									label: 'Descripción',
									type: 'textarea',
									maxLength: 200,
									required: true,
								},
								{
									name: 'background',
									label: 'Imagen',
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
