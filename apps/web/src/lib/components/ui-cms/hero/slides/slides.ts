import type { Options } from '@splidejs/svelte-splide';

type SlidesOptions = Pick<Options, 'rewind' | 'autoplay' | 'resetProgress' | 'interval'>;

type SlidesThumbnailsOptions = Pick<Options, 'rewind'>;

type SlidesNestedOptions = Pick<
	Options,
	'rewind' | 'drag' | 'wheel' | 'autoScroll' | 'gap' | 'perPage' | 'perMove' | 'grid'
>;

export const defaultSlidesOptions = (options?: SlidesOptions): Options => ({
	rewind: options?.rewind ?? true,
	autoplay: options?.autoplay ?? true,
	resetProgress: options?.resetProgress ?? true,
	interval: options?.interval ?? 8000,
	wheel: false,
	arrows: false,
	height: '800px',
	direction: 'ttb',
	lazyLoad: 'nearby',
	breakpoints: {
		1280: {
			height: '1000px',
		},
	},
});

export const defaultSlidesThumbnailsOptions = (options?: SlidesThumbnailsOptions): Options => ({
	rewind: options?.rewind ?? true,
	isNavigation: true,
	autoHeight: true,
	pagination: false,
	fixedHeight: 70,
	fixedWidth: 180,
	gap: 20,
	focus: 'center',
});

export const defaultSlidesNestedOptions = (options?: SlidesNestedOptions): Options => ({
	rewind: options?.rewind ?? true,
	drag: options?.drag ?? true,
	wheel: options?.wheel ?? true,
	autoScroll: options?.autoScroll ?? false,
	height: '500px',
	perPage: options?.perPage ?? 1,
	perMove: options?.perMove ?? 1,
	gap: options?.gap ?? 10,
	grid: options?.grid ?? {
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
