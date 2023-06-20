<script lang="ts">
    import { Content, Hero, Link, Menu } from '$lib/components';
    import { domStore } from '$lib/stores';
    import {
        resolveHeroVariant,
        resolveLinkAppearance,
        resolveLinkHref,
        resolveResourceSize,
    } from '$lib/utils';
    import type { Menu as CmsMenu, Page as CmsPage } from '@jinen/cms-annotations';
    import type { PageData } from './$types';

    export let data: PageData;

    let menu: CmsMenu | null = null;
    let page: CmsPage | null = null;

    $: {
        menu = data.menu;
        page = data.page;

        domStore.update(() => ({
            showHeader: page?.showHeader ?? false,
            showMenu: page?.showMenu ?? false,
            showFooter: page?.showFooter ?? false,
        }));
    }
</script>

{#if page?.showHero && page?.hero}
    <Hero
        options={{
            variant: resolveHeroVariant({
                variant: page?.hero.variant,
            }),
            settings: {
                autoplay: false,
                duration: 6000,
            },
            source: page?.hero,
        }}
    />
{/if}

{#if $domStore.showMenu && menu}
    <Menu content={menu} />
{/if}

<main class="container">
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
                            {:else if block.blockType === 'link'}
                                <Link
                                    options={{
                                        href: resolveLinkHref({
                                            internal: block.link?.internalLinkReference?.value,
                                            external: block.link?.externalLink,
                                        }),
                                        appearance: resolveLinkAppearance({
                                            appearance: block.link?.appearance,
                                        }),
                                        indicator: block.link?.indicator,
                                        text: block.link?.text,
                                        showIcon: block.link?.showIcon,
                                        icon: block.link?.icon,
                                        iconSize: resolveResourceSize({
                                            resource: block.link?.iconSize,
                                        }),
                                        openInNewTab: block.link?.openInNewTab,
                                    }}
                                />
                            {:else if block.blockType === 'link-group'}
                                <div class="flex flex-col gap-y-6">
                                    {#each block.links as { link }}
                                        <Link
                                            options={{
                                                href: resolveLinkHref({
                                                    internal: link?.internalLinkReference?.value,
                                                    external: link?.externalLink,
                                                }),
                                                appearance: resolveLinkAppearance({
                                                    appearance: link?.appearance,
                                                }),
                                                indicator: link?.indicator,
                                                text: link?.text,
                                                showIcon: link?.showIcon,
                                                icon: link?.icon,
                                                iconSize: resolveResourceSize({
                                                    resource: link?.iconSize,
                                                }),
                                                openInNewTab: link?.openInNewTab,
                                            }}
                                        />
                                    {/each}
                                </div>
                            {:else}
                                {column.width} - {block.blockType}
                            {/if}
                        {/each}
                    </div>
                {/each}
            </section>
        {/if}
    {/each}
</main>
