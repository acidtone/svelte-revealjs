<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Code from '$lib/components/Code.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import Notes from '$lib/components/Notes.svelte';		
	import MdFragment from '$lib/components/MDFragment.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import SplitPanel from '$lib/components/SplitPanel.svelte';
</script>
<Slide>
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
			## Markdown Code Block
			\`\`\`js [1-2|3|4]
			let a = 1;
			let b = 2;
			let c = x => 1 + 2 + x;
			c(3);
			\`\`\`
		`}
	</Markdown>
</Slide>
<SplitPanel>
	<Code slot="first">
		{`const billTotal = 40;
		const tipRate = 0.18;

		const tip = billTotal * tipRate;
		const tipPercentage = \`$\{tipRate * 100\}%\`;

		console.log(\`$\{tipPercentage\} tip on $$\{billTotal\} is $$\{tip\}.\`);`}
	</Code>
	<Markdown slot="second">
		{`## Instructions
			Refactor the following code into a function so that it:
			1. accepts the variables (defined at the top of the script) as a parameter(s);
					- Note: the variable(s) defined at the top of each script should remain _outside_ the declared function.
			2. returns the result outside of the function using a \`return\` statement;
			3. logs the returned result to the console from _outside_ the function.
			
			You may need to remove irrelevant \`<script>\` elements in the provided \`index.html\` file.`}
	</Markdown>
</SplitPanel>