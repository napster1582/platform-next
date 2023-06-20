<script lang="ts">
    export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h4' | 'h6';
</script>

<svelte:element
    this={tag}
    class="jinen-title"
>
    <slot />
</svelte:element>

<style lang="postcss">
    .jinen-title {
        @apply relative;
        @apply font-black;
        @apply from-primary-800 via-primary-400 to-primary-100 bg-gradient-to-br;
        @apply bg-clip-text text-transparent;
        @apply mb-4;
    }

    h1.jinen-title::before {
        /* content: '';
        background-image: url('$lib/assets/svg/0_rope.svg');
        background-repeat: no-repeat; */

        /* @apply h-[340px] w-full;
        @apply absolute inset-x-0 bottom-[-167px]; */
    }
</style>
