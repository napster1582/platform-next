<script lang="ts">
    import carousel_2 from '$lib/assets/images/TMP_backdrop_0.jpg';
    import carousel_3 from '$lib/assets/images/TMP_backdrop_1.jpg';
    import carousel_1 from '$lib/assets/images/TMP_carousel_1.jpg';
    import { Button } from 'flowbite-svelte';
    import { onDestroy, onMount, tick } from 'svelte';

    export let loop = false;
    export let duration = 5000;
    export let carousel: {
        name: string;
        title: string;
        description: string;
        background: string;
        previews: string[];
    }[] = [
        {
            name: 'CPN',
            title: 'Lorem',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem totam accusantium perferendis aspernatur? Doloremque repellat dignissimos asperiores ducimus, laboriosam vero corporis architecto, culpa labore molestias eos! Omnis, ea sit!',
            background: carousel_1,
            previews: [carousel_2, carousel_3, carousel_1, carousel_2],
        },
        {
            name: 'LAD',
            title: 'Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            background: carousel_1,
            previews: [carousel_2],
        },
        {
            name: 'ENAP',
            title: 'Dolor',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem totam accusantium perferendis aspernatur?',
            background: carousel_2,
            previews: [carousel_2, carousel_3],
        },
    ];

    let currentIndex = 0;

    let interval: any = undefined;

    onMount(() => {
        if (loop) {
            resetInterval();
        }
    });

    onDestroy(() => {
        clearInterval(interval);
    });

    function resetInterval() {
        clearInterval(interval);

        interval = setInterval(() => goNext(), duration);
    }

    async function go(index: number) {
        currentIndex = index;

        if (loop) {
            await tick();

            resetInterval();
        }
    }

    async function goBack(options?: { isManuallyTriggered: boolean }) {
        currentIndex -= 1;

        if (currentIndex < 0) {
            currentIndex = carousel.length - 1;
        }

        if (loop && options?.isManuallyTriggered) {
            await tick();

            resetInterval();
        }
    }

    async function goNext(options?: { isManuallyTriggered: boolean }) {
        currentIndex += 1;

        if (currentIndex === carousel.length) {
            currentIndex = 0;
        }

        if (loop && options?.isManuallyTriggered) {
            await tick();
            resetInterval();
        }
    }
</script>

<div class="relative w-full overflow-hidden bg-black/90 xl:h-[800px]">
    <!-- <img
        src={carousel[currentIndex].background}
        alt="Carousel item"
        class="absolute inset-0 h-full w-full object-cover"
        loading="eager"
    /> -->

    <div class="container relative flex h-full w-full flex-wrap gap-y-6">
        <!-- CarouselInfo -->
        <div
            class="flex h-fit w-full items-center py-12 xl:max-w-[50%] xl:self-center xl:pr-6 xl:pt-0"
        >
            <ol class="max-h-[500px] overflow-y-clip border-l border-zinc-800 px-4">
                {#each carousel as item, index}
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

            <div class="ml-12 rounded-full border-b-8 border-r-2 border-dashed border-zinc-800">
                <h1
                    class="text-4xl font-black uppercase text-white sm:text-6xl md:text-8xl xl:text-9xl"
                >
                    {carousel[currentIndex].title}
                </h1>

                <p class="mt-12 text-xl text-white">
                    {carousel[currentIndex].description}
                </p>

                <Button
                    size="xl"
                    class="mt-12"
                >
                    Explorar

                    <span class="icon-[material-symbols--line-end-arrow] ml-8 text-xl" />
                </Button>
            </div>
        </div>
    </div>

    <!-- CarouselPreviews -->
    <div class="xl:absolute xl:right-0 xl:top-1/2 xl:max-w-[45%] xl:-translate-y-1/2">
        <div class="flex cursor-grab flex-nowrap overflow-x-auto xl:gap-12 xl:px-6 xl:py-10">
            {#each carousel[currentIndex].previews as preview, index}
                <div
                    class="w-full shrink-0 xl:w-[350px] 2xl:w-[450px]"
                    class:xl:scale-y-110={index === 0}
                >
                    <button
                        class="group relative h-[450px] w-full shrink-0 overflow-hidden xl:rounded-3xl"
                    >
                        <div
                            class="absolute inset-x-0 top-0 z-10 w-full bg-white/10 py-1 text-lg font-semibold capitalize text-white backdrop-blur"
                        >
                            lorem ipsum
                        </div>

                        <img
                            src={preview}
                            alt=""
                            class="h-full w-full object-cover transition-transform duration-[10s]"
                            class:group-hover:scale-150={index === 0}
                        />
                    </button>
                </div>
            {/each}
        </div>

        <div class="flex items-baseline justify-between px-3 py-3 xl:mt-6 xl:px-6">
            <div class="flex gap-3">
                <button class="carousel-btn">
                    <span class="icon-[material-symbols--line-start-arrow] text-2xl" />
                </button>
                <button class="carousel-btn">
                    <span class="icon-[material-symbols--line-end-arrow] text-2xl" />
                </button>
            </div>

            <div class="text-lg text-white">
                <span>01</span>
                <span>/</span>
                <span>{carousel[currentIndex].previews?.length}</span>
            </div>
        </div>
    </div>

    <!-- <div
            class="flex cursor-grab flex-nowrap overflow-x-auto xl:absolute xl:right-0 xl:top-1/2 xl:max-w-[35%] xl:-translate-y-1/2 xl:gap-x-8 xl:py-10"
        >
            {#each item.previews as preview, index}
                <div
                    class="h-[400px] w-[280px] shrink-0 cursor-pointer overflow-hidden shadow-2xl shadow-black xl:rounded-2xl"
                    class:xl:scale-y-110={index === 0}
                >
                    <img
                        src={preview}
                        alt=""
                        class="h-full object-cover"
                    />
                </div>
            {/each}
        </div> -->

    <!-- 
        <div class="carousel-indicators">
            {#each carousel.images as _, index}
                <button
                    class="carousel-indicator"
                    class:selected={currentIndex === index}
                    on:click={() => (currentIndex = index)}
                />
            {/each}
        </div>

        <button
            class="carousel-btn carousel-btn-prev"
            on:click={() => prev(true)}
        >
            <slot name="icon-prev">
                <span class="icon-[material-symbols--line-start-arrow] text-2xl" />
            </slot>
        </button>

        <button
            class="carousel-btn carousel-btn-next"
            on:click={() => next(true)}
        >
            <slot name="icon-prev">
                <span class="icon-[material-symbols--line-end-arrow] text-2xl" />
            </slot>
        </button> -->
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

    .carousel-btn-prev {
        left: 0;
    }

    .carousel-btn-next {
        right: 0;
    }

    .carousel-indicators {
        position: absolute;
        bottom: 20px;
        left: 50%;
        display: flex;
        gap: 8px;
        transform: translateX(-50%);
    }

    .carousel-indicator {
        width: 8px;
        height: 8px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.6;
        cursor: pointer;
    }

    .carousel-indicator.selected {
        background-color: red;
        opacity: 1;
    }
</style>
