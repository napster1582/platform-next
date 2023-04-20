<script lang="ts">
    import { onDestroy, onMount, tick } from 'svelte';
    import { fade } from 'svelte/transition';
    import CarouselInfo from './CarouselInfo.svelte';
    import CarouselPreviews from './CarouselPreviews.svelte';
    import type { JinenCarouselItem } from './types';

    export let items: JinenCarouselItem[];
    export let autoplay = false;
    export let showPattern = false;
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
    class="carousel carousel-fade-in relative w-full overflow-hidden xl:h-[800px]"
    class:with-pattern={showPattern}
    style={showBackground
        ? `background-image: url(${items[currentIndex].backgroundImageUrl});`
        : ''}
    transition:fade
>
    <CarouselInfo>
        <svelte:fragment slot="indicators">
            {#if showIndicators}
                <ol class="max-h-[500px] overflow-y-clip border-l border-white/20 p-4">
                    {#each items as item, index}
                        <li class="relative -left-7 mb-16 text-white">
                            <button
                                class="rounded-sm border bg-transparent bg-white px-2 py-0.5 font-medium hover:bg-white/70"
                                class:bg-white={index === currentIndex}
                                class:text-stone-900={index === currentIndex}
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

<style lang="postcss">
    .carousel {
        @apply bg-zinc-950 bg-cover bg-center bg-no-repeat bg-blend-soft-light;
    }

    .with-pattern::before {
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23181818' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
    }

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
