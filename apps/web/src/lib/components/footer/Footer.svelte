<script>
    import Logo from '../logo/Logo.svelte';
</script>

<footer class="jinen-footer-0">
    <div class="block flex-col gap-4 lg:flex">
        <p class="text-center text-2xl">Jefatura integral de Educación Naval</p>

        <p class="text-center text-lg">
            Avenida Ciudad de Cali # 51 - 66 Oficina 305 Edificio World Business Center - WBC Bogotá
            D.C. - Colombia
        </p>
    </div>

    <div class="lg:order-0 order-1 inline-flex">
        <Logo
            src="bicentennial"
            className="w-[100px]"
        />
        <Logo
            src="navy_vertical"
            className="w-[100px]"
        />
    </div>
</footer>

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
