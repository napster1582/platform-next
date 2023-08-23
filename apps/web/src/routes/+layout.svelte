<script lang="ts">
	import { navigating } from '$app/stores';
	import { Footer, Header, LoadingOverlay } from '$lib/components';
	import { domStore, loadingStore } from '$lib/stores';
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
