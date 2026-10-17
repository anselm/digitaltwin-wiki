<script>
  // One-line wiki link: ‘title’, when, then colour-coded chips: kind, domains in their domain colour,
  // the entry's own tags in a soft wash, and status. Lines may wrap; the chips are the point.
  let { item } = $props()
</script>
<li class="py-1.5 border-t border-line leading-snug">
  <a href={item.url} class="text-ink hover:text-accent">‘{item.label}’</a>{#if item.ago}<span class="text-muted">, {item.ago}</span>{/if}
  {#each item.kinds || [] as k} <span class="inline-block whitespace-nowrap text-xs text-muted border border-line px-1">{k}</span>{/each}
  {#each item.chips || [] as c} <a href={c.url} class="inline-block whitespace-nowrap text-xs text-ink px-1.5 rounded-sm" style="background:{c.colour}55">{c.label}</a>{/each}
  {#each item.tags || [] as t} <span class="inline-block whitespace-nowrap text-xs text-muted bg-wash px-1.5 rounded-sm">{t}</span>{/each}
  {#if item.status !== 'public'} <span class="text-xs text-muted border border-line px-1">{item.status}</span>{/if}
</li>
