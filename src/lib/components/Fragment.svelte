<script lang="ts">
  import { fragments } from '$lib/fragments';

  export let name = '';

  console.log(fragments[name][1]);
</script>

{#if name}
  <svelte:component this={fragments[name][1].default} />
{/if}