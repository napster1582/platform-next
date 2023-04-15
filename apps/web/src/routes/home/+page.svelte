<script lang="ts">
    import { Footer, Header, Menu, SocialNetworks } from 'lib/components';
    import Hero from './Hero.svelte';
</script>

<main>
    <Header />
    <Hero />

    <div class="container">
        <Menu />
        <main>sections</main>
        <SocialNetworks />
    </div>

    <Footer />
</main>
