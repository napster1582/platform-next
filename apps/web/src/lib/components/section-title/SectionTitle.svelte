<script lang="ts">
    export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h4' | 'h6';
    export let mode: 'ligth' | 'dark';
</script>

<svelte:element
    this={tag}
    class="jinen-title"
    class:text-clipped-light={mode === 'ligth'}
    class:text-clipped-dark={mode === 'dark'}
>
    <slot />
</svelte:element>

<style lang="postcss">
    .jinen-title {
        @apply relative mb-16 p-3;
        @apply text-4xl font-black;
    }

    .jinen-title::before {
        content: '';
        background-image: url('$lib/assets/svg/0_rope.svg');
        background-repeat: no-repeat;

        @apply h-[324px] w-full;
        @apply absolute inset-x-0 bottom-[-167px];
    }
</style>
