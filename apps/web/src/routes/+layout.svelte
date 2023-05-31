<script lang="ts">
    import { Footer, Header } from '$lib/components';
    import '../theme/styles.css';
</script>

<div class="app">
    <Header />

    <slot />

    <Footer data={null} />
</div>
