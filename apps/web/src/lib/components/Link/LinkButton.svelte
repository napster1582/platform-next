<script lang="ts">
    export let text: string;
    export let isExternal: boolean = false;
</script>

<div
    role="button"
    class="btn"
>
    <slot name="icon" />
    <span>{text}</span>
</div>
