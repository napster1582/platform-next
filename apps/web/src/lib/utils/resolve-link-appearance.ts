import { LinkAppearance } from '@jinen/cms-annotations';

export function resolveLinkAppearance({
    appearance,
}: {
    appearance: string | undefined;
}): LinkAppearance {
    if (!Object.values(LinkAppearance).includes(appearance as LinkAppearance)) {
        throw new Error(`${appearance} is not part of the enum LinkAppearance`);
    }

    return appearance as LinkAppearance;
}
