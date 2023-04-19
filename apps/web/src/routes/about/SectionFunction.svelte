<script lang="ts">
    import { Video } from 'flowbite-svelte';

    import { SectionTitle } from '$lib/components';
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Función
    </SectionTitle>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2">
        <p>
            Formar militares integrales con sentido humano e investigativo bajo los principios y
            valores de la autonomía, la ética, el liderazgo, el respeto por los demás, el sentido de
            pertenencia y el ejercicio de la democracia, se requiere militares formados bajo
            competencias personales y laborales para ejercer su profesión con calidad,
            responsabilidad y competitividad, mediante una formación, actualización, capacitación,
            instrucción y entrenamiento naval militar.
        </p>
        <div class="flex flex-col gap-y-6">
            <Video
                src="https://www.shutterstock.com/shutterstock/videos/1075977254/preview/stock-footage-the-united-stares-navy-destroyer-transits-istanbul-strait-towards-the-mediterranean-in-istanbul.webm"
                controls
                trackSrc="schools.mp4"
                class="w-full rounded-3xl"
            />
        </div>
    </div>
</section>
