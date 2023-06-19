<script lang="ts">
    export let text: string;
    export let isExternal: boolean = false;
</script>

<div
    role="button"
    class="btn btn-variant-text"
>
    <slot name="icon" />
    <span>{text}</span>
</div>
