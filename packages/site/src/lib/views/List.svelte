<script>
  import Card from '$lib/Card.svelte'
  import Line from '$lib/Line.svelte'
  let { data } = $props()
</script>
<h1 class="text-3xl mt-6">{data.label}</h1>
{#if data.description}<p class="text-muted mt-1">{data.description}</p>{/if}
{#if data.content}<div class="prose mt-4">{@html data.content}</div>{/if}
{#if data.grid}
  <section class="mt-6 border-t border-line pt-3">
    <h2 class="text-sm uppercase tracking-wide text-muted">By pace and area</h2>
    <p class="text-xs text-muted mt-1">{data.grid.legend}</p>
    {#each data.grid.rows as r}
      <h3 class="text-sm mt-4">{r.label}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 mt-1 text-sm">
        {#each r.cells as cell, i}
          <div class="border-t border-line pt-1">
            <div class="text-xs uppercase tracking-wide text-muted">{data.grid.cols[i]} <span class="tabular">{cell.length}</span></div>
            <ul>{#each cell as it}<li class="leading-snug py-0.5"><span class="text-muted" aria-hidden="true">{it.mark}</span> <a href={it.url} class="hover:text-accent">{it.label}</a></li>{/each}</ul>
          </div>
        {/each}
      </div>
    {/each}
  </section>
{/if}
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
