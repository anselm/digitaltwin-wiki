<script>
  import Home from '$lib/views/Home.svelte'
  import List from '$lib/views/List.svelte'
  import Domains from '$lib/views/Domains.svelte'
  import Domain from '$lib/views/Domain.svelte'
  import Prose from '$lib/views/Prose.svelte'
  import Vitals from '$lib/views/Vitals.svelte'
  const SITE = 'https://digitaltwins.wiki'
  let { data } = $props()
  // The entity chose its view; the URL did not. Unknown views fall back to prose.
  const views = { home: Home, list: List, recent: List, domains: Domains, domain: Domain, prose: Prose, flow: Prose, vitals: Vitals }
  const View = $derived(views[data.view] || Prose)
  const title = $derived(data.view === 'home' ? data.label : `${data.label} · Digital Twins Wiki`)
  const s = $derived(data.share)
</script>

<svelte:head>
  <title>{title}</title>
  {#if data.description}<meta name="description" content={data.description} />{/if}
  {#if s}
    <link rel="canonical" href="{SITE}{s.url}" />
    <meta property="og:site_name" content="Digital Twins Wiki" />
    <meta property="og:type" content={data.view === 'home' ? 'website' : 'article'} />
    <meta property="og:url" content="{SITE}{s.url}" />
    <meta property="og:title" content={data.label} />
    {#if data.description}<meta property="og:description" content={data.description} />{/if}
    <meta property="og:image" content="{SITE}{s.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={s.alt} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={data.label} />
    {#if data.description}<meta name="twitter:description" content={data.description} />{/if}
    <meta name="twitter:image" content="{SITE}{s.image}" />
    <meta name="twitter:image:alt" content={s.alt} />
  {/if}
</svelte:head>

{#if data.view === 'redirect'}
  <meta http-equiv="refresh" content="0; url={data.to}" />
  <p>Moved to <a href={data.to}>{data.to}</a>.</p>
{:else}
  <View {data} />
{/if}
