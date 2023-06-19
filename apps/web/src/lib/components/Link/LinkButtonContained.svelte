<script lang="ts">
    export let text = '';
</script>

<div
    role="button"
    class="button button-variant-contained"
>
    <slot name="icon" />
    {text}
</div>
