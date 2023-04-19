<script lang="ts">
    import type { JinenCarouselPreview } from './types';

    export let previews: JinenCarouselPreview[];
    export let showIndicators = true;

    let containerRef: HTMLDivElement | null = null;

    let currentIndex = 0;
    let direction = 0;

    export function resetState() {
        currentIndex = 0;

        scrollToActive(0);
    }

    async function go(index: number) {
        currentIndex = index;

        scrollToActive();
    }

    async function goBack() {
        direction = -1;

        currentIndex -= 1;

        if (currentIndex < 0) {
            currentIndex = previews.length - 1;
        }

        scrollToActive();
    }

    async function goNext() {
        direction = 1;

        currentIndex += 1;

        if (currentIndex === previews.length) {
            currentIndex = 0;
        }

        scrollToActive();
    }

    function scrollToActive(index?: number) {
        if (containerRef) {
            const activeElement = containerRef.querySelector(
                `[data-index="${index || currentIndex}"]`,
            );

            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest',
                });
            }
        }
    }
</script>

<div class="xl:absolute xl:right-0 xl:top-1/2 xl:max-w-[45%] xl:-translate-y-1/2">
    <div
        class="flex cursor-grab snap-x snap-mandatory flex-nowrap overflow-x-hidden xl:py-20 xl:pl-6 xl:pr-[100%]"
        bind:this={containerRef}
    >
        {#each previews as preview, index}
            <div
                class="w-full shrink-0 snap-start pl-12 xl:w-[350px] 2xl:w-[450px]"
                class:transition-opacity={currentIndex > index && direction === 1}
                data-index={index}
            >
                <button
                    class="group relative h-[450px] w-full skew-y-6 overflow-hidden shadow-2xl shadow-zinc-950 transition-transform hover:skew-y-3 xl:rounded-3xl"
                    on:click={() => go(index)}
                >
                    <div
                        class="absolute inset-x-0 top-0 z-10 w-full bg-white/10 py-1 text-lg font-semibold capitalize text-white backdrop-blur"
                    >
                        {preview.title}
                    </div>

                    <img
                        src={preview.backgroundImageUrl}
                        alt={preview.backgroundImageAlt}
                        loading="lazy"
                        class="z-0 h-full w-full object-cover transition-transform duration-[10s]"
                    />
                </button>
            </div>
        {/each}
    </div>

    {#if showIndicators}
        <div class="flex items-baseline justify-between px-3 py-3 xl:mt-6 xl:px-6">
            <div class="flex gap-3">
                <button
                    class="carousel-btn"
                    on:click={() => goBack()}
                >
                    <span class="icon-[material-symbols--line-start-arrow] text-2xl" />
                </button>
                <button
                    class="carousel-btn"
                    on:click={() => goNext()}
                >
                    <span class="icon-[material-symbols--line-end-arrow] text-2xl" />
                </button>
            </div>

            <div class="text-lg text-white">
                <span>{currentIndex + 1}</span>
                <span>/</span>
                <span>{previews?.length}</span>
            </div>
        </div>
    {/if}
</div>

<style lang="postcss">
    .carousel-btn {
        padding: 10px;
        border: none;
        border-radius: 360px;
        background-color: rgb(0 0 0 / 50%);
        color: #fff;
        cursor: pointer;
    }

    .carousel-btn:active {
        @apply scale-90;
    }

    .transition-opacity {
        opacity: 0;
        transition-timing-function: ease-in;
        transition-duration: 800ms;
        transition-property: opacity;
    }

    .transition-opacity button {
        transform: skewY(0);
    }
</style>
