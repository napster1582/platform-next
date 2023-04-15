<script lang="ts">
    import { Link } from '../link';
    import { Logo } from '../logo';
    import { Navbar } from '../navbar';
</script>

<header class="jinen-header-0">
    <div class="container flex-between py-2">
        <div class="flex items-center gap-4">
            <Link href="/">
                <Logo
                    src="jinen"
                    className="w-[48px]"
                />
            </Link>

            <Link href="/">
                <Logo
                    src="navy_horizontal"
                    className="w-[136px]"
                />
            </Link>
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
