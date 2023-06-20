<script lang="ts">
    import type { LinkOptions } from './types';

    export let options: LinkOptions;
</script>

<div
    role="button"
    class="button button-variant-contained"
>
    <slot name="icon" />

    {options?.text ?? ''}
</div>
