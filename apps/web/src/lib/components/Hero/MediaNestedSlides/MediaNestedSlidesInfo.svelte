<script lang="ts">
</script>

<div class="container relative flex h-full w-full flex-wrap gap-y-6 px-6">
	<div
		class="flex h-full 3xl:items-center justify-center flex-col 3xl:flex-row py-12 3xl:py-0 3xl:max-w-[50%] 3xl:self-center 3xl:pr-6 3xl:pt-0"
	>
		<slot name="indicators" />

		<div class="xl:max-w-xl 3xl:mt-0 mt-12">
			{#if $$slots.title}
				<h1
					class="text-2xl uppercase text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl line-clamp-3"
				>
					<slot name="title" />
				</h1>
			{/if}

			{#if $$slots.description}
				<p class="mt-12 text-xl text-white line-clamp-4">
					<slot name="description" />
				</p>
			{/if}

			{#if $$slots.link}
				<div class="button-group mt-12">
					<slot name="link" />
				</div>
			{/if}
		</div>
	</div>
</div>
