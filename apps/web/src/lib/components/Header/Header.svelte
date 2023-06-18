<script lang="ts">
    import Icon from '@iconify/svelte';
    import type { Header } from '@jinen/cms-annotations';
    import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
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
                        class="w-4 scale-[3.2]"
                    />
                {/if}
            </div>

            <nav class="flex items-center gap-3">
                {#each content.navbar ?? [] as { link, links }}
                    {#if links.length}
                        <Popover class="popover">
                            <PopoverButton class="popover-button btn btn-variant-text">
                                {link.text}

                                <Icon icon="ph:caret-down" />
                            </PopoverButton>

                            <PopoverPanel
                                class="popover-panel popover-panel-br min-w-[200px]"
                                let:close
                            >
                                <div class="flex flex-col">
                                    {#each links as { link }}
                                        <Link
                                            internalLinkReference={link.internalLinkReference
                                                ?.value}
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
