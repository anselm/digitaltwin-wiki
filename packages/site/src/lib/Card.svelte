<script>
  import Open from '$lib/Open.svelte'
  let { item, date = false } = $props()
</script>
<li class="py-3 border-t border-line flex gap-3">
  {#if item.depiction && !item.kinds.includes("domain")}<a href={item.url} class="shrink-0"><img src={item.depiction} alt="" class="w-12 h-16 object-cover bg-wash" /></a>{:else if item.chips?.length}<a href={item.chips[0].url} class="shrink-0 w-12 h-12 p-1 rounded-sm bg-wash border-b-2" style="border-color:{item.chips[0].colour}" title={item.chips[0].label}><img src={item.chips[0].depiction} alt="" class="w-full h-full" /></a>{:else}<span class="shrink-0 w-12 h-12 rounded-sm border border-line" aria-hidden="true"></span>{/if}
  <div class="min-w-0 flex-1">
  <div class="flex items-baseline gap-2 flex-wrap">
    <a href={item.url} class="text-ink hover:text-accent font-medium">{item.label}</a>
    {#if item.kinds?.length}<span class="text-xs text-muted">{item.kinds.join(', ')}</span>{/if}
    {#if item.status !== 'public'}<span class="text-xs text-muted border border-line px-1">{item.status}</span>{/if}
    {#if date && item.updated}<span class="text-xs text-muted tabular ml-auto">{item.updated}</span>{/if}
  </div>
  {#if item.description}<p class="text-muted text-[0.95rem] mt-0.5">{item.description}</p>{/if}
  {#if item.chips?.length || item.open}
    <p class="mt-1 flex gap-1 flex-wrap items-center">
      {#each item.chips || [] as c}<a href={c.url} class="text-xs text-ink px-1.5 rounded-sm" style="background:{c.colour}55">{c.label}</a>{/each}
      <Open open={item.open} />
    </p>
  {/if}
  </div>
</li>
