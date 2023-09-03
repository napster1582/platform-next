<div class="xl:max-w-xl">
	<h1 class="line-clamp-3 text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
		<slot name="title" />
	</h1>

	<p class="mt-6 line-clamp-4 text-xl text-white">
		<slot name="description" />
	</p>

	<div class="button-group mt-6">
		<slot name="link" />
	</div>
</div>
