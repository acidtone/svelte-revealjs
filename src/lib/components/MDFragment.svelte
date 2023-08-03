<script lang="ts">
  import { fragments } from '$lib/fragments';

  export let name = '';

</script>

{#if name}
  <section data-markdown>
    <div data-template>
      {fragments[name][1]}
    </div>
  </section>
{/if}