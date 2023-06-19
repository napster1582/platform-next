<script lang="ts">
    export let text = '';
</script>

<div
    role="button"
    class="button button-variant-text"
>
    <slot name="icon" />
    {text}
</div>
