import type { Media } from '@jinen/cms-annotations';
import memoize from 'micro-memoize';

export const resolveMediaSource = memoize(
	({ media }: { media: Media | string | undefined }): string => {
		if (!media) {
			return '';
		}

		if (typeof media === 'string') {
			return media;
		}

		return media.url ?? '';
	},
);
