<script lang="ts">
    export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h4' | 'h6|';
</script>

<svelte:element
    this={tag}
    class="text-clipped mb-12 border-l-8 border-yellow-200 pl-3 text-4xl font-black"
>
    <slot />
</svelte:element>
