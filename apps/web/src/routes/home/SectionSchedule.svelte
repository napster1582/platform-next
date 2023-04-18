<script lang="ts">
    import { SectionTitle } from '$lib/components';
    import { Badge, Button, TabItem, Tabs, Timeline, TimelineItem } from 'flowbite-svelte';

    const currentYear = new Date().getFullYear();

    const years = [
        {
            value: 2023,
            events: [
                {
                    title: 'Festival de Primavera',
                    description:
                        'Celebra la llegada de la primavera en nuestro Festival de Primavera. Habrá música, danzas, actividades al aire libre y comida deliciosa. ¡Disfruta de la energía y los colores de la estación más florida del año!',
                    date: 'Abril 2023',
                    status: 'ongoing',
                },
                {
                    title: 'Exposición de Arte Contemporáneo',
                    description:
                        'Explora el mundo del arte contemporáneo en nuestra exposición especial. Descubre las últimas tendencias y expresiones artísticas en un entorno inspirador y creativo. ¡Una experiencia imperdible para los amantes del arte!',
                    date: 'Marzo 2023',
                    status: 'completed',
                },
                {
                    title: 'Concierto de Música Clásica',
                    description:
                        'Disfruta de una noche mágica con nuestro concierto de música clásica. Escucha las obras maestras de los compositores más reconocidos interpretadas por talentosos músicos. ¡Una experiencia única para los amantes de la música clásica!',
                    date: 'Febrero 2023',
                    status: 'incompleted',
                },
                {
                    title: 'Noche de Películas al Aire Libre',
                    description:
                        'Ven a nuestra noche de películas al aire libre donde proyectaremos tus clásicos favoritos en una pantalla gigante bajo las estrellas. Trae tu manta y tus snacks favoritos y disfruta de una velada inolvidable bajo el cielo estrellado.',
                    date: 'Enero 2023',
                    status: 'completed',
                },
            ],
        },
        {
            value: 2022,
            events: [
                {
                    title: 'Fiesta de Invierno',
                    description:
                        '¡Ven y únete a nosotros en una emocionante fiesta de invierno! Habrá juegos, actividades y deliciosa comida para disfrutar en compañía de amigos y familiares.',
                    date: 'Diciembre 2022',
                    status: 'completed',
                },
                {
                    title: 'Conferencia de Tecnología',
                    description:
                        'Te invitamos a nuestra conferencia anual de tecnología. Con reconocidos expertos de la industria como ponentes, esta será una oportunidad única para aprender sobre las últimas tendencias en tecnología y hacer networking con profesionales del sector.',
                    date: 'Noviembre 2022',
                    status: 'completed',
                },
                {
                    title: 'Excursión de Aventura',
                    description:
                        '¡Embárcate en una emocionante excursión de aventura! Explora la naturaleza, disfruta de deportes al aire libre y vive una experiencia inolvidable en compañía de otros entusiastas de la aventura.',
                    date: 'Octubre 2022',
                    status: 'completed',
                },
                {
                    title: 'Festival de Otoño',
                    description:
                        '¡Celebra la llegada del otoño con nuestro festival anual! Disfruta de música en vivo, comida típica de la temporada, y actividades para toda la familia en un ambiente festivo y acogedor.',
                    date: 'Septiembre 2022',
                    status: 'completed',
                },
                {
                    title: 'Carrera Solidaria',
                    description:
                        'Participa en nuestra carrera solidaria para recaudar fondos y concienciar sobre una causa importante. Corre, camina o únete como voluntario en esta actividad deportiva con propósito.',
                    date: 'Agosto 2022',
                    status: 'completed',
                },
                {
                    title: 'Fiesta en la Playa',
                    description:
                        '¡Disfruta del verano en nuestra fiesta en la playa! Habrá música, juegos acuáticos, comida y bebida para pasar un día divertido bajo el sol junto al mar.',
                    date: 'Julio 2022',
                    status: 'completed',
                },
                {
                    title: 'Taller de Arte',
                    description:
                        'Te invitamos a nuestro taller de arte donde podrás expresar tu creatividad y aprender nuevas técnicas artísticas. No importa si eres principiante o experimentado, ¡todos son bienvenidos!',
                    date: 'Junio 2022',
                    status: 'completed',
                },
                {
                    title: 'Concierto Benéfico',
                    description:
                        'Disfruta de una noche llena de música en nuestro concierto benéfico. Los fondos recaudados serán destinados a una organización sin fines de lucro local. ¡Únete a nosotros y contribuye a una buena causa!',
                    date: 'Mayo 2022',
                    status: 'completed',
                },
                {
                    title: 'Feria Gastronómica',
                    description:
                        '¡Descubre nuevos sabores en nuestra feria gastronómica! Prueba platos deliciosos de diferentes culturas, disfruta de música en vivo y aprende sobre la historia y tradiciones culinarias de diferentes regiones.',
                    date: 'Abril 2022',
                    status: 'completed',
                },
                {
                    title: 'Noche de Gala',
                    description:
                        'Celebra con nosotros en nuestra elegante Noche de Gala. Habrá música en vivo, comida gourmet y una noche llena de glamour y diversión. ¡Viste tus mejores galas y únete a la celebración!',
                    date: 'Marzo 2022',
                    status: 'completed',
                },
                {
                    title: 'Festival Cultural',
                    description:
                        'Descubre la diversidad cultural en nuestro Festival Cultural. Habrá exhibiciones, presentaciones artísticas, comida típica y actividades para toda la familia. ¡No te lo pierdas!',
                    date: 'Febrero 2022',
                    status: 'completed',
                },
                {
                    title: 'Feria de Artesanías',
                    description:
                        'Ven a nuestra Feria de Artesanías donde encontrarás una amplia variedad de productos artesanales únicos. Disfruta del talento de nuestros artesanos locales y encuentra verdaderas joyas hechas a mano.',
                    date: 'Enero 2022',
                    status: 'completed',
                },
            ],
        },
    ];

    const getStatusColor = (status: string) => {
        if (status === 'completed') return 'green';
        if (status === 'incompleted') return 'red';
        if (status === 'ongoing') return 'blue';
    };

    const getStatusIcon = (status: string) => {
        if (status === 'completed') return 'icon-[ph--check-circle-duotone]';
        if (status === 'incompleted') return 'icon-[solar--close-circle-bold-duotone]';
        if (status === 'ongoing') return 'icon-[ri--ship-2-fill]';
    };
