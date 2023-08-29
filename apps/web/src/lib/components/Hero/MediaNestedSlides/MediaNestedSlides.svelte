<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import { resolveLinkAppearance, resolveLinkHref, resolveResourceSize } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { HeroOptions } from '../types';
	import MediaNestedSlidesInfo from './MediaNestedSlidesInfo.svelte';
	import MediaNestedSlidesPreviews from './MediaNestedSlidesPreviews.svelte';

	export let options: HeroOptions;

	const items = options.source?.mediaNestedSlides?.items ?? [];

	let containerRef: HTMLDivElement | null = null;

	let currentIndex = 0;

	onMount(() => scrollToActive());

	async function goTo(index: number) {
		currentIndex = index;

		scrollToActive();
	}

	function scrollToActive(index?: number) {
		if (containerRef) {
			const activeElement = containerRef.querySelector(
				`[data-slide-index="${index || currentIndex}"]`,
			);

			if (activeElement) {
				activeElement.scrollIntoView({
					behavior: 'smooth',
					inline: 'start',
					block: 'start',
				});
			}
		}
	}

	// TODO: take from CMS
	let tempMode: 'transition' | 'scroll' = 'transition';
</script>

<div
	class={tempMode === 'transition' ? 'overflow-y-hidden xl:h-[700px] 3xl:h-[800px]' : ''}
	bind:this={containerRef}
>
	{#each items as item, index}
		<div
			class="relative h-full w-full overflow-hidden bg-gray-950 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-soft-light"
			style={`background-image: url(${
				typeof item.background === 'object' ? item.background.url : item.background
			});`}
			data-slide-index={index}
		>
			<MediaNestedSlidesInfo>
				<svelte:fragment slot="indicators">
					{#if tempMode === 'transition'}
						<ul
							class="flex w-full gap-6 gap-y-16 overflow-y-auto border-t border-white/10 3xl:mr-12 3xl:h-full 3xl:w-auto 3xl:flex-col 3xl:justify-center 3xl:border-l 3xl:border-t-0"
						>
							{#each items as item, index (item.id)}
								<li class="relative -left-0 text-white">
									<button
										class="{index === currentIndex
											? 'bg-white text-black'
											: 'bg-black text-white'} rounded-token border px-1 py-0.5 text-sm font-medium hover:opacity-80"
										on:click={() => goTo(index)}
									>
										{item.indicator}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
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

			<MediaNestedSlidesPreviews previews={item.previews ?? []} />
		</div>
	{/each}
</div>
