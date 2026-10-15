<script>
  import Dom from './Dom.svelte'
  let { m } = $props()
  const LABEL = { cost: 'Cost', skill: 'You need', like: 'Used by' }
  const facts = ['cost', 'skill', 'like'].filter((f) => f in m.facts)
</script>

<article class="card">
  <div class="tags">
    {#each m.domains as d}<Dom {d} />{/each}
    {#if m.form}<span class="label">{m.form}</span>{/if}
  </div>
  <h3><a href={m.url}>{m.title}</a></h3>
  <p class="see">{m.summary}</p>
  {#if facts.length}
    <div class="facts">
      {#each facts as f}
        <div><span class="label">{LABEL[f]}</span>
          {#if m.facts[f] === 'unknown'}<span class="unk">not yet reviewed</span>{:else}<span>{m.facts[f]}</span>{/if}</div>
      {/each}
    </div>
  {/if}
</article>
