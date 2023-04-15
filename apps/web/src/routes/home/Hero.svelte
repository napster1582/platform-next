<script lang="ts">
    import { stairs } from '@slidy/animation';
    import { Slidy } from '@slidy/svelte';

    import carousel_0 from '$lib/assets/images/TMP_carousel_0.jpg';
    import carousel_1 from '$lib/assets/images/TMP_carousel_1.jpg';

    const slides = [
        {
            id: 1,
            width: 400,
            height: 300,
            src: carousel_0,
        },
        {
            id: 2,
            width: 400,
            height: 300,
            src: carousel_1,
        },
    ];
</script>

<div class="flex">
    <Slidy
        animation={stairs}
        {slides}
        counter={true}
        duration={450}
        gravity={1.45}
        snap="center"
        arrows
        let:item
    />
</div>
