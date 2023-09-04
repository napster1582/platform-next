import type { GridOptions } from '@splidejs/splide-extension-grid/dist/types/types/options';
import type { Options } from '@splidejs/svelte-splide';

type NestedSlidesSettings = Pick<
	Options,
	'rewind' | 'drag' | 'wheel' | 'autoScroll' | 'gap' | 'perPage' | 'perMove'
> & {
	grid?: string | number | boolean | { [k: string]: unknown } | unknown[] | null | undefined;
};

export const createNestedSlidesSettings = (userSettings?: NestedSlidesSettings): Options => ({
	rewind: userSettings?.rewind ?? true,
	drag: userSettings?.drag ?? true,
	wheel: userSettings?.wheel ?? true,
	autoScroll: userSettings?.autoScroll ?? false,
	height: '500px',
	perPage: userSettings?.perPage ?? 1,
	perMove: userSettings?.perMove ?? 1,
	gap: userSettings?.gap ?? 10,
	grid: (userSettings?.grid as GridOptions) ?? {
		rows: 1,
		cols: 1,
		gap: {
			row: '1rem',
			col: '1.5rem',
		},
	},
	breakpoints: {
		1280: {
			grid: {
				rows: 1,
				cols: 1,
			},
		},
	},
});
