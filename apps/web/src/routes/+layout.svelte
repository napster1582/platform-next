<script lang="ts">
	import { navigating } from '$app/stores';
	import { Footer } from '$lib/components/cms/Footer';
	import { Header } from '$lib/components/cms/Header';
	import { LoadingOverlay } from '$lib/components/cms/LoadingOverlay';
	import { domStore } from '$lib/stores/dom';
	import { loadingStore } from '$lib/stores/loading';
	import { isEmpty } from '@jinen/helpers';
	import type { LayoutData } from './$types';

	import '../app.pcss';

	export let data: LayoutData;

	const { header, footer } = data;

	$: $loadingStore = !!$navigating;
</script>

{#if $loadingStore}
	<LoadingOverlay />
{/if}

<div
	id="app"
	class="flex min-h-screen flex-col"
>
	{#if $domStore.showHeader && header && !isEmpty(header)}
		<Header content={header} />
	{/if}

	<div
		class="flex-1"
		class:mt-[65px]={$domStore.showHeader && !isEmpty(header)}
	>
		<slot />
	</div>

	{#if $domStore.showFooter && footer && !isEmpty(footer)}
		<Footer content={footer} />
	{/if}
</div>
