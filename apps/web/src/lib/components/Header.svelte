<script lang="ts">
    import Logo from './Logo.svelte';
    import Navbar from './Navbar.svelte';
</script>

<header class="jinen-header-0">
    <div class="container flex-between py-2">
        <div class="flex items-center gap-4">
            <a href="/">
                <Logo
                    src="jinen"
                    cssClass="w-16"
                />
            </a>

            <a href="/">
                <Logo
                    src="navy_horizontal"
                    cssClass="w-44"
                />
            </a>
        </div>

        <Navbar />
    </div>
</header>

<style lang="postcss">
    .jinen-header-0 {
        @apply bg-blue-900 text-white;

        /* background-image: url('$lib/assets/svg/0_header.svg');
        background-size: 100% auto; */
    }
</style>
