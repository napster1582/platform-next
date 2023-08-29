import { LinkAppearance } from '@jinen/cms-annotations';
import memoize from 'micro-memoize';

export const resolveLinkAppearance = memoize(
	({ appearance }: { appearance: string | undefined }): LinkAppearance => {
		if (!appearance) {
			return LinkAppearance.Text;
		}

		if (!Object.values(LinkAppearance).includes(appearance as LinkAppearance)) {
			console.error(`${appearance} is not part of the enum LinkAppearance`);
			return LinkAppearance.Text;
		}

		return appearance as LinkAppearance;
	},
);
