<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import SocialNetworks from '$lib/components/SocialNetworks.svelte';
    import Logo from '$lib/components/Logo.svelte';
    import Hero from './Hero.svelte';
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
