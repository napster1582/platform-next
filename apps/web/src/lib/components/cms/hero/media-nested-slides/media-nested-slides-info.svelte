<div class="flex h-full flex-col items-start xl:justify-center 3xl:flex-row 3xl:items-center">
	<slot name="indicators" />

	<div class="mt-8 xl:max-w-xl 3xl:mt-0 3xl:pr-8">
		{#if $$slots.title}
			<h1 class="line-clamp-3 text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
				<slot name="title" />
			</h1>
		{/if}

		{#if $$slots.description}
			<p class="mt-6 line-clamp-4 text-xl text-white">
				<slot name="description" />
			</p>
		{/if}

		{#if $$slots.link}
			<div class="button-group mt-6">
				<slot name="link" />
			</div>
		{/if}
	</div>
</div>
