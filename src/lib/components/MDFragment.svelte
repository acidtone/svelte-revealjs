<script lang="ts">
  import { MdFragments } from '$lib/mdFragments';

  export let name = '';

</script>

{#if name}
  <section data-markdown>
    <div data-template>
      {MdFragments[name][1]}
    </div>
  </section>
{/if}