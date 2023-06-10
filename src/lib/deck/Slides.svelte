<script lang="ts">
  import { onMount } from 'svelte'

  import Reveal from 'reveal.js'
	import Highlight from 'reveal.js/plugin/highlight/highlight'
	import Markdown from 'reveal.js/plugin/markdown/markdown'
	import Notes from 'reveal.js/plugin/notes/notes'

	import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/black.css'
	import 'reveal.js/plugin/highlight/monokai.css'

  import Presentation from './Presentation.svelte'

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
      autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true
			// controls: false,
			// progress: false

		})

		deck.initialize()
	})

</script>

<div class="reveal">
  <div class="slides">
    <!-- <section>Slide 1</section>
    <section>Slide 2</section> -->
    <Presentation />
  </div>
</div>