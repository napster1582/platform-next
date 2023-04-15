<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import SocialNetworks from '$lib/components/SocialNetworks.svelte';
    import Footer from 'lib/components/Footer.svelte';
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
