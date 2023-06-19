<script lang="ts">
    import { navigating } from '$app/stores';
    import { Footer, Header, Menu } from '$lib/components';
    import { domStore, loadingStore } from '$lib/stores';
    import { appearanceStore } from '$lib/stores/appearance';
    import { getSystemTheme, setupAppearanceEvents } from '$lib/utils/appearance';
    import type { LayoutData } from './$types';

    import '../app.pcss';

    export let data: LayoutData;

    const { header, menu, footer } = data;

    $: $loadingStore = !!$navigating;

    $: themeClass = $appearanceStore.theme === 'system' ? getSystemTheme() : $appearanceStore.theme;

    setupAppearanceEvents();
</script>

<div
    id="app"
    class="flex min-h-screen flex-col {themeClass}"
    data-primary-color={$appearanceStore.primaryColor}
    data-font-size={$appearanceStore.fontSize}
    data-rounded={$appearanceStore.borderRadius}
>
    {#if $domStore.showHeader}
        <Header content={header} />
    {/if}

    {#if $domStore.showMenu}
        <Menu content={menu} />
    {/if}

    <main class="container flex-1">
        <slot />
    </main>

    {#if $domStore.showFooter}
        <Footer content={footer} />
    {/if}
</div>
