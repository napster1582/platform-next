<script lang="ts">
    import { navigating } from '$app/stores';
    import { Footer, Header, Menu } from '$lib/components';
    import { dom, loading } from '$lib/stores';
    import type { LayoutData } from './$types';

    import Icon from '@iconify/svelte';
    import '../app.pcss';

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

        <div class="flex items-center gap-4 p-12">
            <button class="btn">
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
            <button class="btn btn-variant-text">
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
            <button class="btn btn-variant-contained">
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
            <button
                class="btn"
                disabled
            >
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
        </div>

        <div class="dark my-12 flex items-center gap-4 bg-gray-950 p-12">
            <button class="btn">
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
            <button class="btn btn-variant-text">
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
            <button class="btn btn-variant-contained">
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
            <button
                class="btn"
                disabled
            >
                <Icon
                    icon="material-symbols:home-outline-rounded"
                    class="mr-1.5 text-xl"
                />
                Home
            </button>
        </div>
    </main>

    {#if $dom.showFooter}
        <Footer content={footer} />
    {/if}
</div>
