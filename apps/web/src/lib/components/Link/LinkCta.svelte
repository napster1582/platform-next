<script lang="ts">
    export let text = '';
</script>

<span class="flex items-center gap-2">
    <slot name="icon" />
    {text}
</span>
