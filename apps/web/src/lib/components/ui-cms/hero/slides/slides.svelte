<script lang="ts">
	import { LinkAppearance } from '@jinen/cms-annotations';
	import { resolveLinkHref, resolveMediaSource, resolveResourceSize } from '@jinen/web-resolvers';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { onMount } from 'svelte';
	import { Link } from '../../Link';
	import type { HeroOptions } from '../types';
	import { createNestedSlidesSettings } from './createNestedSlidesSettings';
	import { createSlidesSettings } from './createSlidesSettings';
	import { createThumbnailsSettings } from './createThumbnailsSettings';
	import SlidesControls from './slides-controls.svelte';
	import SlidesInfo from './slides-info.svelte';
	import SlidesNested from './slides-nested.svelte';

	import '@splidejs/svelte-splide/css';

	export let options: HeroOptions;

	$: slides = options?.source?.slides?.elements ?? [];

	let slidesRef: Splide;
	let slidesThumbnailsRef: SplideSlide;

	onMount(() => {
		if (slidesRef && slidesThumbnailsRef) {
			slidesRef.sync(slidesThumbnailsRef.splide);
		}
	});
</script>

<Splide
	bind:this={slidesRef}
	hasTrack={false}
	options={createSlidesSettings(options?.source?.slides?.settings)}
>
	<div class="relative">
		<div class="absolute right-0 top-0 z-10 w-full">
			<SlidesControls showAutoplayController={options?.source?.slides?.settings.autoplay} />
		</div>

		<SplideTrack>
			{#each slides as slide}
				<SplideSlide>
					<div
						class="relative h-full cursor-grab bg-black/95 bg-cover bg-center bg-no-repeat pt-16 bg-blend-soft-light active:cursor-grabbing xl:pt-0"
						style={`background-image: url(${resolveMediaSource({
							media: slide.background,
						})});`}
					>
						<div
							class="container grid h-full grid-cols-1 items-center gap-12 py-6 xl:grid-cols-2"
						>
							<SlidesInfo>
								<svelte:fragment slot="title">
									{slide.title}
								</svelte:fragment>

								<svelte:fragment slot="description">
									{slide.description}
								</svelte:fragment>

								<svelte:fragment slot="link">
									{#if slide.hasLink}
										<Link
											class="text-primary-300"
											options={{
												href: resolveLinkHref({
													internal: slide.link?.internalLinkReference?.value,
													external: slide.link?.externalLink,
												}),
												appearance: LinkAppearance.ButtonPrimary,
												indicator: slide.link?.indicator,
												text: slide.link?.text,
												showIcon: slide.link?.showIcon,
												icon: slide.link?.icon,
												iconSize: resolveResourceSize({
													resource: slide.link?.iconSize,
												}),
												openInNewTab: slide.link?.openInNewTab,
											}}
										/>
									{/if}
								</svelte:fragment>
							</SlidesInfo>

							{#if slide.children?.length}
								<div class="overflow-hidden rounded-token">
									<SlidesNested
										elements={slide.children}
										options={createNestedSlidesSettings(slide.childrenSettings)}
									/>
								</div>
							{/if}
						</div>
					</div>
				</SplideSlide>
			{/each}
		</SplideTrack>
	</div>

	<div class="bottom-0 w-full xl:absolute">
		<div class="splide__progress">
			<div class="splide__progress__bar" />
		</div>
	</div>

	<div class="top-[calc(100%-40px)] w-full xl:absolute">
		<div class="thumbnails">
			<Splide
				bind:this={slidesThumbnailsRef}
				options={createThumbnailsSettings(options?.source?.slides?.settings)}
			>
				{#each slides as slide}
					<SplideSlide>
						<div
							class="relative grid h-full place-items-center rounded-token bg-cover bg-center bg-no-repeat"
							style={`background-image: url(${resolveMediaSource({
								media: slide.background,
							})});`}
						>
							<span
								class="line-clamp-1 rounded-token bg-white/30 px-2 py-0.5 text-center font-semibold text-black backdrop-blur-md"
							>
								{slide.indicator}
							</span>
						</div>
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
</Splide>

<style lang="postcss">
	:global(.splide__pagination__page) {
		border-radius: theme('borderRadius.token') !important;
		background-color: theme('backgroundColor.white') !important;

		&:hover {
			@apply scale-150;
		}

		&.is-active {
			@apply scale-150;
			background-color: theme('backgroundColor.primary.300') !important;
		}
	}

	:global(.splide__arrow) {
		border-radius: theme('borderRadius.token') !important;
		background-color: theme('backgroundColor.primary.400') !important;

		&:disabled {
			display: none !important;
		}
	}

	:global(.splide__progress__bar) {
		@apply h-2 rounded-token bg-gradient-to-r from-yellow-500 via-blue-600 to-red-800;
	}

	.thumbnails :global(.splide__slide.is-visible) {
		border: none !important;
		@apply opacity-30;
		@apply transition;

		&:hover {
			@apply scale-105 opacity-60;
		}

		&.is-active {
			@apply opacity-100;
		}
	}
</style>
