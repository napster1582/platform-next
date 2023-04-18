<script>
    import { Cta, SectionTitle } from '$lib/components';
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
    <SectionTitle
        tag="h3"
        mode="ligth"
    >
        Escuelas de capacitación
    </SectionTitle>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {#each schools as school, i}
            <div class="relative">
                <Badge
                    color="yellow"
                    class="absolute -top-2 left-2 ml-4">{school.acronym}</Badge
                >

                <Cta href={school.link}>
                    <svelte:fragment slot="icon">
                        {#if i % 2 === 0}
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Water%20Wave.png"
                                alt="Water Wave"
                                width="55"
                                height="55"
                                class="mr-3"
                            />
                        {:else}
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png"
                                alt="Milky Way"
                                width="55"
                                height="55"
                                class="mr-3"
                            />
                        {/if}
                    </svelte:fragment>

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
    </div>
</section>
