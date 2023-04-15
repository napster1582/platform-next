<script>
    import Logo from './Logo.svelte';
</script>

<footer class="jinen-footer-0">
    <div class="block lg:flex flex-col gap-4">
        <p class="text-2xl text-center">Jefatura integral de Educación Naval</p>

        <p class="text-lg text-center">
            Avenida Ciudad de Cali # 51 - 66 Oficina 305 Edificio World Business Center - WBC Bogotá
            D.C. - Colombia
        </p>
    </div>

    <div class="order-1 lg:order-0 inline-flex">
        <Logo src="bicentennial" />
        <Logo src="navy_vertical" />
    </div>
</footer>

<style lang="postcss">
    .jinen-footer-0 {
        @apply w-full px-3 py-16 flex flex-col items-center gap-x-6 gap-y-12;
        @apply bg-no-repeat bg-blue-900 text-white;

        background-image: url('$lib/assets/svg/0_footer.svg');
        background-position: center;
        background-size: 100% 100%;
    }
</style>
