<script>
  import Home from '$lib/views/Home.svelte'
  import List from '$lib/views/List.svelte'
  import Domains from '$lib/views/Domains.svelte'
  import Domain from '$lib/views/Domain.svelte'
  import Prose from '$lib/views/Prose.svelte'
  import Vitals from '$lib/views/Vitals.svelte'
  import Admin from '$lib/views/Admin.svelte'
  const SITE = 'https://digitaltwins.wiki'
  let { data } = $props()
  // The entity chose its view; the URL did not. Unknown views fall back to prose.
  const views = { home: Home, list: List, recent: List, news: List, tagged: List, domains: Domains, domain: Domain, prose: Prose, flow: Prose, vitals: Vitals, admin: Admin }
  const View = $derived(views[data.view] || Prose)
  const title = $derived(data.view === 'home' ? data.label : `${data.label} · Digital Twins Wiki`)
  const s = $derived(data.share)
  const h = $derived(data.head)
  const NAME = 'Digital Twins Wiki'
  // Structured data (schema.org) for search engines: the site on the home page, a collection on a shelf, an article elsewhere,
  // with the trail back to the home page. A page that describes a paper or report names that work as its citation.
  const ld = $derived.by(() => {
    if (!s || !h) return null
    const url = SITE + s.url, org = { '@type': 'Organization', name: NAME, url: SITE + '/' }
    if (h.kind === 'home') return [{ '@context': 'https://schema.org', '@type': 'WebSite', name: NAME, url, description: data.brief, inLanguage: 'en' }]
    const page = { '@context': 'https://schema.org', '@type': h.kind === 'shelf' ? 'CollectionPage' : 'Article', url, mainEntityOfPage: url, description: data.brief, image: SITE + s.image, inLanguage: 'en', isPartOf: { '@type': 'WebSite', name: NAME, url: SITE + '/' }, publisher: org }
    page[h.kind === 'shelf' ? 'name' : 'headline'] = data.label
    if (h.kind !== 'shelf') page.author = h.people.length ? h.people.map((name) => ({ '@type': 'Person', name })) : org
    if (h.published) page.datePublished = h.published
    if (h.modified) page.dateModified = h.modified
    if (data.tags?.length) page.keywords = data.tags.join(', ')
    if (h.work) {
      const w = { '@type': 'CreativeWork', url: h.work.url }
      if (h.work.authors.length) w.author = h.work.authors.map((name) => ({ '@type': 'Person', name }))
      if (h.work.published) w.datePublished = h.work.published
      if (h.work.publisher) w.publisher = { '@type': 'Organization', name: h.work.publisher }
      page.citation = w
    }
    const trail = [{ name: NAME, url: SITE + '/' }, ...(h.shelf ? [{ name: h.shelf.label, url: SITE + h.shelf.url }] : []), { name: data.label, url }]
    const crumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: t.url })) }
    return [page, crumbs]
  })
  const ldTag = $derived(ld ? `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</${'script'}>` : '')
  const slash = (d) => String(d).replace(/-/g, '/')
</script>

<svelte:head>
  <title>{title}</title>
  {#if data.brief}<meta name="description" content={data.brief} />{/if}
  {#if s}
    <link rel="canonical" href="{SITE}{s.url}" />
    <meta property="og:site_name" content="Digital Twins Wiki" />
    <meta property="og:type" content={data.view === 'home' ? 'website' : 'article'} />
    <meta property="og:url" content="{SITE}{s.url}" />
    <meta property="og:title" content={data.label} />
    {#if data.brief}<meta property="og:description" content={data.brief} />{/if}
    <meta property="og:image" content="{SITE}{s.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={s.alt} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={data.label} />
    {#if data.brief}<meta name="twitter:description" content={data.brief} />{/if}
    <meta name="twitter:image" content="{SITE}{s.image}" />
    <meta name="twitter:image:alt" content={s.alt} />
    {#if h && h.kind !== 'home'}
      {#if h.published}<meta property="article:published_time" content={h.published} />{/if}
      {#if h.modified}<meta property="article:modified_time" content={h.modified} />{/if}
      <!-- Citation tags, read by reference managers. They describe this page, not a paper the page is about. -->
      <meta name="citation_title" content={data.label} />
      {#each h.people.length ? h.people : [NAME] as who}<meta name="citation_author" content={who} />{/each}
      {#if h.published}<meta name="citation_publication_date" content={slash(h.published)} />{/if}
      {#if h.modified}<meta name="citation_online_date" content={slash(h.modified)} />{/if}
      <meta name="citation_publisher" content={NAME} />
      <meta name="citation_public_url" content="{SITE}{s.url}" />
      <meta name="citation_language" content="en" />
    {/if}
    {@html ldTag}
  {/if}
</svelte:head>

{#if data.view === 'redirect'}
  <meta http-equiv="refresh" content="0; url={data.to}" />
  <p>Moved to <a href={data.to}>{data.to}</a>.</p>
{:else}
  <View {data} />
{/if}
