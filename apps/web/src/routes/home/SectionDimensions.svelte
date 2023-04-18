<script lang="ts">
    import { Alert, Video } from 'flowbite-svelte';

    import imageDna from '$lib/assets/images/section_chart_dna.png';
    import { SectionTitle } from '$lib/components';
</script>

<section>
    <SectionTitle
        tag="h3"
        mode="dark"
    >
        Dimensiones de la educación
    </SectionTitle>

    <Alert
        color="yellow"
        class="rounded-br-full rounded-tl-full"
    >
        <svelte:fragment slot="icon">
            <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Woman%20Student%20Medium%20Skin%20Tone.png"
                alt="Woman Student Medium Skin Tone"
                width="125"
                height="125"
            />
            <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Student%20Medium%20Skin%20Tone.png"
                alt="Student Medium Skin Tone"
                width="125"
                height="125"
            />
        </svelte:fragment>

        <span class="text-xl">
            <div class="mb-4">
                <strong class="font-medium">ADN Institucional</strong>
            </div>

            <span> El marino Colombiano debe ser ético, lider y competente. </span>
        </span>
    </Alert>

    <div class="mt-36 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2">
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
