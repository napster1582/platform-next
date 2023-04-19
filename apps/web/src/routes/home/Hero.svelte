<script lang="ts">
    import carousel_2 from '$lib/assets/images/TMP_backdrop_0.jpg';
    import carousel_3 from '$lib/assets/images/TMP_backdrop_1.jpg';
    import carousel_1 from '$lib/assets/images/TMP_carousel_1.jpg';
    import { Carousel, type JinenCarouselItem } from '$lib/components';

    const items: JinenCarouselItem[] = [
        {
            name: 'CPN',
            title: 'Lorem',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem totam accusantium perferendis aspernatur? Doloremque repellat dignissimos asperiores ducimus, laboriosam vero corporis architecto, culpa labore molestias eos! Omnis, ea sit!',
            backgroundImageUrl: carousel_1,
            backgroundImageAlt: 'Carousel item 1',
            previews: [
                {
                    title: 'Lorem',
                    backgroundImageUrl: carousel_2,
                    backgroundImageAlt: 'Carousel preview item 2',
                },
                {
                    title: 'Ipsum',
                    backgroundImageUrl: carousel_3,
                    backgroundImageAlt: 'Carousel preview item 3',
                },
                {
                    title: 'Dolor',
                    backgroundImageUrl: carousel_1,
                    backgroundImageAlt: 'Carousel preview item 1',
                },
            ],
        },
        {
            name: 'LAD',
            title: 'Dolor Sit Amet',
            description:
                'Sunt quidem totam accusantium perferendis aspernatur? Doloremque repellat dignissimos asperiores ducimus, laboriosam vero corporis architecto, culpa labore molestias eos! Omnis, ea sit!',
            backgroundImageUrl: carousel_1,
            backgroundImageAlt: 'Carousel item 1',
            previews: [
                {
                    title: 'Dolor',
                    backgroundImageUrl: carousel_1,
                    backgroundImageAlt: 'Carousel preview item 1',
                },
                {
                    title: 'Lorem',
                    backgroundImageUrl: carousel_2,
                    backgroundImageAlt: 'Carousel preview item 2',
                },
                {
                    title: 'Ipsum',
                    backgroundImageUrl: carousel_3,
                    backgroundImageAlt: 'Carousel preview item 3',
                },
                {
                    title: 'Ipsum',
                    backgroundImageUrl: carousel_3,
                    backgroundImageAlt: 'Carousel preview item 3',
                },
                {
                    title: 'Dolor',
                    backgroundImageUrl: carousel_1,
                    backgroundImageAlt: 'Carousel preview item 1',
                },
                {
                    title: 'Lorem',
                    backgroundImageUrl: carousel_2,
                    backgroundImageAlt: 'Carousel preview item 2',
                },
            ],
        },
    ];
</script>

<Carousel {items} />
