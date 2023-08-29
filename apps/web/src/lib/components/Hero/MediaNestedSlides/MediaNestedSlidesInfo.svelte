<div class="container relative flex h-full w-full flex-wrap gap-y-6 px-6">
	<div
		class="flex h-full flex-col justify-center py-12 3xl:max-w-[50%] 3xl:flex-row 3xl:items-center 3xl:self-center 3xl:py-0 3xl:pr-6 3xl:pt-0"
	>
		<slot name="indicators" />

		<div class="mt-12 xl:max-w-xl 3xl:mt-0">
			{#if $$slots.title}
				<h1
					class="line-clamp-3 text-2xl uppercase text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
				>
					<slot name="title" />
				</h1>
			{/if}

			{#if $$slots.description}
				<p class="mt-12 line-clamp-4 text-xl text-white">
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
