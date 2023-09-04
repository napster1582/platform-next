<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { defaultThemeConfig, themeConfig } from '$lib/stores/theme-config';
	import Icon from '@iconify/svelte';
	import ThemeCustomizerColor from './theme-customizer-color.svelte';
	import ThemeCustomizerFontSize from './theme-customizer-font-size.svelte';
	import ThemeCustomizerMode from './theme-customizer-mode.svelte';
	import ThemeCustomizerMotion from './theme-customizer-motion.svelte';
	import ThemeCustomizerRadius from './theme-customizer-radius.svelte';
</script>

<Popover positioning={{ placement: 'bottom-end' }}>
	<PopoverTrigger
		asChild
		let:builder
	>
		<Button
			builders={[builder]}
			class="button text-white"
		>
			<Icon
				icon="material-symbols:settings-account-box-outline"
				class="text-lg"
			/>

			Preferencias

			{#if builder['data-state'] === 'open'}
				<Icon icon="ph:caret-up" />
			{:else}
				<Icon icon="ph:caret-down" />
			{/if}
		</Button>
	</PopoverTrigger>
	<PopoverContent class="max-h-[calc(100%-100px)] w-96 overflow-y-auto py-6">
		<div class="flex flex-col gap-y-4 md:gap-y-6">
			<div class="flex items-start justify-between gap-2">
				<div class="space-y-1">
					<div class="font-semibold leading-none tracking-tight">Personalizar</div>
					<div class="text-xs text-muted-foreground">
						Elija un diseño que se ajuste a sus gustos.
					</div>
				</div>

				<Button
					variant="ghost"
					size="icon"
					on:click={() => {
						themeConfig.set(defaultThemeConfig);
					}}
				>
					<Icon icon="radix-icons:reset" />

					<span class="sr-only"> Restablecer </span>
				</Button>
			</div>

			<ThemeCustomizerFontSize />
			<ThemeCustomizerMotion />
			<ThemeCustomizerColor columns={3} />
			<ThemeCustomizerRadius columns={5} />
			<ThemeCustomizerMode columns={3} />
		</div>
	</PopoverContent>
</Popover>
