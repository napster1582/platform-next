<script>
    import { Footer, FooterLink, FooterLinkGroup } from 'flowbite-svelte';
    import Link from '../link/Link.svelte';
    import Logo from '../logo/Logo.svelte';
</script>

<Footer
    footerType="logo"
    class="bg-zinc-100 text-gray-500"
>
    <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex items-center gap-6">
            <Link href="#">
                <Logo
                    src="bicentennial"
                    className="w-[100px]"
                />
            </Link>

            <Link href="#">
                <Logo
                    src="navy_vertical"
                    className="w-[100px]"
                />
            </Link>
        </div>
        <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
            <FooterLink href="/about">Función</FooterLink>
            <FooterLink href="#">Política de privacidad</FooterLink>
            <FooterLink href="#">Contacto</FooterLink>
        </FooterLinkGroup>
    </div>

    <hr class="mx-auto my-6 border-gray-200 lg:my-8" />

    <address class="text-center text-inherit">
        Avenida Ciudad de Cali # 51 - 66 Oficina 305 Edificio World Business Center - WBC Bogotá
        D.C. - Colombia
    </address>
</Footer>

<style lang="postcss">
    .jinen-footer-0 {
        @apply flex w-full flex-col items-center gap-x-6 gap-y-10 px-3 py-8;
        @apply bg-blue-900 bg-no-repeat text-white;

        /* 
        background-image: url('$lib/assets/svg/0_footer.svg');
        background-position: center;
        background-size: 100% 100%; */
    }
</style>
