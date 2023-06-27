<script lang="ts">
    import Icon from '@iconify/svelte';
    import { ResourceSize } from '@jinen/annotations';
    import { LinkAppearance } from '@jinen/cms-annotations';
    import LinkButton from './LinkButton.svelte';
    import LinkButtonContained from './LinkButtonContained.svelte';
    import LinkButtonText from './LinkButtonText.svelte';
    import LinkCta from './LinkCta.svelte';
    import LinkText from './LinkText.svelte';
    import type { LinkOptions } from './types';

    export let options: LinkOptions;

    const DEFAULT_ICON_SIZE = ResourceSize.Md as const;

    $: isDisabled = !options.href;
    $: isExternal = options.href?.indexOf('://') !== -1;
    $: target = options.openInNewTab ? '_blank' : undefined;
    $: rel = isExternal ? 'noopener noreferrer' : '';
    $: tabindex = isDisabled ? -1 : undefined;
    $: ariaLabel = options.openInNewTab
        ? `Navegar a ${options.href} (abre en nueva pestaña)`
        : `Navegar a ${options.href}`;

    $: Component = (() => {
        switch (options.appearance) {
            case LinkAppearance.Inferred:
                return null;
            case LinkAppearance.Text:
                return LinkText;
            case LinkAppearance.Cta:
                return LinkCta;
            case LinkAppearance.Button:
                return LinkButton;
            case LinkAppearance.ButtonText:
                return LinkButtonText;
            case LinkAppearance.ButtonContained:
                return LinkButtonContained;
            default:
                console.error(`${options.appearance} is not yet supported.`);
                return null;
        }
    })();
</script>

<a
    href={options.href}
    {target}
    {rel}
    {tabindex}
    aria-label={ariaLabel}
    aria-disabled={isDisabled}
    {...$$restProps}
    on:click
>
    {#if options.appearance === LinkAppearance.Inferred}
        {#if $$slots.default}
            <slot />
        {:else}
            {options.text ?? ''}
        {/if}
    {:else}
        <svelte:component
            this={Component}
            {options}
        >
            <svelte:fragment slot="icon">
                {#if options.showIcon}
                    <Icon
                        icon={options.icon ?? ''}
                        class="text-{options.iconSize ?? DEFAULT_ICON_SIZE}"
                    />
                {/if}
            </svelte:fragment>
        </svelte:component>
    {/if}
</a>
