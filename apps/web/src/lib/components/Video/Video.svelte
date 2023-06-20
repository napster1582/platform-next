<script lang="ts">
    export let src = '';
    export let autoplay = false;

    $: muted = autoplay;
</script>

<video
    class="rounded-token"
    {src}
    {autoplay}
    {muted}
    controls
    {...$$restProps}
/>
