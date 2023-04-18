<script lang="ts">
    import { Link } from '../link';

    import iconFacebook from '$lib/assets/icons/facebook.png';
    import iconInstagram from '$lib/assets/icons/instagram.png';
    import iconLinkedin from '$lib/assets/icons/linkedin.png';
    import iconTwitter from '$lib/assets/icons/twitter.png';

    import backdropFacebook from '$lib/assets/images/TMP_backdrop_0.jpg';
    import backdropInstagram from '$lib/assets/images/TMP_backdrop_1.jpg';
    import backdropLinkedin from '$lib/assets/images/TMP_backdrop_2.jpg';
    import backdropTwitter from '$lib/assets/images/TMP_backdrop_3.jpg';

    const socialNetworks = [
        {
            name: 'Facebook',
            backdrop: backdropFacebook,
            icon: iconFacebook,
            link: '#',
        },
        {
            name: 'Instagram',
            backdrop: backdropInstagram,
            icon: iconInstagram,
            link: '#',
        },
        {
            name: 'Twitter',
            backdrop: backdropTwitter,
            icon: iconTwitter,
            link: '#',
        },
        {
            name: 'Linkedin',
            backdrop: backdropLinkedin,
            icon: iconLinkedin,
            link: '#',
        },
    ];
</script>

<div
    class="lg:gap-18 my-24 grid grid-cols-1 gap-16 rounded-xl bg-zinc-100 p-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
>
    {#each socialNetworks as network}
        <div class="group h-56 -skew-x-6 overflow-hidden rounded-xl">
            <Link
                href={network.link}
                target="_blank"
                style="background-image: url({network.backdrop})"
                class="duration-400 grid h-full w-full transform place-items-center bg-cover bg-center transition-transform group-hover:scale-105"
            >
                <!-- TODO: agregar link + locale para el atributo alt -->
                <img
                    src={network.icon}
                    alt="Síguenos en {network.name}"
                    class="group-hover:scale-130 duration-400 w-24 object-cover transition-transform"
                />
            </Link>
        </div>
    {/each}
</div>
