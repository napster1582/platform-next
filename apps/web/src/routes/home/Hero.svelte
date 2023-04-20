<script lang="ts">
    import carousel_2 from '$lib/assets/images/TMP_backdrop_0.jpg';
    import carousel_1 from '$lib/assets/images/TMP_carousel_1.jpg';
    import { Carousel, type JinenCarouselItem } from '$lib/components';

    const items: JinenCarouselItem[] = [
        {
            name: 'ENAP',
            title: 'Escuela naval almirante padilla',
            description:
                'Sunt quidem totam accusantium perferendis aspernatur? Doloremque repellat dignissimos asperiores ducimus, laboriosam vero corporis architecto, culpa labore molestias eos! Omnis, ea sit!',
            backgroundImageUrl: carousel_1,
            backgroundImageAlt: 'Carousel item 1',
            previews: [
                {
                    title: 'Dolor',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/811440/pexels-photo-811440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 1',
                },
                {
                    title: 'Lorem',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 2',
                },
                {
                    title: 'Ipsum',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 3',
                },
                {
                    title: 'Ipsum',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/1556991/pexels-photo-1556991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 3',
                },
            ],
        },
        {
            name: 'ENSUB',
            title: 'Escuela naval de suboficiales ARC "Barranquilla"',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem totam accusantium perferendis aspernatur? Doloremque repellat dignissimos asperiores ducimus, laboriosam vero corporis architecto, culpa labore molestias eos! Omnis, ea sit!',
            backgroundImageUrl: carousel_2,
            backgroundImageAlt: 'Carousel item 1',
            previews: [
                {
                    title: 'Dolor',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/19678/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 1',
                },
                {
                    title: 'Lorem',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/723023/pexels-photo-723023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 2',
                },
            ],
        },
        {
            name: 'ESFIM',
            title: 'Escuela de formación de infantería de marina',
            description:
                'Dolor sit amet consectetur adipisicing elit. Sunt quidem totam accusantium perferendis aspernatur? Doloremque repellat dignissimos asperiores ducimus, laboriosam vero corporis architecto, culpa labore molestias eos! Omnis, ea sit!',
            backgroundImageUrl: carousel_2,
            backgroundImageAlt: 'Carousel item 1',
            previews: [
                {
                    title: 'Dolor',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 1',
                },
                {
                    title: 'Lorem',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/40642/pexels-photo-40642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 2',
                },
                {
                    title: 'Lorem',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/2618797/pexels-photo-2618797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 2',
                },
                {
                    title: 'Lorem',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/843085/pexels-photo-843085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 2',
                },
            ],
        },
        {
            name: 'ANEES',
            title: 'Academia naval de estudios estratégicos',
            description:
                'Sit amet dolor ipsum consectetur adipisicing elit. Sunt quidem totam accusantium perferendis aspernatur? Doloremque repellat dignissimos asperiores ducimus, laboriosam vero corporis architecto, culpa labore molestias eos! Omnis, ea sit!',
            backgroundImageUrl: carousel_2,
            backgroundImageAlt: 'Carousel item 1',
            previews: [
                {
                    title: 'Dolor',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/14579141/pexels-photo-14579141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 1',
                },
                {
                    title: 'Dolor',
                    backgroundImageUrl:
                        'https://images.pexels.com/photos/1162639/pexels-photo-1162639.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    backgroundImageAlt: 'Carousel preview item 1',
                },
            ],
        },
    ];
</script>

<Carousel {items} />
