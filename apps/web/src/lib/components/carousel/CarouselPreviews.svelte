<script lang="ts">
    export let previews: any = [];

    let currentIndex = 0;

    async function go(index: number) {
        currentIndex = index;
    }

    async function goBack() {
        currentIndex -= 1;

        if (currentIndex < 0) {
            currentIndex = previews.length - 1;
        }
    }

    async function goNext() {
        currentIndex += 1;

        if (currentIndex === previews.length) {
            currentIndex = 0;
        }
    }
</script>

<div class="xl:absolute xl:right-0 xl:top-1/2 xl:max-w-[45%] xl:-translate-y-1/2">
    <div class="flex cursor-grab flex-nowrap overflow-x-auto xl:gap-12 xl:px-6 xl:py-10">
        {#each previews as preview, index}
            <div
                class="w-full shrink-0 xl:w-[350px] 2xl:w-[450px]"
                class:xl:scale-y-110={index === 0}
            >
                <button
                    class="group relative h-[450px] w-full shrink-0 overflow-hidden xl:rounded-3xl"
                    on:click={() => go(index)}
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
</style>
