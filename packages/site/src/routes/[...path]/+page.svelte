<script>
  import Home from '$lib/views/Home.svelte'
  import List from '$lib/views/List.svelte'
  import Domains from '$lib/views/Domains.svelte'
  import Domain from '$lib/views/Domain.svelte'
  import Prose from '$lib/views/Prose.svelte'
  import Vitals from '$lib/views/Vitals.svelte'
  let { data } = $props()
  // The entity chose its view; the URL did not. Unknown views fall back to prose.
  const views = { home: Home, list: List, recent: List, domains: Domains, domain: Domain, prose: Prose, flow: Prose, vitals: Vitals }
  const View = $derived(views[data.view] || Prose)
</script>

<svelte:head><title>{data.label}</title><meta name="description" content={data.description} /></svelte:head>

{#if data.view === 'redirect'}
  <meta http-equiv="refresh" content="0; url={data.to}" />
  <p>Moved to <a href={data.to}>{data.to}</a>.</p>
{:else}
  <View {data} />
{/if}
