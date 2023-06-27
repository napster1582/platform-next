import { HeroVariant } from '@jinen/cms-annotations';

export function resolveHeroVariant({ variant }: { variant: string | undefined }): HeroVariant {
    if (!variant) {
        return HeroVariant.MediaNestedSlides;
    }

    if (!Object.values(HeroVariant).includes(variant as HeroVariant)) {
        console.error(`${variant} is not part of the enum HeroVariant`);
        return HeroVariant.MediaNestedSlides;
    }

    return variant as HeroVariant;
}
