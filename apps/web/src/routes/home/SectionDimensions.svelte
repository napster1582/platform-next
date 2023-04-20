<script lang="ts">
    import { Video } from 'flowbite-svelte';

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

    <div
        class="flex flex-wrap items-center gap-8 rounded-br-full rounded-tl-full border border-yellow-300 bg-yellow-50 p-6 text-yellow-900"
    >
        <div class="flex items-center">
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
        </div>

        <blockquote class="text-xl">
            <strong class="mb-4 block font-medium">ADN Institucional</strong>

            <span> El marino Colombiano debe ser ético, lider y competente. </span>
        </blockquote>
    </div>

    <div class="mt-24 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2">
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
