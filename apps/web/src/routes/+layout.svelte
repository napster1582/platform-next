<script lang="ts">
    import { navigating } from '$app/stores';
    import { Footer, Header, LoadingOverlay, Menu } from '$lib/components';
    import { dom, loading } from 'lib/stores';
    import '../theme/styles.css';
    import type { LayoutData } from './$types';

    export let data: LayoutData;

    $: $loading = !!$navigating;
</script>

<div class="flex min-h-screen flex-col">
    {#if $dom.showHeader}
        <Header content={data.header} />
    {/if}

    {#if $dom.showMenu}
        <Menu content={data.menu} />
    {/if}

    <main class="container flex-1">
        <slot />
    </main>

    {#if $dom.showFooter}
        <Footer content={data.footer} />
    {/if}
</div>

{#if $loading}
    <LoadingOverlay />
{/if}
