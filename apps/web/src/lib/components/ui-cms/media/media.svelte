<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Media } from '@jinen/cms-annotations';
	import { resolveMediaSource } from '@jinen/web-resolvers';
	import { Img } from '../../img';
	import { Video } from '../../video';

	export let content: Media | string;

	function isImage(mimeType: string) {
		return mimeType.startsWith('image/');
	}

	function isVideo(mimeType: string) {
		return mimeType.startsWith('video/');
	}
</script>

{#if typeof content === 'object'}
	{#if isImage(content.mimeType ?? '')}
		<Img
			src={resolveMediaSource({ media: content })}
			alt={content.alt}
			loading="lazy"
			class={cn('image-frame-fancy')}
		/>
	{:else if isVideo(content.mimeType ?? '')}
		<Video src={content.url} />
	{/if}
{:else}
	MimeType no soportado ({content})
{/if}
