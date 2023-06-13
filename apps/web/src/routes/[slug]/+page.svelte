<script lang="ts">
    import { dom } from 'lib/stores';
    import type { PageData } from './$types';

    export let data: PageData;

    const { page } = data;

    dom.update(() => ({
        showHeader: page.showHeader ?? false,
        showMenu: page.showMenu ?? false,
        showFooter: page.showFooter ?? false,
    }));

    console.log(page);
</script>
