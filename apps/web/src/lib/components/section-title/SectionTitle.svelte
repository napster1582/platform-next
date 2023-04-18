<script lang="ts">
    export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h4' | 'h6|';
    export let mode: 'ligth' | 'dark';
</script>

<svelte:element
    this={tag}
    class="mb-12 border-b-4 border-l-4 border-dashed border-yellow-200 p-3 text-4xl font-black"
    class:text-clipped-light={mode === 'ligth'}
    class:text-clipped-dark={mode === 'dark'}
>
    <slot />
</svelte:element>
