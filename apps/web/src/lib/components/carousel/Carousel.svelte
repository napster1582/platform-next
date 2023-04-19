<script lang="ts">
    import { onDestroy, onMount, tick } from 'svelte';
    import CarouselInfo from './CarouselInfo.svelte';
    import CarouselPreviews from './CarouselPreviews.svelte';

    import carousel_2 from '$lib/assets/images/TMP_backdrop_0.jpg';
    import carousel_3 from '$lib/assets/images/TMP_backdrop_1.jpg';
    import carousel_1 from '$lib/assets/images/TMP_carousel_1.jpg';

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

    onMount(() => loop && resetInterval());

    onDestroy(() => clearInterval(interval));

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

<div class="relative w-full overflow-hidden bg-black/95 xl:h-[800px]">
    <!-- <CarouselBackground
        src={carousel[currentIndex].background}
        alt="Carousel item"
    /> -->

    <CarouselInfo>
        <svelte:fragment slot="indicators">
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
        </svelte:fragment>

        <svelte:fragment slot="title">
            {carousel[currentIndex].title}
        </svelte:fragment>

        <svelte:fragment slot="description">
            {carousel[currentIndex].description}
        </svelte:fragment>
    </CarouselInfo>

    <CarouselPreviews previews={carousel[currentIndex].previews} />
</div>
