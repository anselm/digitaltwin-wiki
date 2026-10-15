<script>
  import Card from '$lib/Card.svelte'
  let { data } = $props()
</script>
<div class="mt-6 flex items-center gap-4">
  <span class="shrink-0 w-20 h-20 rounded-sm p-2 bg-wash border-b-4" style="border-color:{data.colour}"><img src={data.depiction} alt="" class="w-full h-full" /></span>
  <div><h1 class="text-3xl">{data.label}</h1><p class="text-muted">{data.description}</p></div>
</div>
{#if data.content}<div class="prose mt-4">{@html data.content}</div>{/if}
{#each data.groups as g}
  <section class="mt-6">
    <h2 class="text-sm uppercase tracking-wide text-muted">{g.label}</h2>
    <ul class="mt-1">{#each g.items as it}<Card item={it} />{/each}</ul>
  </section>
{:else}
  <p class="mt-6 text-muted">No entries in this domain yet.</p>
{/each}
<p class="mt-10 text-xs text-muted">Symbol: {data.credit}.</p>
