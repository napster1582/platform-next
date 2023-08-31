import type { Media } from '@jinen/cms-annotations';
import memoize from 'micro-memoize';

export const resolveMediaSource = memoize(
	({
		media,
		size,
	}: {
		media: Media | string;
		size?: 'thumbnail'; // TODO: Investigate way to infer this keys from Media["sizes"]
	}): string => {
		if (typeof media === 'string') {
			return media;
		}

		if (!size) {
			return media.webp?.url ?? media.url ?? '';
		}

		return media.webp?.sizes?.[size]?.url ?? media.sizes?.[size]?.url ?? '';
	},
);
