<script lang="ts">
	import { Footer } from '$lib/components/ui-cms/footer';
	import { Header } from '$lib/components/ui-cms/header';
	import { domStore } from '$lib/stores/dom';
	import { isEmpty } from '@jinen/helpers';
	import type { LayoutData } from './$types';

	import '../app.pcss';

	export let data: LayoutData;

	const { header, footer } = data;
</script>

<div
	id="app"
	class="flex min-h-screen flex-col"
>
	{#if $domStore.showHeader && header && !isEmpty(header)}
		<Header {header} />
	{/if}

	<div
		class="flex-1"
		class:mt-[65px]={$domStore.showHeader && !isEmpty(header)}
	>
		<slot />
	</div>

	{#if $domStore.showFooter && footer && !isEmpty(footer)}
		<Footer {footer} />
	{/if}
</div>
