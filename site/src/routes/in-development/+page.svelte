<script>
  let { data } = $props()
  const KIND = { catalogue: 'Instruments', data: 'Data', questions: 'Questions', stories: 'Stories', concepts: 'Concepts', playbook: 'Stages of building one', flows: 'Flows' }
</script>

<svelte:head><title>In development · {data.site.name}</title></svelte:head>

<section class="entry">
  <span class="label">In development</span>
  <h1>Drafted, not yet checked</h1>
  <p class="plain">These entries exist as drafts. Each one is shown once someone has checked it against its sources. If you build or use one of them, you are the right person to check it.</p>
  {#each data.groups as g}
    <h2>{KIND[g.kind] || g.kind}</h2>
    <ul class="dev">{#each g.titles as t}<li>{t}</li>{/each}</ul>
  {/each}
</section>
