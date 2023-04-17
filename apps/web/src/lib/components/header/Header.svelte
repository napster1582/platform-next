<script>
    import { Link } from '../link';
    import { Logo } from '../logo';
    import { Navbar } from '../navbar';
</script>

<header class="jinen-header-0">
    <div class="flex-between container flex-wrap gap-4 py-2">
        <div class="flex items-center gap-4">
            <Link href="/">
                <Logo
                    src="jinen"
                    className="w-[70px]"
                />
            </Link>

            <Link href="/">
                <Logo
                    src="navy_horizontal"
                    className="w-[194px]"
                />
            </Link>
        </div>

        <Navbar />
    </div>
</header>

<style lang="postcss">
    .jinen-header-0 {
        @apply bg-blue-900 bg-no-repeat text-white;

        /* 
        background-image: url('$lib/assets/svg/0_header.svg');
        background-size: 100% 100%;
        background-blend-mode: luminosity; */
    }
</style>
