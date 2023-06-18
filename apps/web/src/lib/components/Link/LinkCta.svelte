<script lang="ts">
    export let text: string;
    export let isExternal: boolean = false;
</script>

<span class="flex items-center gap-2">
    <slot name="icon" />
    <span>text</span>
</span>
