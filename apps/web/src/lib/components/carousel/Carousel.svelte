<script lang="ts">
    import { onDestroy, onMount, tick } from 'svelte';
    import { fade } from 'svelte/transition';
    import CarouselBackground from './CarouselBackground.svelte';
    import CarouselInfo from './CarouselInfo.svelte';
    import CarouselPreviews from './CarouselPreviews.svelte';
    import type { JinenCarouselItem } from './types';

    export let items: JinenCarouselItem[];
    export let autoplay = false;
    export let showBackground = false;
    export let showIndicators = true;
    export let showPreviews = true;
    export let duration = 5000;

    let carouselPreviewsRef: CarouselPreviews | null = null;

    let currentIndex = 0;

    let interval: any | null = null;

    onMount(() => autoplay && resetInterval());

    onDestroy(() => clearInterval(interval));

    function resetInterval() {
        clearInterval(interval);

        interval = setInterval(() => goNext(), duration);
    }

    async function go(index: number) {
        currentIndex = index;

        if (autoplay) {
            await tick();

            resetInterval();
        }

        carouselPreviewsRef?.resetState();
    }

    async function goNext(options?: { isManuallyTriggered: boolean }) {
        currentIndex += 1;

        if (currentIndex === items.length) {
            currentIndex = 0;
        }

        if (autoplay && options?.isManuallyTriggered) {
            await tick();

            resetInterval();
        }

        carouselPreviewsRef?.resetState();
    }
</script>

<div
    class="carousel-fade-in relative w-full overflow-hidden bg-black/90 xl:h-[800px]"
    transition:fade
>
    {#if showBackground}
        <CarouselBackground
            src={items[currentIndex].backgroundImageUrl}
            alt={items[currentIndex].backgroundImageAlt}
        />
    {/if}

    <CarouselInfo>
        <svelte:fragment slot="indicators">
            {#if showIndicators}
                <ol class="max-h-[500px] overflow-y-clip border-l border-zinc-800 px-4">
                    {#each items as item, index}
                        <li class="mb-16 text-white">
                            <button
                                class="rounded-xl border border-white/10 bg-black/40 px-3 py-1.5 text-sm hover:bg-black/20"
                                on:click={() => go(index)}
                            >
                                {item.name}
                            </button>
                        </li>
                    {/each}
                </ol>
            {/if}
        </svelte:fragment>

        <svelte:fragment slot="title">
            {items[currentIndex].title}
        </svelte:fragment>

        <svelte:fragment slot="description">
            {items[currentIndex].description}
        </svelte:fragment>
    </CarouselInfo>

    {#if showPreviews}
        <CarouselPreviews
            bind:this={carouselPreviewsRef}
            previews={items[currentIndex].previews}
            {showIndicators}
        />
    {/if}
</div>

<style>
    .carousel-fade-in {
        animation: fade-in 300ms;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>
