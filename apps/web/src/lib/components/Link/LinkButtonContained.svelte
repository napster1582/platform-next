<script lang="ts">
    export let text: string;
    export let isExternal: boolean = false;
</script>

<div
    role="button"
    class="button button-variant-contained"
>
    <slot name="icon" />
    <span>{text}</span>
</div>
