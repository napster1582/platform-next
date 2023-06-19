<script lang="ts">
    import { Content } from '$lib/components';
    import { domStore } from '$lib/stores';
    import type { Page } from '@jinen/cms-annotations';
    import type { PageData } from './$types';

    export let data: PageData;

    let page: Page | null = null;

    $: {
        page = data.page;

        domStore.update(() => ({
            showHeader: page?.showHeader ?? false,
            showMenu: page?.showMenu ?? false,
            showFooter: page?.showFooter ?? false,
        }));
    }
</script>

{#each page?.sections ?? [] as section}
    {#if section}
        <section
            class="my-12 grid grid-cols-12 gap-4"
            class:min-h-screen={section.fullSize}
        >
            {#each section.columns ?? [] as column}
                <div
                    class="border-primary-600 rounded-token border max-md:col-span-12 col-span-{column.width}"
                >
                    {#each column.blocks ?? [] as block}
                        {#if block.blockType === 'content'}
                            <Content nodes={block.content?.richText ?? []} />
                        {:else}
                            {column.width}
                        {/if}
                    {/each}
                </div>
            {/each}
        </section>
    {/if}
{/each}
