<script lang="ts">
    import Icon from '@iconify/svelte';
    import type { Header } from '@jinen/cms-annotations';
    import { Popover, PopoverButton, PopoverPanel, Transition } from '@rgossiaux/svelte-headlessui';
    import { AppearancePopover } from '../Appearance';
    import { Img } from '../Img';
    import { Link } from '../Link';

    export let content: Header;
</script>

{#if content}
    <header id="jinen-header">
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
                                <PopoverButton class="popover-button btn">
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
                                        <div class="flex flex-col">
                                            {#each links as { link }}
                                                <Link
                                                    internalLinkReference={link
                                                        .internalLinkReference?.value}
                                                    externalLink={link.externalLink}
                                                    text={link.text}
                                                    type={link.type}
                                                    appearance={link.appearance}
                                                    showIcon={link.showIcon}
                                                    icon={link.icon}
                                                    iconSize={link.iconSize}
                                                    openInNewTab={link.openInNewTab}
                                                    class="popover-panel-item"
                                                    on:click={() => close()}
                                                />
                                            {/each}
                                        </div>
                                    </PopoverPanel>
                                </Transition>
                            </Popover>
                        {:else}
                            <Link
                                internalLinkReference={link.internalLinkReference?.value}
                                externalLink={link.externalLink}
                                text={link.text}
                                type={link.type}
                                appearance={link.appearance}
                                showIcon={link.showIcon}
                                icon={link.icon}
                                iconSize={link.iconSize}
                                openInNewTab={link.openInNewTab}
                            />
                        {/if}
                    {/each}
                </nav>

                <div />
            </div>

            <div class="flex items-center gap-x-3">
                <AppearancePopover />

                <a
                    href="login"
                    class="btn btn-variant-contained"
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

<style lang="postcss">
    #jinen-header {
        @apply h-[70px];
        @apply bg-primary-300/60 dark:bg-primary-800/30 text-black backdrop-blur-xl dark:text-white dark:backdrop-blur-xl;
        @apply sticky inset-x-0 top-0 z-20;
        @apply border-token shadow-sm;
        @apply transition duration-300 ease-linear;
    }
</style>
