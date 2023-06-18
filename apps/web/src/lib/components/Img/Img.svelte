<script lang="ts">
    export let src: string = '';
    export let alt: string = '';
    export let loading: 'eager' | 'lazy' = 'eager';
</script>

<img
    {src}
    {alt}
    {loading}
    {...$$restProps}
/>
