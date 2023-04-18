<script lang="ts">
    import { CarouselTransition } from 'flowbite-svelte';

    import carousel_2 from '$lib/assets/images/TMP_backdrop_0.jpg';
    import carousel_3 from '$lib/assets/images/TMP_backdrop_1.jpg';
    import carousel_0 from '$lib/assets/images/TMP_carousel_0.jpg';
    import carousel_1 from '$lib/assets/images/TMP_carousel_1.jpg';

    const images = [
        {
            id: 0,
            name: 'Lorem',
            imgurl: carousel_0,
        },
        {
            id: 1,
            name: 'Ipsum',
            imgurl: carousel_1,
        },
        {
            id: 2,
            name: 'Ipsum',
            imgurl: carousel_2,
        },
        {
            id: 3,
            name: 'Ipsum',
            imgurl: carousel_3,
        },
    ];
</script>

<CarouselTransition
    {images}
    showCaptions={false}
    showThumbs={false}
    showIndicators={true}
    duration={6000}
    transitionType="fade"
    transitionParams={{ delay: 0, duration: 300 }}
/>
