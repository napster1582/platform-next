<script lang="ts">
	import { LinkAppearance, type Menu } from '@jinen/cms-annotations';
	import { resolveLinkHref, resolveMediaSource } from '@jinen/web-resolvers';
	import { Link } from '../Link';
	import MenuItem from './menu-item.svelte';

	export let menu: Menu;
</script>

<nav
	id="jinen-menu"
	class="my-12 flex flex-wrap items-center justify-center gap-24 px-6"
>
	{#each menu.items ?? [] as item}
		<Link
			options={{
				href: resolveLinkHref({
					internal: item.link.internalLinkReference?.value,
					external: item.link.externalLink,
				}),
				appearance: LinkAppearance.NoDesign,
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
							src={resolveMediaSource({ media: item.icon })}
							alt={item.icon?.alt}
							class="w-24"
						/>
					{/if}
				</svelte:fragment>
			</MenuItem>
		</Link>
	{/each}
</nav>
