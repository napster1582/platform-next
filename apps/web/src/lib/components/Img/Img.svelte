<script lang="ts">
    export let src = '';
    export let alt = '';
    export let loading: 'eager' | 'lazy' = 'eager';
</script>

<img
    {src}
    {alt}
    {loading}
    {...$$restProps}
/>
