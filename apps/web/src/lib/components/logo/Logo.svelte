<script lang="ts">
    import logoBicentennial from '$lib/assets/logos/bicentennial.png';
    import logoCednav from '$lib/assets/logos/cednav.png';
    import logoGetUnderway from '$lib/assets/logos/get_underway.png';
    import logoJinen from '$lib/assets/logos/jinen.png';
    import logoNavyHorizontal from '$lib/assets/logos/navy_horizontal.png';
    import logoNavyVertical from '$lib/assets/logos/navy_vertical.png';
    import type { LogoSource } from '../../../../../../pkg/core-shared/src';

    export let src: LogoSource;
    export let loading: 'eager' | 'lazy' = 'eager';
    export let className = 'w-[20px] h-[20px]';

    const staticSourceResolver = new Map<LogoSource, string>([
        ['jinen', logoJinen],
        ['bicentennial', logoBicentennial],
        ['cednav', logoCednav],
        ['get_underway', logoGetUnderway],
        ['navy_horizontal', logoNavyHorizontal],
        ['navy_vertical', logoNavyVertical],
    ]);
</script>

<!-- TODO: use locales -->

<img
    src={staticSourceResolver.get(src)}
    alt="Logotipo de institución/compañía"
    class="object-contain {className}"
    {loading}
/>
