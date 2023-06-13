<script lang="ts">
    import { navigating } from '$app/stores';
    import { Footer, Header, LoadingOverlay, Menu } from '$lib/components';
    import { dom, loading } from 'lib/stores';
    import '../theme/styles.css';
    import type { LayoutData } from './$types';

    export let data: LayoutData;

    const { appearance, header, menu, footer } = data;

    $: $loading = !!$navigating;
</script>

<div
    id="app"
    class="flex min-h-screen flex-col"
    data-primary-color={appearance.color ?? 'blue'}
    data-rounded={appearance.borderRadius ?? 'lg'}
>
    {#if $dom.showHeader}
        <Header content={header} />
    {/if}

    {#if $dom.showMenu}
        <Menu content={menu} />
    {/if}

    <main class="container flex-1">
        <slot />
    </main>

    {#if $dom.showFooter}
        <Footer content={footer} />
    {/if}
</div>

{#if $loading}
    <LoadingOverlay />
{/if}
