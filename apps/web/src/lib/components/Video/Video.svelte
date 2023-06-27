<script lang="ts">
    export let src = '';
    export let autoplay = false;
    export let className = '';

    $: muted = autoplay;
</script>

<video
    class="rounded-token w-full {className}"
    {src}
    {autoplay}
    {muted}
    controls
    {...$$restProps}
/>
