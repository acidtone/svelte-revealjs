<script lang="ts">
  import Slide from './Slide.svelte';
	import Slides from './Slides.svelte';
  import Code from './Code.svelte';
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
<Slide animate>
  <Code id="code" lines>
    {`
      function love() {}
    `}
  </Code>
</Slide>
<Slide animate>
  <Code id="code" lines>
    {`
      function love() {
        console.log('Svelte');
      }
    `}
  </Code>
</Slide>

<Slide animate>
  <p class="uppercase">Transitions</p>
  <div class="flex gap-2 place-content-center">
    <div data-id="box-1" class="w-[100px] h-[100px] bg-gray-400"></div>
    <div data-id="box-2" class="w-[100px] h-[100px] bg-gray-400"></div>
    <div data-id="box-3" class="w-[100px] h-[100px] bg-gray-400"></div>
  </div>
</Slide>

<Slide animate>
  <p class="uppercase">Transitions</p>
  <div class="flex gap-2 place-content-center">
    <div data-id="box-1" class="w-[200px] h-[200px] bg-red-400"></div>
    <div data-id="box-2" class="w-[200px] h-[200px] bg-green-400"></div>
    <div data-id="box-3" class="w-[200px] h-[200px] bg-blue-400"></div>
  </div>
</Slide>