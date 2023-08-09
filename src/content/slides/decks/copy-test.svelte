<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Code from '$lib/components/Code.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import Notes from '$lib/components/Notes.svelte';		
	import MdFragment from '$lib/components/MDFragment.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

</script>

<Slide>
	<p>Code Block</p>
	<Code id="code">
		{`
      function love() {}
    `}
	</Code>
</Slide>

<Slide animate>
	<p>Animated Code Block</p>
	<Code id="code" lines>
		{`
      function love() {}
    `}
	</Code>
</Slide>
<Slide animate>
	<p>Animated Code Block</p>
	<Code id="code" lines>
		{`
      function love() {
        console.log('Svelte');
      }
    `}
	</Code>
</Slide>

<Markdown>
	{`
    ## Markdown
    ### Example
    \`\`\`js [1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    \`\`\`
  `}
</Markdown>
