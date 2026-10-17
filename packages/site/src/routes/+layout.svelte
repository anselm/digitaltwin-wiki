<script>
  import '../app.css'
  let { data, children } = $props()
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
  <ul class="mt-5">
    {#each data.sections as s}
      <li><a href={s.url} class="flex justify-between py-1 text-ink hover:text-accent"><span>{s.label}</span><span class="text-muted tabular">{s.count || ''}</span></a></li>
    {/each}
  </ul>
  <p class="mt-6 pt-3 border-t border-line text-xs text-muted leading-relaxed">
    Contributions come in through <a href="https://github.com/anselm/twin-compendium">GitHub</a>.<br />
    For AI assistants: <a href="/llms.txt">llms.txt</a>, <a href="/index.json">index.json</a>, <a href="/graph.json">graph.json</a>; every entry is markdown at /m/&lt;id&gt;.md.
  </p>
</nav>

<main class="max-w-3xl mx-auto px-4 pt-14 pb-24 {mode === 'closed' ? '' : 'lg:ml-72 lg:mr-8'}">
  {@render children()}
</main>

{#if data.staging}
  <p class="fixed bottom-2 right-4 z-20 text-xs text-muted bg-paper/80 px-2">staging: drafts and proposals shown</p>
{/if}
