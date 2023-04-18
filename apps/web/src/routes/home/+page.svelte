<script lang="ts">
    import Menu from 'lib/components/menu/Menu.svelte';
    import Hero from './Hero.svelte';
    import SectionDimensions from './SectionDimensions.svelte';
    import SectionSchedule from './SectionSchedule.svelte';
    import SectionSchools from './SectionSchools.svelte';
</script>

<Hero />

<div class="container">
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

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            ><path
                fill="#000"
                fill-opacity="1"
                d="M0,160L120,176C240,192,480,224,720,234.7C960,245,1200,235,1320,229.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            /></svg
        >
    </section>

    <section
        id="section-schools"
        class="bg-black pb-24"
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
    </section>

    <section
        id="section-schedule"
        class="relative mb-36"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
        >
            <path
                fill="#000"
                fill-opacity="1"
                d="M0,32L30,32C60,32,120,32,180,26.7C240,21,300,11,360,42.7C420,75,480,149,540,181.3C600,213,660,203,720,165.3C780,128,840,64,900,64C960,64,1020,128,1080,128C1140,128,1200,64,1260,69.3C1320,75,1380,149,1410,186.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            />
        </svg>

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

    .abstract-container {
        background-image: radial-gradient(theme('colors.zinc.100') 1px, transparent 1px);
        background-size: calc(10 * 1px) calc(10 * 1px);
    }
</style>
