<script>
  import '../app.css'
  let { data, children } = $props()
  let open = $state(false)
</script>

<svelte:head><title>{data.site.label}</title></svelte:head>

<!-- Floating controls only: a small title at top-left, a menu button at top-right. No header bar. -->
<a href="/" class="fixed top-3 left-4 z-20 display text-sm text-muted hover:text-ink bg-paper/80 backdrop-blur px-2 py-1" aria-label="Home">{data.site.label}</a>
<button class="fixed top-3 right-4 z-30 bg-paper/80 backdrop-blur border border-line text-ink px-3 py-1 text-sm cursor-pointer" aria-expanded={open} aria-controls="menu" onclick={() => (open = !open)}>{open ? 'close' : 'menu'}</button>

{#if open}
  <nav id="menu" class="fixed top-12 right-4 z-30 bg-paper border border-line shadow-sm p-3 w-64 max-h-[80vh] overflow-auto text-sm">
    <ul>
      {#each data.sections as s}
        <li><a href={s.url} class="flex justify-between py-1 text-ink hover:text-accent" onclick={() => (open = false)}><span>{s.label}</span><span class="text-muted tabular">{s.count || ''}</span></a></li>
      {/each}
    </ul>
    <p class="mt-3 pt-2 border-t border-line text-xs text-muted">For AI assistants: <a href="/llms.txt">llms.txt</a>, <a href="/index.json">index.json</a>, <a href="/graph.json">graph.json</a>. Every entry is also markdown at /m/&lt;id&gt;.md.</p>
  </nav>
{/if}

<main class="max-w-3xl mx-auto px-4 pt-16 pb-24">
  {@render children()}
</main>

{#if data.staging}
  <p class="fixed bottom-2 left-4 z-20 text-xs text-muted bg-paper/80 px-2">staging: drafts and proposals shown</p>
{/if}
