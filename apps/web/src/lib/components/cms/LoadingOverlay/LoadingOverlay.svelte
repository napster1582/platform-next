<script>
	import Icon from '@iconify/svelte';
</script>

<div
	class="fixed inset-0 z-50 grid h-full w-full place-items-center bg-white/90 backdrop-blur-lg transition"
>
	<div class="flex flex-col items-center gap-8">
		<Icon
			icon="svg-spinners:blocks-wave"
			class="text-3xl"
		/>

		<div class="text-center">
			<h2
				class="text-2xl font-semibold"
				aria-label="Cargando contenido"
			>
				Cargando...
			</h2>
			<p
				class="mt-2"
				aria-label="Consultando información del servidor"
			>
				Estamos preparando el contenido, esto puede tomar unos segundos...
			</p>
		</div>
	</div>
</div>
