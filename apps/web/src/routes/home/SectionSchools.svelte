<script>
    import { Cta } from '$lib/components';
    import { Badge, Video } from 'flowbite-svelte';

    const schools = [
        { title: 'Escuela de superficie', acronym: 'ESUP', link: '#' },
        { title: 'Escuela de superficie del pacífico', acronym: 'ESUPA', link: '#' },
        { title: 'Escuela buceo y salvamento', acronym: 'EBUSA', link: '#' },
        { title: 'Escuela de inteligencia', acronym: 'ESIN', link: '#' },
        { title: 'Escuela de aviación naval', acronym: 'ESCAN', link: '#' },
        { title: 'Escuela de submarinos', acronym: 'ESUB', link: '#' },
        { title: 'Escuela de combate fluvial', acronym: 'CIEAF', link: '#' },
        { title: 'Escuela de internacional guardacostas', acronym: 'ESCUIG', link: '#' },
        { title: 'Centro internacional de entrenamiento anfibio', acronym: 'CIEAN', link: '#' },
        {
            title: 'Centro de entrenamiento y capacitación de operaciones de paz',
            acronym: 'CEPAZ',
            link: '#',
        },
    ];
</script>

<section>
    <h3 class="mb-12">Escuelas de capacitación</h3>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {#each schools as school}
            <div class="relative">
                <Badge
                    color="blue"
                    class="absolute -top-2 left-2 ml-4">{school.acronym}</Badge
                >

                <Cta href={school.link}>
                    {school.title}
                </Cta>
            </div>
        {/each}
    </div>

    <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Video
            src="https://www.shutterstock.com/shutterstock/videos/1075977254/preview/stock-footage-the-united-stares-navy-destroyer-transits-istanbul-strait-towards-the-mediterranean-in-istanbul.webm"
            controls
            trackSrc="schools.mp4"
            class="w-full rounded-3xl"
        />
        <Video
            src="https://www.shutterstock.com/shutterstock/videos/1075977254/preview/stock-footage-the-united-stares-navy-destroyer-transits-istanbul-strait-towards-the-mediterranean-in-istanbul.webm"
            controls
            trackSrc="schools.mp4"
            class="w-full rounded-3xl"
        />
        <Video
            src="https://www.shutterstock.com/shutterstock/videos/1075977254/preview/stock-footage-the-united-stares-navy-destroyer-transits-istanbul-strait-towards-the-mediterranean-in-istanbul.webm"
            controls
            trackSrc="schools.mp4"
            class="w-full rounded-3xl"
        />
        <Video
            src="https://www.shutterstock.com/shutterstock/videos/1075977254/preview/stock-footage-the-united-stares-navy-destroyer-transits-istanbul-strait-towards-the-mediterranean-in-istanbul.webm"
            controls
            trackSrc="schools.mp4"
            class="w-full rounded-3xl"
        />
        <Video
            src="https://www.shutterstock.com/shutterstock/videos/1075977254/preview/stock-footage-the-united-stares-navy-destroyer-transits-istanbul-strait-towards-the-mediterranean-in-istanbul.webm"
            controls
            trackSrc="schools.mp4"
            class="w-full rounded-3xl"
        />
    </div>
</section>
