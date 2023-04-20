<script lang="ts">
    import { Menu } from '$lib/components';
    import Hero from './Hero.svelte';
    import SectionDimensions from './SectionDimensions.svelte';
    import SectionSchedule from './SectionSchedule.svelte';
    import SectionSchools from './SectionSchools.svelte';
</script>

<Hero />

<div class="container mt-12">
    <Menu />
</div>

<main class="flex flex-col">
    <section
        id="section-dimensions"
        class="relative"
    >
        <div class="container">
            <SectionDimensions />
        </div>
    </section>

    <section id="section-schools">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            ><path
                fill="#fff"
                fill-opacity="1"
                d="M0,96L17.1,96C34.3,96,69,96,103,128C137.1,160,171,224,206,229.3C240,235,274,181,309,160C342.9,139,377,149,411,144C445.7,139,480,117,514,122.7C548.6,128,583,160,617,186.7C651.4,213,686,235,720,256C754.3,277,789,299,823,293.3C857.1,288,891,256,926,256C960,256,994,288,1029,272C1062.9,256,1097,192,1131,154.7C1165.7,117,1200,107,1234,122.7C1268.6,139,1303,181,1337,192C1371.4,203,1406,181,1423,170.7L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
            /></svg
        >

        <div class="container relative">
            <div class="pointer-events-none absolute inset-x-0 top-16 z-20 overflow-hidden">
                <img
                    src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
                    alt=""
                    class="w-[71.75rem] max-w-none flex-none"
                    decoding="async"
                />
            </div>

            <SectionSchools />
        </div>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            ><path
                fill="#fff"
                fill-opacity="1"
                d="M0,96L17.1,96C34.3,96,69,96,103,128C137.1,160,171,224,206,229.3C240,235,274,181,309,160C342.9,139,377,149,411,144C445.7,139,480,117,514,122.7C548.6,128,583,160,617,186.7C651.4,213,686,235,720,256C754.3,277,789,299,823,293.3C857.1,288,891,256,926,256C960,256,994,288,1029,272C1062.9,256,1097,192,1131,154.7C1165.7,117,1200,107,1234,122.7C1268.6,139,1303,181,1337,192C1371.4,203,1406,181,1423,170.7L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
            /></svg
        >
    </section>

    <section
        id="section-schedule"
        class="relative"
    >
        <div class="abstract-container container">
            <SectionSchedule />
        </div>
    </section>
</main>

<style lang="postcss">
    #section-dimensions::before {
        content: '';
        background-image: url('$lib/assets/svg/0_waves.svg');
        background-size: 100% 200px;
        background-repeat: no-repeat;

        @apply block h-[200px] w-full;
        @apply left-0 top-0;
    }

    #section-schools {
        background-color: #000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%231b1b1b' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
    }

    #section-schedule {
        background-image: radial-gradient(theme('colors.zinc.100') 1px, transparent 1px);
        background-size: calc(10 * 1px) calc(10 * 1px);
    }
</style>
