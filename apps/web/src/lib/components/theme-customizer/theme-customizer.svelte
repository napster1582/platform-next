<script lang="ts">
	import { resetTheme } from '$lib/utils/theme';
	import Icon from '@iconify/svelte';
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import AppearancePrimaryColor from './theme-color.svelte';
	import AppearanceFontSize from './theme-font-size.svelte';
	import AppearanceTheme from './theme-mode.svelte';
	import AppearanceBorderRadius from './theme-radius.svelte';
</script>

<Popover
	class="popover"
	let:open
>
	<PopoverButton class="popover-button button">
		<Icon
			icon="line-md:paint-drop-half-filled-twotone"
			class="text-xl"
		/>

		Personalizar

		{#if open}
			<Icon icon="ph:caret-up" />
		{:else}
			<Icon icon="ph:caret-down" />
		{/if}
	</PopoverButton>

	<PopoverPanel
		class="popover-panel popover-panel-br"
		let:close
	>
		<div
			class="grid grid-cols-[repeat(1,_minmax(250px,_1fr))] gap-6 md:grid-cols-[repeat(2,_minmax(250px,_1fr))] lg:grid-cols-[repeat(3,_minmax(250px,_1fr))] xl:grid-cols-[repeat(4,_minmax(250px,_1fr))]"
		>
			<AppearancePrimaryColor />
			<AppearanceBorderRadius />
			<AppearanceFontSize />
			<AppearanceTheme />
		</div>

		<hr class="my-4 border-token" />

		<div class="button-group button-group-end pb-2">
			<button
				class="button button-text"
				on:click={() => {
					resetTheme();
					close(null);
				}}
			>
				<Icon icon="line-md:check-list-3-filled" />

				Restablecer
			</button>

			<button
				class="button button-primary"
				on:click={() => {
					close(null);
				}}
			>
				<Icon icon="line-md:clipboard-check" />

				Aceptar
			</button>
		</div>
	</PopoverPanel>
</Popover>
