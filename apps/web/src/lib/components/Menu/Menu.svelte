<script lang="ts">
    import { resolveLinkHref } from '$lib/utils';
    import { LinkAppearance, type Menu } from '@jinen/cms-annotations';
    import { Link } from '../Link';
    import MenuItem from './MenuItem.svelte';

    export let content: Menu;
</script>

<nav
    id="jinen-menu"
    class="my-12 flex flex-wrap items-center justify-center gap-24 px-6"
>
    {#each content.items ?? [] as item}
        <Link
            options={{
                href: resolveLinkHref({
                    internal: item.link.internalLinkReference?.value,
                    external: item.link.externalLink,
                }),
                appearance: LinkAppearance.Inferred,
                openInNewTab: item.link.openInNewTab,
            }}
        >
            <MenuItem>
                <svelte:fragment slot="title">
                    {item.title ?? ''}
                </svelte:fragment>

                <svelte:fragment slot="description">
                    {item.description ?? ''}
                </svelte:fragment>

                <svelte:fragment slot="icon">
                    {#if item.icon && typeof item.icon === 'object'}
                        <img
                            src={item.icon?.url}
                            alt={item.icon?.alt}
                            class="w-24"
                        />
                    {/if}
                </svelte:fragment>
            </MenuItem>
        </Link>
    {/each}
</nav>
