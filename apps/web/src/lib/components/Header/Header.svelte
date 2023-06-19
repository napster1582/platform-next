<script lang="ts">
    import { resolveLinkAppearance, resolveLinkHref, resolveResourceSize } from '$lib/utils';
    import Icon from '@iconify/svelte';
    import type { Header } from '@jinen/cms-annotations';
    import { Popover, PopoverButton, PopoverPanel, Transition } from '@rgossiaux/svelte-headlessui';
    import { AppearancePopover } from '../Appearance';
    import { Img } from '../Img';
    import { Link } from '../Link';

    export let content: Header;
</script>

{#if content}
    <header
        class="bg-primary-300/60 dark:bg-primary-800/30 border-token sticky inset-x-0 top-0 z-20 h-[70px] text-black shadow-sm backdrop-blur-xl transition duration-300 ease-linear dark:text-white dark:backdrop-blur-xl"
    >
        <div class="container flex h-full items-center justify-between py-2">
            <div class="flex items-center">
                {#if content.logo && typeof content.logo === 'object'}
                    <Img
                        src={content.logo.url}
                        alt={content.logo.alt}
                        class="mr-8 w-4 scale-[3.2]"
                    />
                {/if}

                <nav class="mx-6 flex items-center gap-x-3">
                    {#each content.navbar ?? [] as { link, links }}
                        {#if links.length}
                            <Popover
                                class="popover"
                                let:open
                            >
                                <PopoverButton class="popover-button button button-variant-text">
                                    {#if link.icon}
                                        <Icon
                                            icon={link.icon}
                                            class="text-{link.iconSize}"
                                        />
                                    {/if}

                                    {link.text}

                                    {#if open}
                                        <Icon icon="ph:caret-up" />
                                    {:else}
                                        <Icon icon="ph:caret-down" />
                                    {/if}
                                </PopoverButton>

                                <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <PopoverPanel
                                        class="popover-panel popover-panel-bl min-w-[200px]"
                                        static
                                        let:close
                                    >
                                        {#each links as { link }}
                                            <Link
                                                class="popover-panel-item"
                                                options={{
                                                    href: resolveLinkHref({
                                                        internal: link.internalLinkReference?.value,
                                                        external: link.externalLink,
                                                    }),
                                                    appearance: resolveLinkAppearance({
                                                        appearance: link.appearance,
                                                    }),
                                                    text: link.text,
                                                    showIcon: link.showIcon,
                                                    icon: link.icon,
                                                    iconSize: resolveResourceSize({
                                                        resource: link.iconSize,
                                                    }),
                                                    openInNewTab: link.openInNewTab,
                                                }}
                                                on:click={() => close(null)}
                                            />
                                        {/each}
                                    </PopoverPanel>
                                </Transition>
                            </Popover>
                        {:else}
                            <Link
                                options={{
                                    href: resolveLinkHref({
                                        internal: link.internalLinkReference?.value,
                                        external: link.externalLink,
                                    }),
                                    appearance: resolveLinkAppearance({
                                        appearance: link.appearance,
                                    }),
                                    text: link.text,
                                    showIcon: link.showIcon,
                                    icon: link.icon,
                                    iconSize: resolveResourceSize({
                                        resource: link.iconSize,
                                    }),
                                    openInNewTab: link.openInNewTab,
                                }}
                            />
                        {/if}
                    {/each}
                </nav>
            </div>

            <div class="flex items-center gap-x-3">
                <AppearancePopover />

                <a
                    href="login"
                    class="button button-variant-contained"
                >
                    <Icon
                        icon="line-md:account"
                        class="text-xl"
                    />

                    <span class="hidden md:inline"> Ingresar </span>
                </a>
            </div>
        </div>
    </header>
{:else}
    Ocurrió un error al intentar cargar el encabezado.
{/if}
