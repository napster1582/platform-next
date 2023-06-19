<script lang="ts">
    import Icon, { loadIcon, type IconifyIcon } from '@iconify/svelte';
    import { ResourceSize } from '@jinen/annotations';
    import { LinkAppearance, LinkType, type Page } from '@jinen/cms-annotations';
    import LinkButton from './LinkButton.svelte';
    import LinkButtonContained from './LinkButtonContained.svelte';
    import LinkButtonText from './LinkButtonText.svelte';
    import LinkCta from './LinkCta.svelte';
    import LinkText from './LinkText.svelte';

    export let internalLinkReference: Page;
    export let externalLink: string = '';
    export let text: string = '';
    export let type: LinkType = LinkType.External;
    export let appearance: LinkAppearance = LinkAppearance.Text;
    export let showIcon: boolean = false;
    export let icon: string = '';
    export let iconSize: ResourceSize = ResourceSize.Md;
    export let openInNewTab: boolean = false;
    export let disabled: boolean = false;
    export let showArrowForExternalLink: boolean = true;

    let iconData: Required<IconifyIcon> | null = null;

    $: href = type === LinkType.External ? externalLink : internalLinkReference?.slug;
    $: target = openInNewTab ? '_blank' : undefined;
    $: rel = type === LinkType.External ? 'noopener noreferrer' : '';
    $: icon &&
        loadIcon(icon)
            .then((data) => {
                console.log(`Icon ${icon} has been loaded and is ready to be renderered.`);
                iconData = data;
            })
            .catch(() => {
                console.log(`Icon ${icon} does not exist.`);
            });
</script>

<a
    {href}
    {target}
    {rel}
    on:click
    {...$$restProps}
    aria-disabled={disabled ? 'true' : undefined}
    tabIndex={disabled ? -1 : undefined}
>
    {#if appearance === LinkAppearance.Inferred}
        {#if $$slots.default}
            <slot />
        {:else}
            {text}
        {/if}
    {:else if appearance === LinkAppearance.Text}
        <LinkText
            {text}
            isExternal={type === LinkType.External}
            {showArrowForExternalLink}
        >
            <svelte:fragment slot="icon">
                {#if showIcon && iconData}
                    <Icon
                        icon={iconData}
                        class="text-{iconSize}"
                    />
                {/if}
            </svelte:fragment>
        </LinkText>
    {:else if appearance === LinkAppearance.Cta}
        <LinkCta
            {text}
            isExternal={type === LinkType.External}
        >
            <svelte:fragment slot="icon">
                {#if showIcon && iconData}
                    <Icon
                        icon={iconData}
                        class="text-{iconSize}"
                    />
                {/if}
            </svelte:fragment>
        </LinkCta>
    {:else if appearance === LinkAppearance.Button}
        <LinkButton
            {text}
            isExternal={type === LinkType.External}
        >
            <svelte:fragment slot="icon">
                {#if showIcon && iconData}
                    <Icon
                        icon={iconData}
                        class="text-{iconSize}"
                    />
                {/if}
            </svelte:fragment>
        </LinkButton>
    {:else if appearance === LinkAppearance.ButtonText}
        <LinkButtonText
            {text}
            isExternal={type === LinkType.External}
        >
            <svelte:fragment slot="icon">
                {#if showIcon && iconData}
                    <Icon
                        icon={iconData}
                        class="text-{iconSize}"
                    />
                {/if}
            </svelte:fragment>
        </LinkButtonText>
    {:else if appearance === LinkAppearance.ButtonContained}
        <LinkButtonContained
            {text}
            isExternal={type === LinkType.External}
        >
            <svelte:fragment slot="icon">
                {#if showIcon && iconData}
                    <Icon
                        icon={iconData}
                        class="text-{iconSize}"
                    />
                {/if}
            </svelte:fragment>
        </LinkButtonContained>
    {/if}
</a>
