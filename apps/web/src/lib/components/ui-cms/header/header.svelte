<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuTrigger,
	} from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { LinkAppearance, type Header } from '@jinen/cms-annotations';
	import { resolveLinkHref, resolveMediaSource, resolveResourceSize } from '@jinen/web-resolvers';
	import { ThemeCustomizer } from '../../theme-customizer';
	import { Link } from '../Link';

	export let header: Header;

	// TODO: take this flag to the CMS
	const useContainer = false;
</script>

<header
	class="dark fixed inset-x-0 top-0 z-20 h-[65px] bg-primary-700/90 text-white shadow-lg backdrop-blur-md transition-transform duration-300"
>
	<div class={cn('flex h-full items-center justify-between', useContainer ? 'container' : 'px-6')}>
		<div class="flex items-center">
			{#if header.logo && typeof header.logo === 'object'}
				<Link
					class="overflow-hidden"
					options={{
						href: '/',
						appearance: LinkAppearance.NoDesign,
					}}
				>
					<img
						src={resolveMediaSource({ media: header.logo, size: 'thumbnail' })}
						alt={header.logo.alt}
						class="h-10 w-16 object-cover"
					/>
				</Link>
			{/if}

			<nav class="mx-6 flex items-center gap-x-2">
				{#each header.navbar ?? [] as { link, links }}
					{#if links?.length}
						<DropdownMenu positioning={{ placement: 'bottom-start' }}>
							<DropdownMenuTrigger
								asChild
								let:builder
							>
								<Button
									builders={[builder]}
									variant="ghost"
								>
									{#if link.icon}
										<Icon
											icon={link.icon}
											class="text-{link.iconSize}"
										/>
									{/if}

									{link.text}

									{#if builder['data-state'] === 'open'}
										<Icon icon="ph:caret-up" />
									{:else}
										<Icon icon="ph:caret-down" />
									{/if}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent class="w-64">
								<DropdownMenuGroup>
									{#each links ?? [] as { link }}
										<DropdownMenuItem>
											<Link
												class="popover-panel-item"
												options={{
													href: resolveLinkHref({
														internal: link.internalLinkReference?.value,
														external: link.externalLink,
													}),
													appearance: LinkAppearance.NoDesign,
													indicator: link.indicator,
													text: link.text,
													showIcon: link.showIcon,
													icon: link.icon,
													iconSize: resolveResourceSize({
														resource: link.iconSize,
													}),
													openInNewTab: link.openInNewTab,
												}}
											/>
										</DropdownMenuItem>
									{/each}
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					{:else}
						<Link
							options={{
								href: resolveLinkHref({
									internal: link.internalLinkReference?.value,
									external: link.externalLink,
								}),
								appearance: LinkAppearance.ButtonText,
								indicator: link.indicator,
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

		<div class="flex items-center gap-x-2">
			<ThemeCustomizer />

			<Button
				href={env.PUBLIC_CMS_URL + '/admin/login'}
				variant="default"
				aria-label="Ingresar"
			>
				<Icon
					icon="line-md:account"
					class="text-lg"
				/>

				Ingresar
			</Button>
		</div>
	</div>
</header>
