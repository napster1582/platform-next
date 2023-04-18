<script>
    import Link from '../link/Link.svelte';
    import Logo from '../logo/Logo.svelte';
</script>

<footer class="footer relative">
    <div class="wave">
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            />
        </svg>
    </div>

    <div class="container rounded-none pb-16 pt-52 text-gray-100">
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

    .wave {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        line-height: 0;
    }

    .wave svg {
        position: relative;
        display: block;
        width: calc(115% + 1.3px);
        height: 166px;
    }

    .wave svg path {
        fill: #fff;
    }
</style>
