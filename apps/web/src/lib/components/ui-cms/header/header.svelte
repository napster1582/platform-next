<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { LinkAppearance, type Header } from '@jinen/cms-annotations';
	import { resolveLinkHref, resolveMediaSource, resolveResourceSize } from '@jinen/web-resolvers';
	import { Popover, PopoverButton, PopoverPanel, Transition } from '@rgossiaux/svelte-headlessui';
	import { Img } from '../../img';
	import { ThemeCustomizer } from '../../theme-customizer';
	import { Link } from '../Link';

	export let content: Header;

	// TODO: take this flag to the CMS
	const useContainer = false;
</script>

<header
	class="dark fixed inset-x-0 top-0 z-20 h-[65px] bg-primary-700/90 text-white shadow-lg backdrop-blur-md transition-transform duration-300"
>
	<div class={cn('flex h-full items-center justify-between', useContainer ? 'container' : 'px-6')}>
		<div class="flex items-center">
			{#if content.logo && typeof content.logo === 'object'}
				<Link
					class="overflow-hidden"
					options={{
						href: '/',
						appearance: LinkAppearance.NoDesign,
					}}
				>
					<Img
						src={resolveMediaSource({ media: content.logo, size: 'thumbnail' })}
						alt={content.logo.alt}
						class="w-12"
					/>
				</Link>
			{/if}

			<nav class="mx-6 flex items-center gap-x-2">
				{#each content.navbar ?? [] as { link, links }}
					{#if links?.length}
						<Popover
							class="popover"
							let:open
						>
							<PopoverButton class="popover-button button button-text">
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
