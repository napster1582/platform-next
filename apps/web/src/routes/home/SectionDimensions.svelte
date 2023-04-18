<script lang="ts">
    import { Alert, Video } from 'flowbite-svelte';

    import imageDna from '$lib/assets/images/section_chart_dna.png';
</script>

<section>
    <h3 class="mb-12">Dimensiones de la educación</h3>

    <Alert
        dismissable
        color="dark"
        class="border-base border "
    >
        <img
            slot="icon"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Student%20Medium%20Skin%20Tone.png"
            alt="Student Medium Skin Tone"
            width="125"
            height="125"
        />

        <span class="text-xl">
            <strong class="font-medium">ADN Institucional:</strong>
            El marino Colombiano debe ser ético, lider y competente.
        </span>
    </Alert>

    <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2">
        <img
            src={imageDna}
            alt="Representación de los valores del marino Colombiano y la dimensión de la educación"
        />

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
