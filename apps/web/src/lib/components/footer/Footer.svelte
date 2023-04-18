<script>
    import Link from '../link/Link.svelte';
    import Logo from '../logo/Logo.svelte';
</script>

<footer class="footer relative bg-black">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        ><path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L36.9,64L73.8,32L110.8,160L147.7,160L184.6,160L221.5,64L258.5,288L295.4,96L332.3,64L369.2,224L406.2,224L443.1,224L480,224L516.9,32L553.8,64L590.8,128L627.7,192L664.6,96L701.5,96L738.5,192L775.4,160L812.3,160L849.2,160L886.2,32L923.1,192L960,96L996.9,96L1033.8,128L1070.8,192L1107.7,256L1144.6,224L1181.5,288L1218.5,128L1255.4,192L1292.3,160L1329.2,64L1366.2,192L1403.1,64L1440,192L1440,0L1403.1,0L1366.2,0L1329.2,0L1292.3,0L1255.4,0L1218.5,0L1181.5,0L1144.6,0L1107.7,0L1070.8,0L1033.8,0L996.9,0L960,0L923.1,0L886.2,0L849.2,0L812.3,0L775.4,0L738.5,0L701.5,0L664.6,0L627.7,0L590.8,0L553.8,0L516.9,0L480,0L443.1,0L406.2,0L369.2,0L332.3,0L295.4,0L258.5,0L221.5,0L184.6,0L147.7,0L110.8,0L73.8,0L36.9,0L0,0Z"
        /></svg
    >

    <div class="container rounded-none pb-16 text-gray-100">
        <div class="gap flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
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

            <div class="grid grid-cols-1 gap-x-24 gap-y-12 lg:grid-flow-col">
                <div class="flex flex-col gap-3">
                    <h3 class="text-lg">Soporte</h3>

                    <Link
                        href="/about"
                        className="text-inherit"
                    >
                        Preguntas frecuentes
                    </Link>
                    <Link
                        href="#"
                        className="text-inherit"
                    >
                        Obtener ayuda
                    </Link>
                    <Link
                        href="#"
                        className="text-inherit"
                    >
                        Reportar un Bug
                    </Link>
                </div>

                <div class="flex flex-col gap-3">
                    <h3 class="text-lg">Links</h3>

                    <Link
                        href="about"
                        className="text-inherit"
                    >
                        Función
                    </Link>
                    <Link
                        href="#"
                        className="text-inherit"
                    >
                        Política de privacidad
                    </Link>
                    <Link
                        href="#"
                        className="text-inherit"
                    >
                        Términos y condiciones
                    </Link>
                    <Link
                        href="/about"
                        className="text-inherit"
                    >
                        Mapa del sitio
                    </Link>
                </div>

                <div class="flex flex-col gap-3">
                    <h3 class="text-lg">Síguenos</h3>

                    <div class="flex gap-3">
                        <Link
                            href="about"
                            className="text-inherit"
                        >
                            <span
                                class="icon-[logos--facebook] text-4xl transition-transform duration-300 hover:scale-125"
                            />
                        </Link>
                        <Link
                            href="about"
                            className="text-inherit"
                        >
                            <span
                                class="icon-[skill-icons--instagram] text-4xl transition-transform duration-300 hover:scale-125"
                            />
                        </Link>
                        <Link
                            href="about"
                            className="text-inherit"
                        >
                            <span
                                class="icon-[skill-icons--twitter] text-4xl transition-transform duration-300 hover:scale-125"
                            />
                        </Link>
                        <Link
                            href="about"
                            className="text-inherit"
                        >
                            <span
                                class="icon-[skill-icons--linkedin] text-4xl transition-transform duration-300 hover:scale-125"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-zinc-950">
        <div class="container py-6">
            <address class="text-center text-gray-300">
                Avenida Ciudad de Cali # 51 - 66 Oficina 305 Edificio World Business Center - WBC
                Bogotá D.C. - Colombia
            </address>
        </div>
    </div>
</footer>

<style lang="postcss">
    .footer {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%231b1b1b' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");

        @apply bg-black;
    }
</style>
