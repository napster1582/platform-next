<script lang="ts">
    import { Footer, Header } from '$lib/components';
    import '../theme/styles.css';

    export let data;
</script>

<div class="app">
    <Header data={data.header} />

    <slot />

    <Footer data={null} />
</div>
