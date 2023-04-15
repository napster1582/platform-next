<script lang="ts">
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Hero from './Hero.svelte';
    import Menu from './Menu.svelte';
    import SocialNetworks from './SocialNetworks.svelte';
</script>

<main>
    <Header />
    <Hero />
    <Menu />
    <main>sections</main>
    <SocialNetworks />
    <Footer />
</main>

<style lang="postcss">
    main {
        @apply flex flex-1 flex-col;
    }
</style>
