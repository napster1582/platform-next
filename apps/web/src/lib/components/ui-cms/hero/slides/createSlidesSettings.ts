import type { Options } from '@splidejs/svelte-splide';

type SlidesSettings = Pick<Options, 'rewind' | 'autoplay' | 'resetProgress' | 'interval'>;

export const createSlidesSettings = (userSettings?: SlidesSettings): Options => ({
	rewind: userSettings?.rewind ?? true,
	autoplay: userSettings?.autoplay ?? true,
	resetProgress: userSettings?.resetProgress ?? true,
	interval: userSettings?.interval ? userSettings?.interval * 1000 : 8000,
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
