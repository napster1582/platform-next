<script lang="ts">
    import type { Event } from '@jinen/cms-annotations';

    export let content: string[] | Event[];
</script>

<pre class="overflow-x-auto">
{JSON.stringify(content, null, 2)}
</pre>
