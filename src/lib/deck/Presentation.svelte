<script lang="ts">
  import Slide from './Slide.svelte'
	import Slides from './Slides.svelte';
</script>

<Slide animate>
  <div>Auto-Animate</div>
</Slide>
<Slide animate>
  <div class="text-red-600 mt-8">Auto-Animate</div>
</Slide>
<Slide>
  Horizontal Slide
</Slide>
<Slide>
  <Slide>Vertical Slide 1</Slide>
  <Slide>Vertical Slide 2</Slide>
</Slide>