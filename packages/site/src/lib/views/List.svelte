<script>
  import Card from '$lib/Card.svelte'
  let { data } = $props()
</script>
<h1 class="text-3xl mt-6">{data.label}</h1>
{#if data.description}<p class="text-muted mt-1">{data.description}</p>{/if}
{#if data.content}<div class="prose mt-4">{@html data.content}</div>{/if}
{#if data.items.length}
  <ul class="mt-6">{#each data.items as it}<Card item={it} date={data.view === 'recent'} />{/each}</ul>
{:else}
  <p class="mt-6 text-muted">Nothing here yet.</p>
{/if}
