<script lang="ts">
    export let src: string;
    export let alt: string;
    export let loading: 'eager' | 'lazy' = 'eager';
</script>

<img
    {src}
    {loading}
    {alt}
    class="absolute inset-0 h-full w-full object-cover"
/>
