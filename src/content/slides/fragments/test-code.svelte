<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Code from '$lib/components/Code.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import Notes from '$lib/components/Notes.svelte';		
	import MdFragment from '$lib/components/MDFragment.svelte';

</script>

<Slide animate>
	<Code id="code" lines>
		{`
      function happiness() {}
    `}
	</Code>
</Slide>
<Slide animate>
	<Code id="code" lines>
		{`
      function happiness() {
        console.log('RevealJS');
      }
    `}
	</Code>
</Slide>