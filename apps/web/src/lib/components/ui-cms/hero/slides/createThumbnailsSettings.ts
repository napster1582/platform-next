import type { Options } from '@splidejs/svelte-splide';

type ThumbnailsSettings = Pick<Options, 'rewind'>;

export const createThumbnailsSettings = (userSettings?: ThumbnailsSettings): Options => ({
	rewind: userSettings?.rewind ?? true,
	isNavigation: true,
	autoHeight: true,
	pagination: false,
	fixedHeight: 70,
	fixedWidth: 180,
	gap: 20,
	focus: 'center',
});
