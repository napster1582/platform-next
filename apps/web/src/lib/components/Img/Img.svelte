<script lang="ts">
    export let src = '';
    export let alt = '';
    export let loading: 'eager' | 'lazy' = 'eager';
    export let className = '';
</script>

<img
    class="rounded-token w-full {className}"
    {src}
    {alt}
    {loading}
    {...$$restProps}
/>
