<script lang="ts">
    import { navigating } from '$app/stores';
    import { Footer, Header, LoadingOverlay } from '$lib/components';
    import { domStore, loadingStore } from '$lib/stores';
    import { appearanceStore } from '$lib/stores/appearance';
    import { getSystemTheme, setupAppearanceEvents } from '$lib/utils/appearance';
    import type { LayoutData } from './$types';

    import '../app.pcss';

    export let data: LayoutData;

    const { header, footer } = data;

    $: $loadingStore = !!$navigating;

    $: themeClass = $appearanceStore.theme === 'system' ? getSystemTheme() : $appearanceStore.theme;

    setupAppearanceEvents();
</script>

{#if $loadingStore}
    <LoadingOverlay />
{/if}

<div
    id="app"
    class="flex min-h-screen flex-col {themeClass}"
    data-primary-color={$appearanceStore.primaryColor}
    data-font-size={$appearanceStore.fontSize}
    data-rounded={$appearanceStore.borderRadius}
>
    {#if $domStore.showHeader && header}
        <Header content={header} />
    {/if}

    <div
        class="flex-1"
        class:mt-[70px]={$domStore.showHeader && header}
    >
        <slot />
    </div>

    {#if $domStore.showFooter && footer}
        <Footer content={footer} />
    {/if}
</div>
