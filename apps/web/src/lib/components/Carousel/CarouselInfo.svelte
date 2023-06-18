<script lang="ts">
    // import { Button } from 'flowbite-svelte';
</script>

<div class="container relative flex h-full w-full flex-wrap gap-y-6">
    <div class="flex h-fit w-full items-center py-12 xl:max-w-[55%] xl:self-center xl:pr-6 xl:pt-0">
        <slot name="indicators" />

        <div class="border-separate rounded-full border-b-8 border-dashed border-gray-800">
            <h1
                class="text-2xl font-black uppercase text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
                <slot name="title" />
            </h1>

            <p class="mt-12 text-xl text-white">
                <slot name="description" />
            </p>
            <!-- 
            <Button
                size="xl"
                class="mt-12"
            >
                Explorar

                <span class="icon-[material-symbols--line-end-arrow] ml-8 text-xl" />
            </Button> -->
        </div>
    </div>
</div>
