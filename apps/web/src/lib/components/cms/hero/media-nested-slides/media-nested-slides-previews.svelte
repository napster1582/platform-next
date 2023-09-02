<script lang="ts">
	import Icon from '@iconify/svelte';
	import { resolveMediaSource } from '@jinen/web-resolvers';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import type { HeroMediaNestedSlidesPreview } from '../types';

	export let previews: HeroMediaNestedSlidesPreview[];
	export let autoTransitionsEnabled: boolean;
	export let autoTransitionsDuration: number;

	const dispatch = createEventDispatcher<{
		transitioned: {
			currentIndex: number;
			currentDirection: 'back' | 'forth' | null;
			cycleCompleted: boolean;
		};
	}>();

	let containerRef: HTMLDivElement | null = null;
	let currentIndex = 0;
	let currentDirection: 'back' | 'forth' | null = null;
	let autoTransitionInterval: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		resetAutoTransitions();
		scrollToActive();
	});

	onDestroy(() => {
		if (autoTransitionInterval) {
			clearInterval(autoTransitionInterval);
		}
	});

	export function resetAutoTransitions() {
		if (autoTransitionsEnabled) {
			if (autoTransitionInterval) {
				clearInterval(autoTransitionInterval);
			}

			autoTransitionInterval = setInterval(goNext, autoTransitionsDuration);
		}
	}

	export function resetState() {
		currentIndex = 0;
		currentDirection = null;

		scrollToActive();
		resetAutoTransitions();
	}

	function goTo(index: number) {
		currentIndex = index;
		currentDirection = null;

		scrollToActive();
		resetAutoTransitions();
	}

	function goBack() {
		currentIndex--;
		currentDirection = 'back';

		if (currentIndex < 0) {
			currentIndex = previews.length - 1;
		}

		scrollToActive();
		resetAutoTransitions();
	}

	function goNext() {
		currentIndex++;
		currentDirection = 'forth';

		if (currentIndex === previews.length) {
			currentIndex = 0;
		}

		scrollToActive();
		resetAutoTransitions();
	}

	function scrollToActive() {
		if (containerRef) {
			const activeElement = containerRef.querySelector(`[data-preview-index="${currentIndex}"]`);

			if (activeElement) {
				activeElement.scrollIntoView({
					behavior: 'smooth',
					inline: 'start',
					block: 'nearest',
				});
			}

			dispatch('transitioned', {
				currentIndex,
				currentDirection,
				cycleCompleted: currentIndex === 0 && currentDirection === 'forth',
			});
		}
	}
</script>

{#if previews?.length}
	<div class="mt-6 flex h-full flex-col justify-center xl:absolute xl:right-0 xl:top-0 xl:max-w-[45%]">
		<div
			class="flex snap-x snap-mandatory flex-nowrap overflow-x-hidden xl:py-20 xl:pr-[45%]"
			bind:this={containerRef}
		>
			{#each previews as preview, index}
				<div
					class="h-full w-full shrink-0 snap-start xl:w-[450px] xl:px-2"
					class:xl:opacity-0={index < currentIndex && currentDirection === 'forth'}
					title={preview.title}
					data-preview-index={index}
				>
					<button
						class="group relative h-[300px] w-full cursor-default overflow-hidden rounded-token shadow-md grayscale-[50%] transition xl:h-[400px] xl:skew-y-6 xl:hover:skew-y-0"
						on:click={() => goTo(index)}
					>
						<div
							class="absolute inset-x-0 top-0 line-clamp-1 w-full bg-white/5 py-1 text-lg font-semibold capitalize text-white backdrop-blur-xl"
						>
							{preview.title}
						</div>

						<img
							src={resolveMediaSource({
								media: preview.background,
								size: 'thumbnail',
							})}
							alt="Carousel preview item"
							loading="lazy"
							class="h-full w-full object-cover"
						/>
					</button>
				</div>
			{/each}
		</div>

		<div
			class="flex items-center justify-between rounded-token bg-white/5 px-3 py-3 backdrop-blur-md xl:mt-6 xl:bg-transparent xl:px-6"
		>
			<div class="flex gap-3">
				{#if previews.length > 1}
					<button
						class="rounded-token bg-white/30 p-2 font-medium text-white hover:bg-white/70 active:scale-90"
						aria-label="Vista previa anterior"
						on:click={() => goBack()}
					>
						<Icon
							icon="line-md:arrow-left"
							class="text-2xl"
						/>
					</button>

					<button
						class="rounded-token bg-white/30 px-2 font-medium text-white hover:bg-white/70 active:scale-90"
						aria-label="Vista previa siguiente"
						on:click={() => goNext()}
					>
						<Icon
							icon="line-md:arrow-right"
							class="text-2xl"
						/>
					</button>
				{/if}
			</div>

			<div class="text-lg text-white">
				<span>{currentIndex + 1}</span>
				<span>/</span>
				<span>{previews?.length}</span>
			</div>
		</div>
	</div>
{/if}
