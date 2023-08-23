import { LinkAppearance } from '@jinen/cms-annotations';

export function resolveLinkAppearance({
	appearance,
}: {
	appearance: string | undefined;
}): LinkAppearance {
	if (!appearance) {
		return LinkAppearance.Text;
	}

	if (!Object.values(LinkAppearance).includes(appearance as LinkAppearance)) {
		console.error(`${appearance} is not part of the enum LinkAppearance`);
		return LinkAppearance.Text;
	}

	return appearance as LinkAppearance;
}
