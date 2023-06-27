<script lang="ts">
    import { HeroVariant } from '@jinen/cms-annotations';
    import MediaNestedSlides from './MediaNestedSlides/MediaNestedSlides.svelte';
    import type { HeroOptions } from './types';

    export let options: HeroOptions;

    $: Component = (() => {
        switch (options.variant) {
            case HeroVariant.MediaNestedSlides:
                return MediaNestedSlides;
            default:
                console.error(`${options.variant} is not yet supported.`);
                return null;
        }
    })();
</script>

<svelte:component
    this={Component}
    {options}
/>
