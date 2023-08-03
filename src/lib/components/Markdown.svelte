<script lang="ts">
  import { fragments } from '$lib/fragments';

  export let name = 'example.md';
  export let external = false;

  if(external) {
    console.log(fragments[name][1]);
  }

</script>

{#if external}
  <section data-markdown>
    <div data-template>
      {fragments[name][1]}
    </div>
  </section>
{:else}
  <section data-markdown>
    <div data-template>
      <slot />
    </div>
  </section>
{/if}