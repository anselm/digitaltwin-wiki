<script>
  let { data } = $props()
</script>
<h1 class="text-3xl mt-6">{data.label}</h1>
<p class="text-muted mt-1">{data.description}</p>
<ul class="mt-6">
  {#each data.domains as d}
    <li class="py-3 border-t border-line flex items-center gap-4">
      <a href={d.url} class="shrink-0 w-16 h-16 rounded-sm p-1.5 bg-wash border-b-4" style="border-color:{d.colour}"><img src={d.depiction} alt="" class="w-full h-full" /></a>
      <div><a href={d.url} class="text-ink hover:text-accent font-medium">{d.label}</a><p class="text-sm text-muted">{d.symbol}. <span class="tabular">{d.count}</span> entries.</p></div>
    </li>
  {/each}
</ul>
