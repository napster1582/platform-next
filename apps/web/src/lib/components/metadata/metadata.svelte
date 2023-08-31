<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;

	// TODO: this variables should be dynamic. Probably taken from a config builder.
	const tempAuthor = 'JinenGroup';
	const tempName = 'Jinen';
	const tempUrl = 'jinen.com';
	const tempImage = 'https://shadcn-svelte.com/og.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content={description}
	/>
	<meta
		name="author"
		content={tempAuthor}
	/>

	<!-- Open Graph -->
	<meta
		property="og:title"
		content={title}
	/>
	<meta
		property="og:type"
		content="article"
	/>
	<meta
		property="og:url"
		content={tempUrl + $page.url.pathname}
	/>
	<meta
		property="og:image"
		content={tempImage}
	/>
	<meta
		property="og:image:alt"
		content={tempName}
	/>
	<meta
		property="og:image:width"
		content="1200"
	/>
	<meta
		property="og:image:height"
		content="630"
	/>
	<meta
		property="og:description"
		content={description}
	/>
	<meta
		property="og:site_name"
		content={tempName}
	/>
	<meta
		property="og:locale"
		content="es_CO"
	/>

	<!-- Twitter -->
	<meta
		name="twitter:card"
		content="summary_large_image"
	/>
	<meta
		name="twitter:site"
		content={tempUrl}
	/>
	<meta
		name="twitter:title"
		content={title}
	/>
	<meta
		name="twitter:description"
		content={description}
	/>
	<meta
		name="twitter:image"
		content={tempImage}
	/>
	<meta
		name="twitter:image:alt"
		content={tempName}
	/>
	<meta
		name="twitter:creator"
		content={tempAuthor}
	/>

	<!-- Canonical URL -->
	<link
		rel="canonical"
		href={tempUrl + $page.url.pathname}
	/>

	<!-- Favicon -->
	<link
		rel="shortcut icon"
		href="/favicon-16x16.png"
	/>
	<link
		rel="apple-touch-icon"
		href="/apple-touch-icon.png"
	/>
</svelte:head>
