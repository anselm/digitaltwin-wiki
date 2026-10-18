<script>
  // What of a thing is reusable: the three Open³ axes (source, data, participation) plus an API.
  // Cards show only what is known to be open or closed; the entry page shows every axis.
  let { open, full = false } = $props()
  const word = { open: 'open', partly: 'partly open', closed: 'closed', unknown: 'unknown' }
  const axes = $derived(open ? [
    ['source', open.source], ['data', open.data], ['API', open.api === 'yes' ? 'open' : open.api === 'no' ? 'closed' : open.api || 'unknown'], ['participation', open.participation]
  ].map(([k, v]) => ({ k, v: v || 'unknown' })).filter((a) => full || a.v !== 'unknown') : [])
  const tone = (v) => v === 'open' ? 'bg-open text-ink' : v === 'partly' ? 'bg-wash text-ink' : v === 'closed' ? 'bg-wash text-muted line-through' : 'bg-wash text-muted'
</script>
{#if axes.length}
  <span class="inline-flex gap-1 flex-wrap">
    {#each axes as a}<span class="text-xs px-1.5 rounded-sm whitespace-nowrap {tone(a.v)}" title="{a.k}: {word[a.v] || a.v}">{a.k === 'API' ? (a.v === 'open' ? 'API' : 'no API') : a.v === 'open' ? `open ${a.k}` : `${word[a.v] || a.v} ${a.k}`}</span>{/each}
    {#if full && open?.licence}<span class="text-xs px-1.5 rounded-sm bg-wash text-muted whitespace-nowrap">{open.licence}</span>{/if}
  </span>
{/if}
