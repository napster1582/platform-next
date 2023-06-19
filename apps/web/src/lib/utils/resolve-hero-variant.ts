import { HeroVariant } from '@jinen/cms-annotations';

export function resolveHeroVariant({ variant }: { variant: string | undefined }): HeroVariant {
    if (!Object.values(HeroVariant).includes(variant as HeroVariant)) {
        throw new Error(`${variant} is not part of the enum HeroVariant`);
    }

    return variant as HeroVariant;
}
