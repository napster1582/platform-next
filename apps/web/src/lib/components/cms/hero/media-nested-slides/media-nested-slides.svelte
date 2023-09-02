<script lang="ts">
	import Icon from '@iconify/svelte';
	import {
		resolveLinkAppearance,
		resolveLinkHref,
		resolveMediaSource,
		resolveResourceSize,
	} from '@jinen/web-resolvers';
	import { onDestroy, onMount } from 'svelte';
	import ProgressBar from '../../../progress-bar/progress-bar.svelte';
	import { Link } from '../../Link';
	import type { HeroOptions } from '../types';
	import MediaNestedSlidesInfo from './media-nested-slides-info.svelte';
	import MediaNestedSlidesPreviews from './media-nested-slides-previews.svelte';

	const DEFAULT_AUTO_TRANSITION_DURATION = 8000 as const;

	export let options: HeroOptions;

	let carouselPreviewsRef: MediaNestedSlidesPreviews | null = null;
	let currentIndex = 0;
	let completedCycles = 0;
	let autoTransitionInterval: ReturnType<typeof setInterval> | null = null;

	$: content = options.source?.mediaNestedSlides;
	$: items = content?.items ?? [];
	$: item = items[currentIndex];
	$: autoTransitionDuration = content?.autoTransitionDuration
		? content.autoTransitionDuration * 1000
		: DEFAULT_AUTO_TRANSITION_DURATION;

	onMount(() => {
		resetAutoTransitions();

		if (!content?.enableInternalAutoTransitions) {
			startAutoTransitions();
		}
	});

	onDestroy(() => {
		if (autoTransitionInterval) {
			clearInterval(autoTransitionInterval);
		}
	});

	function resetAutoTransitions() {
		completedCycles = 0;

		if (autoTransitionInterval) {
			clearInterval(autoTransitionInterval);
			autoTransitionInterval = null;
		}
	}

	function startAutoTransitions() {
		if (content?.enableExternalAutoTransitions) {
			autoTransitionInterval = setInterval(goNext, autoTransitionDuration);
		}
	}

	function handlePreviewsTransitioning(
		event: CustomEvent<{
			currentIndex: number;
			currentDirection: 'back' | 'forth' | null;
			cycleCompleted: boolean;
		}>,
	) {
		console.log(
			event.detail,
			content?.enableExternalAutoTransitions,
			completedCycles,
			content?.internalAutoTransitionCycles,
		);

		if (event.detail.cycleCompleted) {
			completedCycles++;
		}

		if (
			content?.enableExternalAutoTransitions &&
			completedCycles === content?.internalAutoTransitionCycles
		) {
			goNext();
		}
	}

	function goTo(index: number) {
		resetAutoTransitions();
		currentIndex = index;
		carouselPreviewsRef?.resetState();
	}

	function goNext() {
		resetAutoTransitions();
		currentIndex = (currentIndex + 1) % items.length;
		carouselPreviewsRef?.resetState();
	}
</script>

{#if content?.enableExternalAutoTransitions && content?.showExternalProgressIndicator}
	<ProgressBar value={((currentIndex + 1) / items.length) * 100}></ProgressBar>
{/if}

<div
	id="media-nested-slides"
	class="relative h-full overflow-y-hidden xl:h-[800px]"
>
	<div
		class="relative h-full w-full overflow-hidden bg-black/90 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-soft-light"
		style={`background-image: url(${resolveMediaSource({ media: item.background })});`}
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
				autoTransitionsEnabled={content?.enableInternalAutoTransitions ?? false}
				autoTransitionsDuration={autoTransitionDuration}
				on:transitioned={handlePreviewsTransitioning}
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
