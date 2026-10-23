<script>
  import '../app.css'
  import { page } from '$app/state'
  let { data, children } = $props()
  // Search lives in the floating sidebar so the main display stays free to be rewritten. The index is
  // built after the site by Pagefind (static files under /pagefind/), loaded on first use, and runs in the browser.
  let q = $state(''), hits = $state([]), pf = null, failed = $state(false)
  async function find() {
    if (!q.trim()) { hits = []; return }
    try {
      const at = '/pagefind/pagefind.js'  // a variable, so the bundler leaves it to the browser
      pf ||= await import(/* @vite-ignore */ at)
      const r = await pf.debouncedSearch(q, {}, 200)
      if (r) hits = await Promise.all(r.results.slice(0, 12).map((x) => x.data()))
    } catch { failed = true }
  }
  const go = () => { q = ''; hits = []; if (typeof window !== 'undefined' && window.innerWidth < 1024) mode = 'closed' }
  // 'auto' = open on wide screens, closed on phones, with no JS needed; a tap overrides.
  let mode = $state('auto')
  const panel = $derived(mode === 'auto' ? 'hidden lg:block' : mode === 'open' ? 'block' : 'hidden')
  const toggle = () => (mode = mode === 'open' ? 'closed' : mode === 'closed' ? 'open' : (typeof window !== 'undefined' && window.innerWidth >= 1024) ? 'closed' : 'open')
</script>

<svelte:head><title>{data.site.label}</title></svelte:head>

<!-- Floating controls only: the colophon and table of contents float at the left and can be put away; pages never lay out around them. -->
<button class="fixed top-3 left-4 z-40 bg-paper/80 backdrop-blur border border-line text-ink px-2 py-0.5 text-sm cursor-pointer" aria-controls="contents" onclick={toggle} aria-label="Contents">≡</button>

<nav id="contents" class="{panel} fixed top-0 left-0 bottom-0 z-30 w-64 overflow-auto bg-paper/95 backdrop-blur border-r border-line px-4 pt-12 pb-6 text-sm">
  <a href="/" class="display text-lg text-ink leading-tight block">{data.site.label}</a>
  <p class="text-muted text-xs mt-0.5 leading-snug">{data.site.description}</p>
  <input type="search" bind:value={q} oninput={find} placeholder="Search" aria-label="Search the wiki" class="mt-3 w-full bg-paper border border-line px-2 py-1 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent" />
  {#if q.trim()}
    <ul class="mt-2">
      {#each hits as h}
        <li class="py-1.5 border-b border-line"><a href={h.url} onclick={go} class="text-ink hover:text-accent">{h.meta?.title || h.url}</a><p class="text-xs text-muted leading-snug search-excerpt">{@html h.excerpt}</p></li>
      {:else}
        <li class="py-1 text-xs text-muted">{failed ? 'Search is not available on this copy of the site.' : 'Nothing found yet.'}</li>
      {/each}
    </ul>
  {:else}
  {#each data.areas as [area, label]}
    {@const ss = data.sections.filter((s) => s.area === area)}
    {#if ss.length}
      <p class="mt-4 text-[0.65rem] uppercase tracking-wider text-muted">{label}</p>
      <ul>
        {#each ss as s}
          <li><a href={s.url} class="flex justify-between py-1 text-ink hover:text-accent"><span>{s.label}</span><span class="text-muted tabular">{s.count || ''}</span></a></li>
        {/each}
      </ul>
    {/if}
  {/each}
  {/if}
  <p class="mt-6 pt-3 border-t border-line text-xs text-muted leading-relaxed">
    Contributions come in through <a href="https://github.com/anselm/digitaltwin-wiki">GitHub</a>.<br />
    For AI assistants: <a href="/llms.txt">llms.txt</a>, <a href="/index.json">index.json</a>, <a href="/graph.json">graph.json</a>; every entry is markdown at /m/&lt;id&gt;.md.
  </p>
</nav>

<main data-pagefind-body={page.url.pathname.startsWith('/todo') ? undefined : ''} class="max-w-3xl mx-auto px-4 pt-14 pb-24 {mode === 'closed' ? '' : 'lg:ml-72 lg:mr-8'}">
  {@render children()}
</main>

{#if data.staging}
  <p class="fixed bottom-2 right-4 z-20 text-xs text-muted bg-paper/80 px-2">staging: drafts and proposals shown</p>
{/if}
