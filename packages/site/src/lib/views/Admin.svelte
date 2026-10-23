<script>
  let { data } = $props()
  const s = $derived(data.status)
</script>

<h1 class="text-3xl mt-6">{data.label}</h1>
{#if data.description}<p class="text-muted mt-1">{data.description}</p>{/if}
{#if data.content}<div class="prose mt-4 max-w-prose">{@html data.content}</div>{/if}

{#if !s}
  <p class="mt-8 text-muted">No status yet: run <code>node tools/status.js</code>.</p>
{:else}
  <p class="mt-6 text-sm text-muted tabular">Built {s.generated}. {s.totals.entries} entries: {s.totals.public} public, {s.totals.proposed} proposed, {s.totals.draft} draft. Mean maturity {s.totals.score}/100. {s.orphanCount} have nothing linking to them.</p>

  <h2 class="text-xl mt-10">Shelves</h2>
  <div class="overflow-x-auto mt-2"><table class="text-sm tabular w-full">
    <thead><tr class="text-left text-muted border-b border-line"><th class="py-1 pr-3 font-normal">Shelf</th><th class="pr-3 font-normal text-right">Entries</th><th class="pr-3 font-normal text-right">Public</th><th class="pr-3 font-normal text-right">Proposed</th><th class="pr-3 font-normal text-right">Draft</th><th class="font-normal text-right">Maturity</th></tr></thead>
    <tbody>{#each s.shelves as r}<tr class="border-b border-line"><td class="py-1 pr-3"><a href="/{r.shelf}/">{r.label}</a></td><td class="pr-3 text-right">{r.entries}</td><td class="pr-3 text-right">{r.public || ''}</td><td class="pr-3 text-right">{r.proposed || ''}</td><td class="pr-3 text-right">{r.draft || ''}</td><td class="text-right">{r.score}</td></tr>{/each}</tbody>
  </table></div>

  {#snippet list(title, note, rows)}
    <h2 class="text-xl mt-10">{title}</h2>
    <p class="text-sm text-muted">{note}</p>
    <ol class="mt-3 space-y-2">
      {#each rows as r}<li class="text-sm"><a href={r.url}>{r.label}</a> <span class="text-muted tabular">· {r.score}/100 · {r.links} link{r.links === 1 ? '' : 's'} in</span>{#if r.issues.length}<br /><span class="text-muted">{r.issues.join('; ')}</span>{/if}</li>{/each}
    </ol>
  {/snippet}
  {@render list('Needs work most', 'Weak pages that many others point to: improving one helps every page that links to it.', s.needs)}
  {@render list('Closest to ready', 'Not yet public, but nearly there: the quickest promotions.', s.ready)}
  {@render list('Most mature', 'The pages furthest along.', s.mature)}

  <h2 class="text-xl mt-10">Nothing links here</h2>
  <p class="text-sm text-muted">{s.orphanCount} entries no other page points to{s.orphanCount > s.orphans.length ? `; the first ${s.orphans.length}` : ''}.</p>
  <p class="text-sm mt-2">{#each s.orphans as o, i}<a href={o.url}>{o.label}</a>{i < s.orphans.length - 1 ? ' · ' : ''}{/each}</p>
{/if}

{#if data.todo}
  <h2 class="text-xl mt-12">Open items</h2>
  <p class="text-sm text-muted">From <code>todo.md</code> in the repository.</p>
  <div class="prose mt-4 max-w-prose">{@html data.todo}</div>
{/if}
