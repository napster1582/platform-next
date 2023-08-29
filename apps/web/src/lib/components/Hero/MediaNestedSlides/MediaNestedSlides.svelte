<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import { resolveLinkAppearance, resolveLinkHref, resolveResourceSize } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { HeroOptions } from '../types';
	import MediaNestedSlidesInfo from './MediaNestedSlidesInfo.svelte';
	import MediaNestedSlidesPreviews from './MediaNestedSlidesPreviews.svelte';

	export let options: HeroOptions;

	let carouselPreviewsRef: MediaNestedSlidesPreviews | null = null;
	let currentIndex = 0;

	$: items = options.source?.mediaNestedSlides?.items ?? [];
	$: item = items[currentIndex];
	$: backgroundImageUrl =
		typeof item.background === 'object' ? item.background.url : item.background;

	async function goTo(index: number) {
		currentIndex = index;
		carouselPreviewsRef?.resetState();
	}
</script>

<div
	id="media-nested-slides"
	class="relative h-full overflow-y-hidden xl:h-[800px]"
>
	<div
		class="relative h-full w-full overflow-hidden bg-black/90 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-soft-light"
		style={`background-image: url(${backgroundImageUrl});`}
	>
		<div class="container grid h-full grid-cols-1 py-6 xl:grid-cols-2">
			<MediaNestedSlidesInfo>
				<svelte:fragment slot="indicators">
					<ul
						class="flex items-center gap-x-2 gap-y-16 border-white/10 3xl:h-full 3xl:w-24 3xl:flex-col 3xl:justify-center 3xl:border-l"
					>
						{#each items as item, index (item.id)}
							<li class="relative text-white 3xl:-left-1/2">
								<button
									class="{index === currentIndex
										? 'bg-white text-black'
										: 'border-primary-900/50 from-black to-primary-950/70 text-white'} inline-flex items-center gap-1 rounded-token border bg-gradient-to-br px-2 py-0.5 text-sm font-semibold hover:opacity-80"
									on:click={() => goTo(index)}
								>
									{#if index === currentIndex}
										<Icon
											icon="material-symbols:directions-boat-rounded"
											class="text-lg text-primary-900"
										/>
									{/if}

									{item.indicator}
								</button>
							</li>
						{/each}
					</ul>
				</svelte:fragment>

				<svelte:fragment slot="title">
					{item.title}
				</svelte:fragment>

				<svelte:fragment slot="description">
					{item.description}
				</svelte:fragment>

				<svelte:fragment slot="link">
					<Link
						class="text-primary-300"
						options={{
							href: resolveLinkHref({
								internal: item.link?.internalLinkReference?.value,
								external: item.link?.externalLink,
							}),
							appearance: resolveLinkAppearance({
								appearance: item.link?.appearance,
							}),
							indicator: item.link?.indicator,
							text: item.link?.text,
							showIcon: item.link?.showIcon,
							icon: item.link?.icon,
							iconSize: resolveResourceSize({
								resource: item.link?.iconSize,
							}),
							openInNewTab: item.link?.openInNewTab,
						}}
					/>
				</svelte:fragment>
			</MediaNestedSlidesInfo>

			<MediaNestedSlidesPreviews
				bind:this={carouselPreviewsRef}
				previews={item.previews ?? []}
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	#media-nested-slides {
		@apply relative;
	}

	#media-nested-slides::after {
		@apply h-12;
		@apply pointer-events-none;
		@apply absolute inset-x-0 bottom-0;

		content: '';
		background: linear-gradient(
			180deg,
			theme('colors.transparent') 0,
			theme('backgroundColor.token-primary')
		);
	}
</style>
