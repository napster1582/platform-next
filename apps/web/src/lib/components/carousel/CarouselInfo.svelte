<script lang="ts">
    import { Button } from 'flowbite-svelte';
</script>

<div class="container relative flex h-full w-full flex-wrap gap-y-6">
    <div class="flex h-fit w-full items-center py-12 xl:max-w-[50%] xl:self-center xl:pr-6 xl:pt-0">
        <slot name="indicators" />

        <div class="ml-12 rounded-full border-b-8 border-r-2 border-dashed border-zinc-800">
            <h1
                class="text-4xl font-black uppercase text-white sm:text-6xl md:text-8xl xl:text-9xl"
            >
                <slot name="title" />
            </h1>

            <p class="mt-12 text-xl text-white">
                <slot name="description" />
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
