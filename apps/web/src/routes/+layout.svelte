<script lang="ts">
    import { navigating } from '$app/stores';
    import { Footer, Header, Menu } from '$lib/components';
    import { domStore, loadingStore } from '$lib/stores';
    import { getSystemTheme, setupThemeEvents } from '$lib/utils/theme';
    import type { LayoutData } from './$types';

    import { themeStore } from '$lib/stores/theme';
    import '../app.pcss';

    export let data: LayoutData;

    const { appearance, header, menu, footer } = data;

    $: $loadingStore = !!$navigating;

    $: themeClass = $themeStore.schema === 'system' ? getSystemTheme() : $themeStore.schema;

    setupThemeEvents();
</script>

<!-- {$themeStore.schema} - {themeClass} -->

<div
    id="app"
    class="flex min-h-screen flex-col {themeClass}"
    data-primary-color={appearance.color ?? 'blue'}
    data-rounded={appearance.borderRadius ?? 'lg'}
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
