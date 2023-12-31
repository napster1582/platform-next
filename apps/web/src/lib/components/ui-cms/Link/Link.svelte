<script lang="ts">
	import Icon from '@iconify/svelte';
	import { ResourceSize } from '@jinen/annotations';
	import { LinkAppearance } from '@jinen/cms-annotations';
	import LinkButtonPrimary from './LinkButtonPrimary.svelte';
	import LinkButtonSecondary from './LinkButtonSecondary.svelte';
	import LinkButtonText from './LinkButtonText.svelte';
	import LinkCta from './LinkCta.svelte';
	import LinkHyperlink from './LinkHyperlink.svelte';
	import LinkTextIcon from './LinkTextIcon.svelte';
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
			case LinkAppearance.NoDesign:
				return null;
			case LinkAppearance.Hyperlink:
				return LinkHyperlink;
			case LinkAppearance.TextIcon:
				return LinkTextIcon;
			case LinkAppearance.Cta:
				return LinkCta;
			case LinkAppearance.ButtonPrimary:
				return LinkButtonPrimary;
			case LinkAppearance.ButtonSecondary:
				return LinkButtonSecondary;
			case LinkAppearance.ButtonText:
				return LinkButtonText;
			default:
				console.error(`${options.appearance} is not yet supported.`, options);
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
	on:click
	{...$$restProps}
>
	{#if options.appearance === LinkAppearance.NoDesign}
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
