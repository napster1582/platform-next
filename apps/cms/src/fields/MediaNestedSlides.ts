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
					label: 'Configuración',
					type: 'collapsible',
					fields: [
						{
							name: 'enableExternalAutoTransitions',
							label: 'Habilitar transiciones automáticas para los elementos externos',
							type: 'checkbox',
						},
						{
							type: 'row',
							fields: [
								{
									name: 'enableInternalAutoTransitions',
									label: 'Habilitar transiciones automáticas para los elementos internos',
									type: 'checkbox',
								},
								{
									name: 'internalAutoTransitionCycles',
									label: 'Cantidad de ciclos de transición',
									type: 'number',
									min: 1,
									max: 5,
									required: true,
									defaultValue: 1,
									admin: {
										description:
											'Especifique la cantidad de ciclos de transiciones para los elementos internos.',
										condition: (
											_: unknown,
											siblingData: Record<string, unknown>,
										) => siblingData.enableInternalAutoTransitions,
									},
								},
							],
						},
						{
							name: 'autoTransitionDuration',
							label: 'Duración de transición automática (segundos)',
							type: 'number',
							required: true,
							defaultValue: 8,
							admin: {
								description:
									'Especifique la duración de cada transición en segundos (e.g., 6, 10, 15, etc). Si habilita las dos opciones anteriores, las transiciones se alternarán en ciclos compuestos que incluyen elementos externos e internos.',
								condition: (_: unknown, siblingData: Record<string, unknown>) =>
									siblingData.enableExternalAutoTransitions ||
									siblingData.enableInternalAutoTransitions,
							},
						},
						{
							name: 'showExternalProgressIndicator',
							label: 'Mostrar indicador de progreso para los elementos externos',
							type: 'checkbox',
							defaultValue: true,
							admin: {
								description:
									'Muestra indicador de progreso cuando la transición automática de elementos externos está habilitada.',
								condition: (_: unknown, siblingData: Record<string, unknown>) =>
									siblingData.enableExternalAutoTransitions,
							},
						},
						{
							name: 'showInternalProgressIndicator',
							label: 'Mostrar indicador de progreso para los elementos internos',
							type: 'checkbox',
							defaultValue: true,
							admin: {
								description:
									'Muestra indicador de progreso cuando la transición automática de elementos internos está habilitada.',
								condition: (_: unknown, siblingData: Record<string, unknown>) =>
									siblingData.enableInternalAutoTransitions,
							},
						},
					],
				},
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