</script>

<section>
    <SectionTitle tag="h3">Agenda de eventos académicos y científicos</SectionTitle>

    <Tabs contentClass="p-4 mt-4 rounded-xl">
        {#each years as year}
            <TabItem open={year.value === currentYear}>
                <svelte:fragment slot="title">
                    <span>{year.value}</span>
                </svelte:fragment>

                <Timeline order="vertical">
                    {#each year.events as event}
                        {@const color = getStatusColor(event.status)}
                        {@const icon = getStatusIcon(event.status)}

                        <TimelineItem
                            title={event.title}
                            date={event.date}
                        >
                            <svelte:fragment slot="icon">
                                <div
                                    class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white"
                                    class:animate-ping={event.status === 'ongoing'}
                                >
                                    <span class="{icon} text-{color}-500 text-2xl" />
                                </div>
                            </svelte:fragment>

                            <Badge {color}>
                                {event.status}
                            </Badge>

                            <p class="mt-4 max-w-xl text-gray-600">
                                {event.description}
                            </p>

                            <Button
                                color={event.status === 'ongoing' ? 'blue' : 'alternative'}
                                class="mt-4"
                            >
                                Conocer más

                                <span class="icon-[radix-icons--external-link] ml-3" />
                            </Button>
                        </TimelineItem>
                    {/each}
                </Timeline>
            </TabItem>
        {/each}
    </Tabs>
</section>
