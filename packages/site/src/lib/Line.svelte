<script>
  // One-line wiki link: ‘title’, when [kind][tag][status]. No byline: the wiki does not credit its own editors on the front page.
  let { item } = $props()
</script>
<li class="py-1.5 border-t border-line leading-snug">
  <a href={item.url} class="text-ink hover:text-accent">‘{item.label}’</a>
  <span class="text-muted">{#if item.ago}, {item.ago}{/if}</span>
  {#each [...(item.kinds || []), ...(item.tags || [])] as t} <span class="text-xs text-muted border border-line px-1">{t}</span>{/each}
  {#if item.status !== 'public'} <span class="text-xs text-muted border border-line px-1">{item.status}</span>{/if}
</li>
