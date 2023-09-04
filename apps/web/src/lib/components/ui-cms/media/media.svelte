<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Media } from '@jinen/cms-annotations';
	import { resolveMediaSource } from '@jinen/web-resolvers';
	import { Img } from '../../img';
	import { Video } from '../../video';

	export let media: Media | string;
	export let decoration: 'simpleFrame' | undefined;

	function isImage(mimeType: string) {
		return mimeType.startsWith('image/');
	}

	function isVideo(mimeType: string) {
		return mimeType.startsWith('video/');
	}
</script>

{#if typeof media === 'object'}
	<div class="flex h-auto w-full flex-col">
		{#if isImage(media.mimeType ?? '')}
			<Img
				src={resolveMediaSource({ media: media })}
				alt={media.alt}
				loading="lazy"
				class={cn({
					'media-frame-simple': decoration === 'simpleFrame',
				})}
			/>
		{:else if isVideo(media.mimeType ?? '')}
			<Video src={media.url} />
		{/if}
	</div>
{:else}
	MimeType no soportado ({media})
{/if}
