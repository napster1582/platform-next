<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import { resolveLinkAppearance, resolveLinkHref, resolveResourceSize } from '$lib/utils';
	import { onDestroy, onMount, tick } from 'svelte';
	import type { HeroOptions } from '../types';
	import MediaNestedSlidesInfo from './MediaNestedSlidesInfo.svelte';
	import MediaNestedSlidesPreviews from './MediaNestedSlidesPreviews.svelte';

	export let options: HeroOptions;

	const items = options.source?.mediaNestedSlides?.items ?? [];

	let carouselPreviewsRef: MediaNestedSlidesPreviews | null = null;

	let currentIndex = 0;

	let interval: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		options.settings.autoplay && resetInterval();
	});

	onDestroy(() => {
		clearInterval(interval as ReturnType<typeof setInterval>);
	});

	const resetInterval = () => {
		clearInterval(interval as ReturnType<typeof setInterval>);

		interval = setInterval(() => goNext(), options.settings.duration);
	};

	const go = async (index: number) => {
		currentIndex = index;

		if (options.settings.autoplay) {
			await tick();

			resetInterval();
		}

		carouselPreviewsRef?.resetState();
	};

	const goNext = async (params?: { isManuallyTriggered: boolean }) => {
		currentIndex += 1;

		if (currentIndex === items.length) {
			currentIndex = 0;
		}

		if (options.settings.autoplay && params?.isManuallyTriggered) {
			await tick();

			resetInterval();
		}

		carouselPreviewsRef?.resetState();
	};

	let resolvedBackground = '';

	$: {
		const { background } = items[currentIndex] ?? {};

		if (typeof background === 'object') {
			resolvedBackground = background.url ?? '';
		} else {
			resolvedBackground = background ?? '';
		}
	}
</script>

<div
	class="relative w-full overflow-hidden bg-gray-950 bg-cover bg-center bg-no-repeat bg-blend-soft-light xl:h-[700px] 3xl:h-[800px]"
	style={`background-image: url(${resolvedBackground});`}
>
	<MediaNestedSlidesInfo>
		<svelte:fragment slot="indicators">
			<ul
				class="flex w-full gap-6 gap-y-16 overflow-y-auto border-t border-white/10 3xl:mr-12 3xl:h-full 3xl:w-auto 3xl:flex-col 3xl:justify-center 3xl:border-l"
			>
				{#each items as item, index}
					<li class="relative -left-0 text-white">
						<button
							class="{index === currentIndex
								? 'bg-white text-black'
								: 'bg-black text-white'} rounded-token border px-1 py-0.5 text-sm font-medium hover:opacity-80"
							on:click={() => go(index)}
						>
							{item.indicator}
						</button>
					</li>
				{/each}
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="title">
			{items[currentIndex].title}
		</svelte:fragment>

		<svelte:fragment slot="description">
			{items[currentIndex].description}
		</svelte:fragment>

		<svelte:fragment slot="link">
			<Link
				class="text-primary-300"
				options={{
					href: resolveLinkHref({
						internal: items[currentIndex].link?.internalLinkReference?.value,
						external: items[currentIndex].link?.externalLink,
					}),
					appearance: resolveLinkAppearance({
						appearance: items[currentIndex].link?.appearance,
					}),
					indicator: items[currentIndex].link?.indicator,
					text: items[currentIndex].link?.text,
					showIcon: items[currentIndex].link?.showIcon,
					icon: items[currentIndex].link?.icon,
					iconSize: resolveResourceSize({ resource: items[currentIndex].link?.iconSize }),
					openInNewTab: items[currentIndex].link?.openInNewTab,
				}}
			/>
		</svelte:fragment>
	</MediaNestedSlidesInfo>

	<MediaNestedSlidesPreviews
		bind:this={carouselPreviewsRef}
		previews={items[currentIndex].previews ?? []}
	/>
</div>
