<script>
  import Card from '$lib/Card.svelte'
  import Line from '$lib/Line.svelte'
  let { data } = $props()
</script>
<h1 class="text-3xl mt-6">{data.label}</h1>
{#if data.description}<p class="text-muted mt-1">{data.description}</p>{/if}
{#if data.content}<div class="prose mt-4">{@html data.content}</div>{/if}
{#if data.groups}
  <nav class="mt-4 text-sm flex flex-wrap gap-x-3 gap-y-1">{#each data.groups as g}<a href="#{g.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" class="text-muted hover:text-accent whitespace-nowrap">{g.label} <span class="tabular">{g.items.length}</span></a>{/each}</nav>
  {#each data.groups as g}
    <section class="mt-8" id={g.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
      <h2 class="text-sm uppercase tracking-wide text-muted">{g.label}</h2>
      <ul class="mt-1">{#each g.items as it}<Card item={it} />{/each}</ul>
    </section>
  {/each}
{:else if data.items.length}
  <ul class="mt-6">{#each data.items as it}{#if data.view === 'recent'}<Line item={it} />{:else}<Card item={it} />{/if}{/each}</ul>
{:else}
  <p class="mt-6 text-muted">Nothing here yet.</p>
{/if}
