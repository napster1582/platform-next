<script lang="ts">
    export let text = '';
</script>

<div
    role="button"
    class="button"
>
    <slot name="icon" />
    {text}
</div>
