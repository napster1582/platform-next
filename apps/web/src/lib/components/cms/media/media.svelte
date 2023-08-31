<script lang="ts">
	import { resolveMediaSource } from '$lib/utils/resolve-media';
	import type { Media } from '@jinen/cms-annotations';
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
		/>
	{:else if isVideo(content.mimeType ?? '')}
		<Video src={content.url} />
	{/if}
{:else}
	MimeType no soportado ({content})
{/if}
