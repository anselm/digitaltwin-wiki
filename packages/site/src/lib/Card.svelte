<script>
  let { item, date = false } = $props()
</script>
<li class="py-3 border-t border-line flex gap-3">
  {#if item.depiction && !item.kinds.includes("domain")}<a href={item.url} class="shrink-0"><img src={item.depiction} alt="" class="w-12 h-16 object-cover bg-wash" /></a>{/if}
  <div class="min-w-0 flex-1">
  <div class="flex items-baseline gap-2 flex-wrap">
    <a href={item.url} class="text-ink hover:text-accent font-medium">{item.label}</a>
    {#if item.kinds?.length}<span class="text-xs text-muted">{item.kinds.join(', ')}</span>{/if}
    {#if item.status !== 'public'}<span class="text-xs text-muted border border-line px-1">{item.status}</span>{/if}
    {#if date && item.updated}<span class="text-xs text-muted tabular ml-auto">{item.updated}</span>{/if}
  </div>
  {#if item.description}<p class="text-muted text-[0.95rem] mt-0.5">{item.description}</p>{/if}
  {#if item.chips?.length}
    <p class="mt-1 flex gap-1 flex-wrap">
      {#each item.chips as c}<a href={c.url} class="text-xs text-ink px-1.5 rounded-sm" style="background:{c.colour}55">{c.label}</a>{/each}
    </p>
  {/if}
  </div>
</li>
